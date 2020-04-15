import React from 'react'
import styles from './Grid.module.scss';
import GridRow from './GridRow';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWords, selectGrid } from '../../reducers/gridSlice';

function atRowEnd(i) {
    return i !== 0 && i % 15 === 0;
}

export default function Grid() {
    const dispatch = useDispatch();
    const grid = useSelector(selectGrid);
    const gridRows = [];
    let gridCells = [];

    grid.forEach( (letter, i) => {
        if( atRowEnd(i) || i === grid.length - 1) {
            let row = Math.trunc( i / 15);
            gridRows.push(
                <GridRow key={i} row={row} gridCells={gridCells}/>
            );
            gridCells = [];
        }
        gridCells.push(letter);
    });
    
    return (
        <>
            <div className={styles.grid}>
                {gridRows}
            </div>
            <button
                onClick={() => dispatch(fetchWords())}>
                test
            </button>
        </>
    )
}