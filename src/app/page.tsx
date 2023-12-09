"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';

const matrix = [
  [{ img: '/img/tiles/wall-0-0.png'}, { img: '/img/tiles/wall-0-1.png'}, { img: '/img/tiles/wall-0-1.png'}, { img: '/img/tiles/wall-0-1.png'}, { img: '/img/tiles/wall-0-1.png'}, { img: '/img/tiles/wall-0-1.png'}, { img: '/img/tiles/wall-0-1.png'}, { img: '/img/tiles/wall-0-3.png'}],
  [{ img: '/img/tiles/wall-1-0.png'}, { img: '/img/tiles/wall-1-1.png', enemy: true }, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-3.png'}],
  [{ img: '/img/tiles/wall-1-0.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-3.png'}],
  [{ img: '/img/tiles/wall-1-0.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-3.png'}],
  [{ img: '/img/tiles/wall-1-0.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png', hero: true}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-3.png'}],
  [{ img: '/img/tiles/wall-1-0.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-3.png'}],
  [{ img: '/img/tiles/wall-1-0.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-3.png'}],
  [{ img: '/img/tiles/wall-1-0.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-3.png'}],
  [{ img: '/img/tiles/wall-1-0.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png'}, { img: '/img/tiles/wall-1-1.png', enemy: true }, { img: '/img/tiles/wall-1-3.png'}],
  [{ img: '/img/tiles/wall-2-1.png'}, { img: '/img/tiles/wall-2-2.png'}, { img: '/img/tiles/wall-2-2.png'}, { img: '/img/tiles/wall-2-2.png'}, { img: '/img/tiles/wall-2-2.png'}, { img: '/img/tiles/wall-2-2.png'}, { img: '/img/tiles/wall-2-2.png'}, { img: '/img/tiles/wall-2-3.png'}],
]

const Hero = () => {
  const [image, setImage] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImage(prevImage => (prevImage === 4 ? 1 : prevImage + 1));
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Image src={`/img/characters/main/${image}.png`} className="absolute" alt="hero" width="64" height="64" />
  )
}

const Enemy = () => {
  const [image, setImage] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImage(prevImage => (prevImage === 4 ? 1 : prevImage + 1));
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Image src={`/img/enemies/skeleton/${image}.png`} className="absolute" alt="hero" width="64" height="64" />
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div>
        {
          matrix.map((row, rowIdx) => (
            <div className='flex' key={`row-${rowIdx + 1}`}>
              {
                row.map(({ img, hero, enemy }, idx) => (
                  <div key={`row-${rowIdx + 1}-tile-${idx}`}>
                    {
                      hero ? (
                        <Hero />
                      ) : null
                    }
                    {
                      enemy ? (
                        <Enemy />
                      ) : null
                    }
                    <Image src={img} alt="tile" width="64" height="64" />
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
    </main>
  )
}
