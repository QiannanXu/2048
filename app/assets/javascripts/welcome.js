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

    initGrid();
});