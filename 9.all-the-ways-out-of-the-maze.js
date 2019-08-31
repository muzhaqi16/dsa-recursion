let maze1 = [
    [' ', '*', ' ', ' ', ' '],
    [' ', ' ', ' ', '*', ' '],
    ['*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*'],
    [' ', ' ', ' ', ' ', 'e']
];
let maze2 = [
    [' ', '*', ' ', ' ', ' '],
    [' ', ' ', ' ', '*', ' '],
    [' ', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*'],
    [' ', ' ', ' ', ' ', 'e']
];
const findPath = (x, y, maze) => {
    const xSize = maze.length;
    const ySize = maze[0].length;
    if ((x >= xSize || x < 0) || (y >= ySize || y < 0))
        return false
    else if (maze[x][y] === "e")
        return true
    else if (maze[x][y] === "*")
        return false
    else if (maze[x][y] === " ")
        return true
}
const checkNext = (maze, x, y, dir = []) => {
    if (maze[x][y] === 'e') {
        dir.push('E');
        return
    }
    maze[x][y] = '*'
    if (findPath(x, y + 1, maze)) {
        dir.push('R');
        checkNext(maze, x, y + 1, dir);
    }
    else if (findPath(x + 1, y, maze)) {
        dir.push('D')
        checkNext(maze, x + 1, y, dir)
    }
    else if (findPath(x, y - 1, maze)) {
        dir.push('L')
        checkNext(maze, x, y - 1, dir)
    }
    else if (findPath(x - 1, y, maze)) {
        dir.push('U')

        checkNext(maze, x - 1, y, dir)
    }

    return dir
}
checkDirections = (maze, x = 0, y = 0) => {
    const dir = checkNext(maze, x, y);
    if (dir.pop() === 'E')
        return dir
    return 'There is no way out'

}
outOfMaze = (maze) => {
    console.log(checkDirections(maze))
}
outOfMaze(maze2)