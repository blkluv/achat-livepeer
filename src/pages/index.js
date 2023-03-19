import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main>
        <div className={styles.container}>
          {/* Add H1 header with logo text and TV emoji */}
          <h1 className={styles.logo}>
            <span role="img" aria-label="TV">
              🅰️🪙📺
            </span>
            ARVRTISE NFTV
          </h1>
          {/* End of H1 header */}

          <div className={styles.inline-container}>
            <figure>
              <Link href="imagePage">
              <Image src="/images/ADS1.jpg" width={540} height={340} className="img-caller rounded" alt="Responsive image" />
                <figcaption>ADS</figcaption>
              </Link>
            </figure>
            <figure>
              <Link href="chatIndex">
              <Image src="/images/CHAT.jpg" width={540} height={340} className="img-caller rounded" alt="Responsive image" />
                <figcaption>CHAT</figcaption>
              </Link>
            </figure>
            <figure>
              <Link href="upLivepeer">
              <Image src="/images/UPLOAD.jpg" width={540} height={340} className="img-caller rounded" alt="Responsive image" />
                <figcaption>UPLOAD COMMERCIAL</figcaption>
              </Link>
            </figure>
            <figure>
              <Link href="streamming">
              <Image src="/images/LIVE.jpg" width={540} height={340} className="img-caller rounded" alt="Responsive image" />
                <figcaption>LIVE STREAM</figcaption>
              </Link>
            </figure>
          </div>
        </div>
      </main>
    </>
  );
}
