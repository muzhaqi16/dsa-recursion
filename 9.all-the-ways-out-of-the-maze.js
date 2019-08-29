let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', '*', ' '],
    [' ', '*', '*', '*', '*', '*', '*'],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
let mySmallMaze = [
    [' ', ' ', ' ', ' '],
    [' ', '*', ' ', '*'],
    [' ', '*', ' ', ' '],
    [' ', '*', '*', '*'],
    [' ', ' ', ' ', 'e']
];
const findPath = (x, y, maze) => {
    const xSize = maze.length;
    const ySize = maze[0].length;
    //check if it is within the range of array size
    if ((x > xSize || x < 0) || (y > ySize || y < 0))
        return false
    else if (maze[x][y] === "e")
        return true
    //check if it is blocked
    else if (maze[x][y] === "*")
        return false
    //check if it is openou
    else if (maze[x][y] === " ")
        return true
}
const checkNext = (maze, x, y) => {
    //check if it is the exit
    let dir = []
    if (maze[x][y] === "e")
        dir.push('E')
    //check if it can go right
    if (findPath(x, y + 1, maze))
        dir.push('R')
    //check if it can go down
    if (findPath(x + 1, y, maze))
        dir.push('D')
    //check if it can go up
    if (findPath(x - 1, y, maze))
        dir.push('U')
    //check if it can go left
    if (findPath(x, y - 1, maze))
        dir.push('L')
    return dir;
}
const outOfMaze = (maze, currentX = 0, currentY = 0, path = []) => {
    const direction = checkNext(maze, currentX, currentY)

    if (!direction.length === 0) {
        return 'There is no way out of the maze'
    }
    const result = direction.map(dir => {
        if (dir === 'E')
            return path.join("")
        else if (dir === 'R') {
            path.push('R')
            currentY += 1;
        }
        else if (dir === 'D') {
            path.push('D')
            currentX += 1;
        }
        else if (dir === 'U') {
            path.push('U')
            currentX -= 1;
        }
        else if (dir === 'L') {
            path.push('L')
            currentY -= 1;
        }
        maze[currentX][currentY] = '*'
        return outOfMaze(maze, currentX, currentY, path)
    })
    console.log(result)
    return outOfMaze(maze, currentX, currentY, path)
}
outOfMaze(mySmallMaze)