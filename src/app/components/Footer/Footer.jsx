import Image from 'next/image';
import styles from './Footer.module.css';
import {icons} from './data'

export default function Footer() {
    return (
        <div className={styles.container}>
            <div>©2023 Hexashop. All rights reserved.</div>
            <div className={styles.social}>
                {
                    icons.map(icon => 
                        <Image
                            key={icon.id} 
                            src={`/images/icons/${icon.name}.png`}
                            width={20}
                            height={20}
                            className={styles.icon}
                        />
                    )
                }
            </div>
        </div>
    )
}