import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

async function getData() {
    const res = await fetch('https://dummyjson.com/products')
    if(!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function Blog() {

    const data = await getData()
    const products = data.products
    return (
        <div className={styles.container}>
            {
                products.map(product => (
                    <Link href={`/blog/${product.id}`} className={styles.post} key={product.id}>
                        <div className={styles.imageContainer}>
                            <Image
                                className={styles.image}
                                src={product.thumbnail}
                                width={350} height={250}
                            />
                        </div>
                        <div className={styles.content}>
                            <h1 className={styles.title}>{product.title}</h1>
                            <p className={styles.description}>{product.description}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
        
    )
}