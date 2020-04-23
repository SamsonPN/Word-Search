function highlightWord(wordInfo) {
    let { first, dir, word, size } = wordInfo;
    let [row, col] = first;
    let [dRow, dCol] = dir;
    for(let i = 0; i < word.length; i++) {
        let pos = (row * size) + col;
        document.getElementById(`cell${pos}`).setAttribute('highlighted', true);
        row += dRow;
        col += dCol;
    }
}

function clearHighlights() {
    let cells = document.getElementsByClassName('gridCell');
    let words = document.getElementsByClassName('solvedWords');
    [...cells, ...words].forEach(el => {
        el.removeAttribute('highlighted');
    })
}

export {highlightWord, clearHighlights};