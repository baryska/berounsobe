import React from 'react';
import Image from 'next/image';
import styles from './SmallProfile.module.css';

interface Props {
  title: string;
  profession: string;
  number: number;
}

function SmallProfile({ title, profession, number }: Props) {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <span className={styles.infoIcon}>
          <Image src="/infoBlue.svg" alt="info" width="20px" height="20px" />
        </span>
        <p className={styles.title}>{title}</p>
        <p className={styles.profession}>{profession}</p>
        <div className={styles.blueCircle} />
        <span className={styles.number}>{number}</span>
      </div>
    </main>
  )
}

export default SmallProfile