$(function() {
    var grid = document.querySelectorAll(".grid");

    var initGrid = function() {
        generateNumber();
    };

    var generateNumber = function () {
        grid = [[-1, -1, -1, -1], [-1, -1, -1, -1], [-1, -1, -1, -1], [-1, -1, -1, -1]];

        var x, y, possibles = [];

        for(x = 0; x < 4; x++) {
            for(x = 0; x < 4; x++) {
                if(grid[y][x] ===  -1) {
                    possibles.push([x, y]);
                }
            }
        }
    };

    initGrid();
});