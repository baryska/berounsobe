import React from 'react';
import Link from 'next/link';
import BlueDots from '../../components/BlueDots/BlueDots';
import styles from '../Statements/Statements.module.css';

function Statements() {
  return (
    <div className={styles.statements} >
      <div>
        <p className={styles.statement}><strong>Neprodáme</strong> Beroun developerům<span>.</span></p>
      </div>
      <BlueDots />
      <div>
        <p className={styles.statement}>Konečně zajistíme <strong>dostatek míst ve školách a školkách</strong><span>.</span></p>
      </div>
      <BlueDots />
      <div>
        <p className={styles.statement}><strong>Zklidníme</strong> dopravu<span>.</span></p>
      </div>
      <BlueDots />
      <div>
        <p className={styles.statement}>Zajistíme <strong>alternativní zdroj vody</strong><span>.</span></p>
      </div>
      <BlueDots />
      <div>
        <p className={styles.statement}>Budeme s vámi mluvit - <strong>bez arogance</strong><span>.</span></p>
      </div>
     
      <div className={styles.buttonDiv} >
        <Link href="/#cochceme">
          <a className={styles.button}>Chci vědět víc</a>
        </Link>
      </div>

    </div>
  )
}

export default Statements