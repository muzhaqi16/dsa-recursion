let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
let mySmallMaze = [
    [' ', '*', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];
const findPath = (x, y, maze) => {
    const xSize = maze[0].length;
    const ySize = maze.length;
    //check if it is within the range of array size
    if ((x >= 3 || x < 0) || (y >= 3 || y < 0))
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
        return 'U'
    //check if it can go left
    else if (findPath(x - 1, y, maze))
        return 'L'
}
const outOfMaze = (maze, currentX = 0, currentY = 0, path = []) => {
    if (path[path.length - 1] === 'E')
        return path.join("")
    path.push(checkNext(maze, currentX, currentY))
    if (path[path.length - 1] === 'R')
        currentY += 1;
    else if (path[path.length - 1] === 'D')
        currentX += 1;
    else if (path[path.length - 1] === 'U')
        currentX -= 1;
    else if (path[path.length - 1] === 'L')
        currentY -= 1;
    return outOfMaze(maze, currentX, currentY, path)
}
outOfMaze(maze)

