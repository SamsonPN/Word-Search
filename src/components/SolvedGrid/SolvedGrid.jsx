import React from 'react';
import { useSelector } from 'react-redux';
import {
    selectGrid
} from '../../reducers/solverSlice';
import styles from './SolvedGrid.module.scss';

export default function SolvedGrid() {
    const grid = useSelector(selectGrid);
    const gridCells = grid.map((letter, i) => (
        <div
            id={`cell${i}`}
            className={`${styles.gridCell} gridCell`}
            key={i}
            words={'[]'}> 
            {letter}
        </div>
    ))
    return (
        <div className={styles.grid}>
            {gridCells}
        </div>
    )
}
