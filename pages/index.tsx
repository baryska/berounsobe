import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Header } from '../sections/Layout/Header';
import Profile from '../components/Profile/Profile';
import SmallProfile from '../components/SmallProfile/SmallProfile';
import { Profiles, SmallProfiles } from '../data/index';
import Statements from '../components/Statements/Statements';
import IntroPicture from '../components/IntroPicture/IntroPicture';
import ContactForm from '../components/ContactForm/ContactForm';
import Programme from '../components/Programme/Programme';
import styles from '../styles/Home.module.css';
import GroupPic from '../public/vsichni_small.jpg'

const Home: NextPage = () => {

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Beroun sobě</title>
        <meta name="description" content="Beroun sobě - Beroun má na víc!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="referrer" content="no-referrer" />
        <meta property="og:image" content="https://www.berounsobe.eu/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvsichni_small.793a465f.jpeg&w=1920&q=75" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="og:title" content="Beroun sobě" />
        <meta name="og:description" content="Beroun sobě - Beroun má na víc!" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.berounsobe.eu/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvsichni_small.793a465f.jpeg&w=1920&q=75" />
        <meta name="twitter:title" content="Beroun sobě" />
        <meta name="twitter:description" content="Beroun sobě - Beroun má na víc!" />
      </Head>

      <main>
        <section className={styles.home}>
          <Statements />
          <IntroPicture />
          <div className={styles.blueCircle} />
          <div className={styles.blueCircle__2} />
          <div className={styles.blueCircle__3} />
          <button onClick={handleScrollTop} className={styles.arrow}>
            <Image src="/up.svg" width="40px" height="40px" alt="arrow" />
          </button>
        </section>

        <section id="kdojsme" >
          <div className={styles.whoWeAre}>
            <h1 className={styles.aboutUs}>
              <strong>KDO JSME</strong>
              <div>
                <div className={styles.blueDot} />
                <div className={styles.blueDot} />
              </div>
            </h1>
            {Profiles.map((profile) => {
              const { title, profession, text, photo } = profile;
              return (
                <Profile title={title} profession={profession} text={text} photo={photo} key={title} />
              )
            })}
          </div>
          <div className={styles.smallProfiles}>
            {SmallProfiles.map((profile) => {
              const { title, profession, number, photo } = profile;
              return (
                <SmallProfile title={title} profession={profession} number={number} photo={photo} key={title} />
              )
            }
            )}
          </div>
        </section>
        <section id="cochceme" className={styles.cochceme}>
          <Programme />
        </section>
        <section id="napistenam" className={styles.contact}>
          <ContactForm />
        </section>
        <footer className={styles.footer}>© 2022 BEROUN SOBĚ | Barbora Skálová</footer>
      </main>
    </div>
  )
}

export default Home
