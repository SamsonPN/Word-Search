import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectShowResults, setShowResults } from '../../reducers/solverSlice';
import { useHistory } from 'react-router-dom';
import Grid from '../../components/SolvedGrid';
import Words from '../../components/SolvedWords';
import styles from './Results.module.scss';

export default function Results() {
    const showResults = useSelector(selectShowResults);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if( !showResults ) {
            history.push('/solver')
        }
        return () => {
            dispatch(setShowResults(false));
        }
    })

    return (
        <div className={styles.results}>
            <div className={styles.gridWrapper}>
                <Grid />
                <Words />
            </div>
        </div>
    )
}
