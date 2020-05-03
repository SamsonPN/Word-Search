import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Grid from '../../components/Grid';
import WordList from '../../components/WordList';
import { fetchWords, setStartTime } from '../../reducers/gridSlice';
import { generateRandomColor } from '../../utility';
import styles from './Home.module.scss';



export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchWords());
        generateRandomColor();
        dispatch(setStartTime( new Date().getTime() ));
    })
    
    return (
        <div className={styles.home}>
            <div className={styles.gridWrapper}>
                <Grid />
                <WordList />
            </div>
        </div>
    )
}
