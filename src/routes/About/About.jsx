import React from 'react';
import styles from './About.module.scss';
import { Badge } from '../../assets/images';

export default function About() {
    return (
        <div
            className={styles.about}>
                <h1>About:</h1>
                <div className={styles.intro}>
                    <p>
                        Hi, I’m Samson, the creator of this web application.
                        For several years, whenever I’d get pretty bored of doing work, 
                        I’d play a word search game on my phone. 
                        I never really thought of how a word search generator worked 
                        until mid-March when the shelter in place order was enacted in my area. 
                        I was looking for something to do so I decided to create my very own version of the game. 
                        It was an engaging and fruitful 3 weeks of work but I’m quite proud of what it became. 
                        I hope you enjoy this as much as I do and thanks for checking it out!
                    </p>
                    <p>
                        Check out my personal website: 
                        <a href="https://samsonn.com"> samsonn.com </a> 
                        for more of my work and contact information and the 
                        <a href="https://github.com/SotaSamson96/word-search"> github repo </a>
                        for this application: 
                    </p>
                </div>

                <div className={styles.attribution}>
                    <h2>Attribution:</h2>
                    <ul>
                        <li>
                            <a href="https://thenounproject.com/icon/3134095/">Arrow </a>
                            by Rainbow Designs from the Noun Project
                        </li>
                        <li>
                            <a href="https://thenounproject.com/icon/1895382/">Home </a>
                            by Trident from the Noun Project
                        </li>
                        <li>
                            <a href="https://thenounproject.com/icon/2640203/">Write </a>
                            by Susannanova from the Noun Project
                        </li>
                        <li>
                            <a href="https://thenounproject.com/icon/3263170/">Problem Solving </a>
                            by Symbolon from the Noun Project
                        </li>
                        <li>
                            <a href="https://thenounproject.com/icon/1571393/">Save </a>
                            by Ben Davis from the Noun Project
                        </li>
                        <li>
                            <a href="https://thenounproject.com/icon/760871/">about </a>
                            by Chunk Icons from the Noun Project
                        </li>
                    </ul>
                    <a 
                        href="https://wordnik.com"
                        title="Wordnik.com">
                        <img src={Badge} alt="Wordnik Badge"/>
                    </a>
                </div>
        </div>
    )
}
