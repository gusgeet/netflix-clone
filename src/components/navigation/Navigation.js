import React from 'react';

import styles from './Navigation.module.css';
import logo from '../../../src/assets/logo.png';

import SecondaryNavigation from '../secondaryNavigation';

const Navigation = () => {
  const navItems = [
    'Home',
    'TV Show',
    'Movies',
    'News & Popular',
    'My List'
  ]

  return (
    <div className={styles.navigation}>
      <div className={styles.mainNavigation}>
        <img classname ={styles.logo}   src={logo} alt=''/>
        <ul className={styles.navigationList}>
          {navItems.map((item) => (
            <li className={styles.navigationITem} key={item}>{item}</li>
          ))}
        </ul>
      </div>
        <SecondaryNavigation />
    </div>
  )
}

export default Navigation