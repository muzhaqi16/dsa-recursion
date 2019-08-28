let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', ' ', '*'],
    [' ', '*', 'e']
];
const findPath = (x, y, maze) => {
    const xSize = maze.length;
    const ySize = maze[0].length;
    //check if it is within the range of array size
    if ((x >= xSize || x < 0) || (y >= ySize || y < 0))
        return false
    else if (maze[x][y] === "e")
        return true
    //check if it is blocked
    else if (maze[x][y] === "*")
        return false
    //check if it is open
    else if (maze[x][y] === " ")
        return true
}
const checkNext = (maze, x, y) => {
    //check if it is the exit
    if (maze[x][y] === "e")
        return 'E'
    //check if it can go right
    else if (findPath(x, y + 1, maze))
        return 'R'
    //check if it can go down
    else if (findPath(x + 1, y, maze))
        return 'D'
    //check if it can go up
    else if (findPath(x, y - 1, maze))
        return 'L'
    //check if it can go left
    else if (findPath(x - 1, y, maze))
        return 'U'
    return false;
}
const outOfMaze = (maze, currentX = 0, currentY = 0, path = []) => {
    const direction = checkNext(maze, currentX, currentY)
    if (!direction) {
        return 'There is no way out of the maze'
    }
    if (direction === 'E')
        return path.join("")
    else if (direction === 'R')
        currentY += 1;
    else if (direction === 'D')
        currentX += 1;
    else if (direction === 'U') {
        maze[currentX][currentY] = "*"
        currentX -= 1;
    }
    else if (direction === 'L') {
        maze[currentX][currentY] = "*"
        currentY -= 1;
    }
    path.push(direction)
    return outOfMaze(maze, currentX, currentY, path)
}
outOfMaze(mySmallMaze)