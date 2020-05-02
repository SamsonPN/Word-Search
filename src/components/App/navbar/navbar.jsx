import React from 'react'
import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';
import { Arrow, Home, Write, Solver, Saved, About } from '../../../assets/images';

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
                <span>Maker</span>
            </Link>

            <Link 
                className={styles.link}
                to="/solver">
                <img
                    className={styles.linkImg} 
                    src={Solver} 
                    alt="Solver"/>
                <span>Solver</span>
            </Link>

            <Link 
                className={styles.link}
                to="/saved">
                <img
                    className={styles.linkImg} 
                    src={Saved} 
                    alt="Saved"/>
                <span>Saved</span>
            </Link>

            <Link 
                className={styles.link}
                to="/about">
                <img
                    className={styles.linkImg} 
                    src={About} 
                    alt="About"/>
                <span>About</span>
            </Link>
            
        </div>
    )
}
