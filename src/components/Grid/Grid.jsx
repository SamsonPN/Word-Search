import React, { useEffect } from 'react'
import styles from './Grid.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchWords, 
    selectGrid,
    selectFirstChar,
    selectHighlighted,
    setFirstChar,
    setHighlighted
} from '../../reducers/gridSlice';

function canHighlight(firstChar, lastChar) {
    return firstChar !== '' && firstChar !== lastChar;
}

function highlightPath(pathInfo) {
    const {firstChar, lastChar, dispatch, highlighted } = pathInfo;
    if( canHighlight(firstChar, lastChar) ) {
        const directionInfo = findDirection(firstChar, lastChar);
        if( isValidPath(directionInfo) ) {
            removeHighlights(highlighted);
            let { firstPos, wordLength, direction} = directionInfo;
            let { row, col } = firstPos;
            let newHighlights = [];
            while(wordLength + 1 > 0) {
                let currentPos = (row * 15) + col;
                newHighlights.push(currentPos);
                document.getElementById(currentPos).setAttribute('highlighted', true);
                row += direction.row;
                col += direction.col;
                wordLength--;
            }
            dispatch(setHighlighted(newHighlights))
        }
    }
}

function findDirection(firstChar, lastChar) {
    const r1 = Math.trunc(firstChar / 15);
    const c1 = firstChar % 15;
    const r2 = Math.trunc(lastChar / 15);
    const c2 = lastChar % 15;
    const deltaRow = Math.abs(r2 - r1);
    const deltaCol = Math.abs(c2 - c1);
    const wordLength = Math.max(deltaRow, deltaCol);
    const dRow = calculateDirection(r1, r2);
    const dCol = calculateDirection(c1, c2);

    return {
        firstPos: { row: r1, col: c1 },
        lastPos: { row: r2, col: c2 },
        wordLength,
        direction: { row: dRow, col: dCol}
    }
}

function calculateDirection(firstPos, lastPos) {
    const offset = lastPos - firstPos;
    let direction = 0;
    if(offset > 0) {
        direction = 1;
    }
    else if (offset < 0) {
        direction = -1;
    }
    return direction;
}

function removeHighlights(highlighted) {
    highlighted.forEach(highlight => {
        document.getElementById(highlight).removeAttribute('highlighted');
    })
}

function isValidPath(directionInfo) {
    const {firstPos, lastPos, wordLength, direction} = directionInfo;
    const estimatedRow = lastPos.row - (direction.row * wordLength);
    const estimatedCol = lastPos.col - (direction.col * wordLength);
    let valid = false;

    if(estimatedRow === firstPos.row && estimatedCol === firstPos.col) {
        valid = true;
    }
    return valid;
}

export default function Grid() {
    const dispatch = useDispatch();
    const grid = useSelector(selectGrid);
    const firstChar = useSelector(selectFirstChar);
    const highlighted = useSelector(selectHighlighted);

    useEffect(() => {
        dispatch(fetchWords())
    }, [dispatch]);

    const gridCells = grid.map((letter, i) => (
        <div
            id={i}
            key={i}
            className={styles.gridCell}
            onMouseDown={(e) => {
                e.preventDefault();
                dispatch(setFirstChar(i))
            }}
            onMouseEnter={() => highlightPath({firstChar, lastChar: i, dispatch, highlighted})}
            onMouseUp={() => dispatch(setFirstChar(''))}
            row={ Math.trunc( i / 15)}
            col={ i % 15}>
            {letter}
        </div>
    ));
    
    return (
        <>
        <div className={styles.grid}>
            {gridCells}
        </div>
        </>
    )
}