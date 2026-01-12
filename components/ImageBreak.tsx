import Image from 'next/image'
import styles from './ImageBreak.module.css'

export default function ImageBreak() {
  return (
    <div className={styles.imageBreak}>
      <Image
        src="/IMG_0423.JPG"
        alt="Hesteassisteret session"
        fill
        sizes="100vw"
        style={{ objectFit: 'cover' }}
      />
    </div>
  )
}
