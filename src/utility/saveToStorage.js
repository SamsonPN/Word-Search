import localStorage from 'local-storage';

export function saveToStorage(title, wordList, grid) {
    const puzzleInfo = {
        wordList,
        grid
    };
    title = checkTitle(title);
    localStorage(title, puzzleInfo);
}

function checkTitle(title) {
    if(title === '') {
        let num = Object.keys(window.localStorage).length + 1;
        return `Puzzle ${num}`;
    }
    return title;
}