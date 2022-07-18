import Image, { StaticImageData } from 'next/image';
import styles from './Profile.module.css';


interface Props {
  title: string;
  profession: string;
  photo: StaticImageData;
  text: string;
}

const Profile = ({ title, profession, photo, text }: Props) => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.card} style={{ backgroundImage: `url(${photo.src})` }}>
          <span className={styles.infoIcon}>
          <Image src="/info.svg" alt="info" width="30px" height="30px"/>
          </span>
          <div className={styles.info}>
            <div className={styles.title}>
              <p>{title}</p>
              <p className={styles.title__profession}>{profession}</p>
            </div>
            <p className={styles.description}>{text}</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Profile;