import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectGrid,
    selectRows, 
    selectCols,
    setGrid
} from '../../reducers/solverSlice';
import styles from './SolverInput.module.scss';

function checkLetter(letterInfo) {
    const { e, grid, dispatch, pos} = letterInfo;
    const regex = /[^a-z]/gi;
    let letter = e.target.value;
    let gridCopy = [...grid];

    if( letter.match(regex) ) {
        alert("Please enter letters only!");
        e.target.value = "";
    }
    else {
        gridCopy[pos] = letter;
        dispatch(setGrid(gridCopy));
    }
}

export default function SolvedGrid() {
    //onChange dispatch copy of the grid[pos]
    const dispatch = useDispatch();
    const grid = useSelector(selectGrid);
    const rows = useSelector(selectRows);
    const cols = useSelector(selectCols);

    useEffect(() => {
        document.documentElement.style.setProperty('--columns', cols);
    });

    let textareas = [];
    for(let i = 0; i < rows * cols; i++) {
        textareas.push(
            <textarea
                key={i}
                rows="1"
                cols="1"
                maxLength="1"
                onChange={(e) => checkLetter({e, grid, dispatch, pos: i})}>
            </textarea>
        )
    }
    return (
        <div className={styles.grid}>
            {textareas}
        </div>
    )
}
