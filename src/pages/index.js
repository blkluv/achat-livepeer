import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main>
        <div className="container">
          {/* Add H1 header with logo text and TV emoji */}
          <h1>
            <span role="img" aria-label="TV">
            🅰️🪙📺
            </span>
            ARVRTISE NFTV
          </h1>
          {/* End of H1 header */}

          <div className="inline-container">
            <figure>
              <Link href="imagePage">
                <img
                  src="images/ADS1.jpg"
                  className="img-caller rounded"
                  alt="Responsive image"
                />
                <figcaption style={{ marginLeft: 240 }}>ADS</figcaption>
              </Link>
            </figure>
            <figure>
              <Link href="chatIndex">
                <img
                  src="images/CHAT.jpg"
                  className="img-caller rounded"
                  alt="Responsive image"
                />
                <figcaption style={{ marginLeft: 240 }}>CHAT</figcaption>
              </Link>
            </figure>
            <figure>
              <Link href="upLivepeer">
                <img
                  src="images/UPLOAD.jpg"
                  className="img-caller rounded"
                  alt="Responsive image"
                />
                <figcaption style={{ marginLeft: 170 }}>
                  UPLOAD COMMERCIAL
                </figcaption>
              </Link>
            </figure>
            <figure>
              <Link href="streamming">
                <img
                  src="images/LIVE.jpg"
                  className="img-caller rounded"
                  alt="Responsive image"
                />
                <figcaption style={{ marginLeft: 230 }}>LIVE STREAM</figcaption>
              </Link>
            </figure>
          </div>
        </div>
      </main>
    </>
  );
}
