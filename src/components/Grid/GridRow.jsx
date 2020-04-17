import React from 'react';
import styles from './Grid.module.scss';


export default function GridRow(props) {
    const { row, gridCells } = props;
    let gridCellContainer = gridCells.map((cell, i) => (
        <div
            draggable='true'
            key={i}
            row={row}
            col={i}>
            {cell}
        </div>
    ))
    return (
        <div className={styles.gridRow}>
            {gridCellContainer}
        </div>
    )
}
