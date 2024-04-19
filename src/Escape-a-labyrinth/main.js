
//Escape a labyrinth
//You have a labyrinth. The map is represented as a matrix of 0s and 1s, where 0s are passable space and 1s are impassable walls. The door out of the labyrinth is at the top left (0,0) and the door into the labyrinth is at the bottom right (w-1,h-1).
//Write a function solution(map) that generates the length of the shortest path from the entry point to the exit, where you are allowed to remove one wall as part of your strategy. The path length is the total number of nodes you pass through, counting both the entrance and exit. The starting and ending positions are always passable (0). The map will always be solvable, though you may or may not need to remove a wall to solve it. The height and width of the map can be from 2 to 20. Moves can only be made in cardinal directions; no diagonal moves are allowed.
//For example:
//Your code should pass the following test cases. Note that it may also be run against other test cases not shown here.
//Input with matrix [[0, 0, 0, 0, 0, 0],
    //               [1, 1, 1, 1, 1, 0], 
    //               [0, 0, 0, 0, 0, 0], 
    //               [0, 1, 1, 1, 1, 1], 
    //               [0, 1, 1, 1, 1, 1], 
    //               [0, 0, 0, 0, 0, 0]      ]) Should Output: 11

//Input with matrix [[0, 1, 1, 0],
    //               [0, 0, 0, 1],
    //               [1, 1, 0, 0],
    //               [1, 1, 1, 0]]) Should Output: 7
//
    //
    //
    //
    //
function solution(map) {
    const height = map.length;
    const width = map[0].length;
    
    // up, down, left, right
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    const isValid = (x, y) => x >= 0 && x < height && y >= 0 && y < width;

    const visited = Array.from({ length: height }, () => Array(width).fill(-1));

    const queue = [{ x: 0, y: 0, walls: 0 }];
    visited[0][0] = 1;

    while (queue.length > 0) {
        const { x, y, walls } = queue.shift();

        // if exit
        if (x === height - 1 && y === width - 1) {
            return visited[x][y];
        }

        for (const [dx, dy] of dirs) {
            const newX = x + dx;
            const newY = y + dy;

            if (isValid(newX, newY)) {
                if (map[newX][newY] === 1) {
                    if (walls === 0 && (visited[newX][newY] === -1 || visited[newX][newY] > visited[x][y] + 1)) {
                        visited[newX][newY] = visited[x][y] + 1;
                        queue.push({ x: newX, y: newY, walls: 1 });
                    }
                } else {
                    if (visited[newX][newY] === -1 || visited[newX][newY] > visited[x][y] + 1) {
                        visited[newX][newY] = visited[x][y] + 1;
                        queue.push({ x: newX, y: newY, walls });
                    }
                }
            }
        }
    }
}

const map = [
    [0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0]
];

console.log(solution(map));

console.log(solution(
         [[0, 1, 1, 0],
          [0, 0, 0, 0],
          [1, 1, 1, 1],
          [1, 1, 1, 0]]))

console.log(solution([[0, 1, 1, 0]
                    , [0, 0, 0, 1], 
                      [1, 1, 0, 0], 
                      [1, 1, 1, 0]]))




