import React from 'react'
import Search from './../search/index';
import Notif from './../Notif/index';
import userMenu from './../userMenu/index';
import BillboardSettings from '../billboardSettings';
import styles from './secondaryNavigation.module.css';

const secondaryNavigation = () => {
  return (
    <div className={styles.secondNav}>
      <Search />
      <Notif />
      <userMenu />
      <BillboardSettings />
    </div>
  )
}

export default secondaryNavigation