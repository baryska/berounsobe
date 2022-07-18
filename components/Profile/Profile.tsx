import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import styles from './Profile.module.css';


interface Props {
  title: string;
  profession: string;
  photo: StaticImageData;
  text: string;
}

const Profile = ({ title, profession, photo, text }: Props) => {
  const [infoOpen, setInfoOpen] = useState(false);




  return (
    <>
      <main className={styles.main}>
        <div
          className={styles.card}
          style={{ backgroundImage: `url(${photo.src})` }}
          onMouseEnter={() => setInfoOpen(true)}
          onMouseLeave={() => setInfoOpen(false)}
          onClick={() => setInfoOpen(!infoOpen)}
        >
          {!infoOpen && (
            <button className={styles.infoIcon} onClick={() => setInfoOpen(true)}>
              <Image src="/info.svg" alt="info" width="30px" height="30px" />
            </button>
          )}
          <button className={styles.infoIcon} onClick={() => setInfoOpen(true)}>
            <Image src="/info.svg" alt="info" width="30px" height="30px" />
          </button>
          <div className={styles.info} style={infoOpen ? { transform: 'translateY(0) translateZ(0)' } : { transform: 'translateY(100%) translateY(-88px) translateZ(0)' }}>
            <div className={styles.title}>
              <p>{title}</p>
              {infoOpen && (
                <button className={styles.closeIcon}>
                  <Image src="/cross.svg" alt="close" width="30px" height="30px" />
                </button>
              )}
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