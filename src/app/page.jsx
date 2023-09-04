import styles from './page.module.css';
import Hero from '/public/images/hero.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>Your one-stop e-commerce destination!</h1>
        <p className={styles.description}>Discover a world of endless shopping possibilities at our online store. Browse, choose,</p>
        <button className={styles.button}>Shop Now</button>
      </div>
      <div className={styles.col}>
        <Image src={Hero} className={styles.img}/>
      </div>

    </div>
  )
}