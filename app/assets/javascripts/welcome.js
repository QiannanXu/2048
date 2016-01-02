$(function() {
    var gridElem = document.getElementsByClassName("grid")[0];
    var touchElem = document.getElementsByClassName("touch")[0];
    var scoreElem = document.getElementsByClassName("score")[0];

    var score = 0, grid;

    var initGrid = function() {
        grid = [[-1, -1, -1, -1], [-1, -1, -1, -1], [-1, -1, -1, -1], [-1, -1, -1, -1]];

        restructure();
        updateGrid();
    };

    var restructure = function () {
        var x, y, possibles = [];

        for(x = 0; x < 4; x++) {
            for(y = 0; y < 4; y++) {
                if(grid[x][y] ===  -1) {
                    possibles.push([x, y]);
                }
            }
        }

        if(possibles.length) {
            var randomBlock = possibles[(Math.floor(Math.random() * possibles.length))],
                x = randomBlock[0],
                y = randomBlock[1];

            grid[x][y] = 2;
        } else {
            //if(!checkMoveable()) {
            //    //gameover();
            //}
        }
    };

    var updateGrid = function() {
        var e, x, y;

        for(x = 0; x < 4; x++) {
            for(y = 0; y < 4; y++) {
                e = gridElem.getElementsByTagName("div")[(x * 4) + y];

                if(grid[x][y] !== -1) {
                    e.innerHTML = grid[x][y];
                    e.setAttribute("class", "b" + grid[x][y]);
                } else {
                    e.innerHTML = "";
                    e.setAttribute("class", "bv");
                }
            }
        }
    };

    var keyPress = function (code) {
        if(code === 37 || code === 74)
            moveGrid(4); // left
        else if(code === 38 || code === 73)
            moveGrid(1); // up
        else if(code === 39 || code === 76)
            moveGrid(2); // right
        else if(code === 40 || code === 75)
            moveGrid(3); // down
    };

    var moveGrid = function(direction) {
        moveAllGridToOneDirection(direction);

        var x, y, j;
        //up
        if(direction === 1) {
            for(y = 0; y < 4; y++) {
                for(x = 0; x < 3; x++) {
                    if(grid[x][y] === grid[x+1][y] && grid[x][y] !== -1) {
                        grid[x][y] *=2;
                        grid[x+1][y] = -1;
                    }
                }
            }
        } else if(direction === 2) {
            for(x = 0; x < 4; x++){
                for(y = 3; y > 0; y--){
                    if(grid[x][y] === grid[x][y-1] && grid[x][y] !== -1){
                        grid[x][y] *= 2;
                        grid[x][y-1] = -1;
                    }
                }
            }
        } else if(direction === 3) {
            for(y = 0; y < 4; y++) {
                for(x = 3; x > 0; x--) {
                    if(grid[x][y] === grid[x-1][y] && grid[x][y] !== -1){
                        grid[x][y] *= 2;
                        grid[x-1][y] = -1;
                    }
                }
            }
        } else if (direction === 4) {
            for(x = 0; x < 4; x++){
                for(y = 0; y < 3; y++){
                    if(grid[x][y] === grid[x][y+1] && grid[x][y] !== -1){
                        grid[x][y] *= 2;
                        grid[x][y+1] = -1;
                    }
                }
            }
        }

        moveAllGridToOneDirection(direction);
        restructure();
        updateGrid();
    };

    var moveAllGridToOneDirection = function(direction) {
        var x, y, j;

        if(direction === 1) {
            //up
            for(y = 0; y < 4; y++){
                for(x = 0; x <= 2; x++) {
                    for(j = 3; j > x; j--) {
                        if(grid[j][y] > grid[j-1][y] && (grid[j][y]===-1 || grid[j-1][y]===-1)) {
                            grid[j-1][y] = grid[j][y];
                            grid[j][y] = -1;
                        }
                    }
                }
            }
        } else if(direction === 2) {
            //right
            for(x = 0; x < 4; x++){
                for(y = 3; y > 0; y--){
                    for(j = 0; j < y; j++){
                        if(grid[x][j] > grid[x][j+1] && (grid[x][j]===-1 || grid[x][j+1]===-1)){
                            grid[x][j+1] = grid[x][j];
                            grid[x][j] = -1;
                        }
                    }
                }
            }
        } else if(direction === 3) {
            //down
            for(y = 0; y < 4; y++){
                for(x = 3; x >= 1; x--){
                    for(j = 0; j < x; j++){
                        if(grid[j][y] > grid[j+1][y] &&(grid[j][y]===-1 || grid[j+1][y]===-1)){
                            grid[j+1][y] = grid[j][y];
                            grid[j][y] = -1;
                        }
                    }
                }
            }
        } else if(direction === 4){
            //left
            for(x = 0; x < 4; x++){
                for(y = 0; y < 3; y++){
                    for(j = 3; j > y; j--){
                        if(grid[x][j] > grid[x][j-1] && ( grid[x][j]===-1|| grid[x][j-1]===-1)){
                            grid[x][j-1] = grid[x][j];
                            grid[x][j] = -1;
                        }
                    }
                }
            }
        }

    };

    document.onkeydown = function(e) {
        keyPress(e.keyCode);
    };

    initGrid();
});