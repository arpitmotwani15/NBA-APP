import React from 'react'
import styles from './footer.css';
import {Link} from 'react-router-dom';
import {CURRENT_YEAR} from '../../config';
export const footer = () => (
        <div className={styles.footer}>
            <Link to="/" className={styles.logo}>
            <img className={styles.logo} alt="logo" src="/images/nba_logo.png"/>
            </Link>
            <div className={styles.right}>
                @NBA {CURRENT_YEAR}all right reserved.
            </div>
        </div>
    )

export default footer   