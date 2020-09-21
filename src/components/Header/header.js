import React from 'react';
import styles from './header.css';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import SideNav from './SideNav/sideNav';

const Header = (props) => {

  const navBars = () =>(
    
    <div className={styles.bars}>
      <FontAwesome name="bars" 
      onClick={ props.onOpenNav }
      style={{  
        color:'#dfdfdf',
        padding :'10px',
        cursor:'pointer'
         }}/>
    </div>

  ) 
  const logo = ()=>{
    return(
      <Link to="/">
    <img className={styles.logo} alt="logo" src="/images/nba_logo.png"/>
    </Link>
    )
  }
    return(
        <header className={ styles.header }> 
        <SideNav {...props} />
        <div className={ styles.headerOpt }>
          {navBars()}
          {logo()}
        </div>
        </header>
    )
}

export default Header;