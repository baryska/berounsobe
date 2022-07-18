import React from 'react';
import styles from './Burger.module.css'


const Burger = ({ onBurgerClick, open }) => {

  return (
    <div className={styles.button} onClick={() => onBurgerClick()}>
      <div className={!open ? styles.burger : styles.cross}/>
      <div className={!open ? styles.burger : styles.cross}/>
      <div className={!open ? styles.burger : styles.cross}/>
    </div>
  )
}

export default Burger;