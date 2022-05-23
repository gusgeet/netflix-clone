import React from 'react';
import styles from './links.module.css';

const Links = () => {
    const links = [
        'Audio y subtitulos',
        'Audio descriptivo',
        'Centro de ayuda',
        'Tarjetas de regalo',        
        'Prensa',
        'Relaciones con inversionistas',
        'Empleo',
        'Términos de uso',
        'Privacidad',
        'Avisos legales',
        'Preferencias de cookies',
        'Información corporativa',
        'Contactános',                
    ]
  return (
    <div className={styles.links}>
        <ul className={styles.footerLinks}>
            {links.map((item) => (
                <li className={styles.footerlist} key={item}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default Links;