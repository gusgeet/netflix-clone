import React from 'react'
import styles from './Footer.module.css';
import SocialLinks from '../SocialLinks/SocialLinks';
import Links from '../links/links';

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.SocialLinks}>
        <SocialLinks />
      </div>
      <div className={styles.links}>
        <Links />
      </div>
      <div>
        <button className={styles.button}>
          Código de servicio
        </button>


      </div>
      <div className={styles.copyright}></div>
    </div>
  )
}

export default Footer