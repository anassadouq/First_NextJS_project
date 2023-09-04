import styles from './page.module.css'
import Image from 'next/image'

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  if(!res.ok) {
      throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Post({params}) {

  const product = await getData(params.id)

  return (
    <div className={styles.container}>
      <header className={styles.container}>
        <div className={styles.info}>
            <h1 className={styles.title}>{product.title}</h1>
            <p className={styles.description}>{product.description}</p>
        </div>
        <div className={styles.imageContainer}>
            <Image
                className={styles.image}
                src={product.thumbnail}
                fill={true}
            />
            <span className={styles.author}>{product.category}</span>
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.gallery}>
          {product.images.map(image => (
            <Image
              key={product.id}
              src={image}
              width={200}
              height={200}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
