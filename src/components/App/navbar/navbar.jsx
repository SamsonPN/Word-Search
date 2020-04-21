import React from 'react'
import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';
import { Arrow, Home, Write, Solver, Badge } from '../../../assets';

export default function navbar() {
    return (
        <div className={styles.navbar} >

            <div className={styles.logo}>
                <span>WORD SEARCH</span>
                <img 
                    className={styles.linkImg}
                    src={Arrow} 
                    alt="Arrow"/>
            </div>

            <Link 
                className={styles.link}
                to="/">
                <img 
                    className={styles.linkImg}
                    src={Home} 
                    alt="Home"/>
                <span>Home</span>
            </Link>

            <Link 
                className={styles.link}
                to="/maker">
                <img 
                    className={styles.linkImg}
                    src={Write} 
                    alt="Pencil"/>
                <span>Puzzle Maker</span>
            </Link>

            <Link 
                className={styles.link}
                to="/solver">
                <img
                    className={styles.linkImg} 
                    src={Solver} 
                    alt="Solver"/>
                <span>Puzzle Solver</span>
            </Link>
            <a
                className={styles.attribution}
                href="https://www.wordnik.com/"
                title="Go to Wordnik.com">
                <img 
                    src={Badge} 
                    alt="Powered by Wordnik <3"/>
            </a>
        </div>
    )
}
