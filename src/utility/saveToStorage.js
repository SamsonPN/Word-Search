import localStorage from 'local-storage';

export function saveToStorage(title, wordList) {
    localStorage.clear();
    title = checkTitle(title);
    localStorage(title, wordList);
}

function checkTitle(title) {
    if(title === '') {
        let num = Object.keys(window.localStorage).length + 1;
        return `Puzzle ${num}`;
    }
    return title;
}