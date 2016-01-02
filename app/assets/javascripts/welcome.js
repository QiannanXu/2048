$(function() {
    var gridElem = document.getElementsByClassName("grid")[0];
    var touchElem = document.getElementsByClassName("touch")[0];
    var scoreElem = document.getElementsByClassName("score")[0];

    var score = 0, grid;

    var initGrid = function() {
        generateNumber();
        updateGrid();
    };

    var generateNumber = function () {
        grid = [[-1, -1, -1, -1], [-1, -1, -1, -1], [-1, -1, -1, -1], [-1, -1, -1, -1]];

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
        var x, y;
        //up
        if(direction === 1) {
            console.log("up");
            for(y = 0; y < 4; y++) {

            }
        } else if(direction === 2) {
            console.log("right");
        } else if(direction === 3) {
            console.log("down");
        } else if (direction === 4) {
            console.log("left");
        }
    };

    document.onkeydown = function(e) {
        keyPress(e.keyCode);
    };

    initGrid();
});