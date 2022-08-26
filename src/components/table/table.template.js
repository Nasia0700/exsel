const CODES = {
    A: 65,
    Z: 90
}

function createRow(count, content) {
    return `
    <div class = "row">
        <div class="row-info">${count}</div>
        <div class="row-data">${content}</div>
    </div>
    `
}

function toCol(col) {
    return `
    <div class="column">${col}</div>
    `
}

function toCell() {
    return `
    <div class="cell" contenteditable></div>
    `
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) {
    const colsCount = CODES.Z - CODES.A + 1
    const rows = []
    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(toCol)
        .join('')

    rows.push(createRow('', cols))

    for (let i = 1; i < rowsCount; i++) {
        const cell = new Array(colsCount)
            .fill('')
            .map(toCell)
            .join('')

        rows.push(createRow(i, cell))
    }

    return rows.join('')
}