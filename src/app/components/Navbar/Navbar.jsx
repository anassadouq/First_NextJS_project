import Link from "next/link";
import styles from "./Navbar.module.css";
import {links} from './data';
import Button from '../Button/Button';
import Logo from "../Logo/Logo";

export default function Navbar() {
    return (
        <div className={styles.container}>
            <Logo/>
            
            <div className={styles.links}>
                {links.map((link) => ( 
                    <Link key={link.id} href={link.url} className={styles.logo}>{link.title}</Link>
                ))}

                <Button/>
            </div>
        </div>
    )
}