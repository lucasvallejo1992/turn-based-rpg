"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Tile {
  img: string;
}

type Matrix = {
  [rowIndex: number]: { [columnIndex: number]: Tile };
};

const mapSize = new Array(9).fill(null);

const matrix: Matrix = {
  0: { 0: { img: '/img/tiles/wall-0-0.png' }, 1: { img: '/img/tiles/wall-0-1.png'}, 2: { img: '/img/tiles/wall-0-1.png'}, 3: { img: '/img/tiles/wall-0-1.png'}, 4: { img: '/img/tiles/wall-0-1.png'}, 5: { img: '/img/tiles/wall-0-1.png'}, 6: { img: '/img/tiles/wall-0-1.png'}, 7: { img: '/img/tiles/wall-0-1.png'}, 8: { img: '/img/tiles/wall-0-3.png'}},
  1: { 0: { img: '/img/tiles/wall-1-0.png' }, 1: { img: '/img/tiles/floor.png'}, 2: { img: '/img/tiles/floor.png'}, 3: { img: '/img/tiles/floor.png'}, 4: { img: '/img/tiles/floor.png'}, 5: { img: '/img/tiles/floor.png'}, 6: { img: '/img/tiles/floor.png'}, 7: { img: '/img/tiles/floor.png'}, 8: { img: '/img/tiles/wall-1-3.png'}},
  2: { 0: { img: '/img/tiles/wall-1-0.png' }, 1: { img: '/img/tiles/floor.png'}, 2: { img: '/img/tiles/floor.png'}, 3: { img: '/img/tiles/floor.png'}, 4: { img: '/img/tiles/floor.png'}, 5: { img: '/img/tiles/floor.png'}, 6: { img: '/img/tiles/floor.png'}, 7: { img: '/img/tiles/floor.png'}, 8: { img: '/img/tiles/wall-1-3.png'}},
  3: { 0: { img: '/img/tiles/wall-1-0.png' }, 1: { img: '/img/tiles/floor.png'}, 2: { img: '/img/tiles/floor.png'}, 3: { img: '/img/tiles/floor.png'}, 4: { img: '/img/tiles/floor.png'}, 5: { img: '/img/tiles/floor.png'}, 6: { img: '/img/tiles/floor.png'}, 7: { img: '/img/tiles/floor.png'}, 8: { img: '/img/tiles/wall-1-3.png'}},
  4: { 0: { img: '/img/tiles/wall-1-0.png' }, 1: { img: '/img/tiles/floor.png'}, 2: { img: '/img/tiles/floor.png'}, 3: { img: '/img/tiles/floor.png'}, 4: { img: '/img/tiles/floor.png'}, 5: { img: '/img/tiles/floor.png'}, 6: { img: '/img/tiles/floor.png'}, 7: { img: '/img/tiles/floor.png'}, 8: { img: '/img/tiles/wall-1-3.png'}},
  5: { 0: { img: '/img/tiles/wall-1-0.png' }, 1: { img: '/img/tiles/floor.png'}, 2: { img: '/img/tiles/floor.png'}, 3: { img: '/img/tiles/floor.png'}, 4: { img: '/img/tiles/floor.png'}, 5: { img: '/img/tiles/floor.png'}, 6: { img: '/img/tiles/floor.png'}, 7: { img: '/img/tiles/floor.png'}, 8: { img: '/img/tiles/wall-1-3.png'}},
  6: { 0: { img: '/img/tiles/wall-1-0.png' }, 1: { img: '/img/tiles/floor.png'}, 2: { img: '/img/tiles/floor.png'}, 3: { img: '/img/tiles/floor.png'}, 4: { img: '/img/tiles/floor.png'}, 5: { img: '/img/tiles/floor.png'}, 6: { img: '/img/tiles/floor.png'}, 7: { img: '/img/tiles/floor.png'}, 8: { img: '/img/tiles/wall-1-3.png'}},
  7: { 0: { img: '/img/tiles/wall-1-0.png' }, 1: { img: '/img/tiles/floor.png'}, 2: { img: '/img/tiles/floor.png'}, 3: { img: '/img/tiles/floor.png'}, 4: { img: '/img/tiles/floor.png'}, 5: { img: '/img/tiles/floor.png'}, 6: { img: '/img/tiles/floor.png'}, 7: { img: '/img/tiles/floor.png'}, 8: { img: '/img/tiles/wall-1-3.png'}},
  8: { 0: { img: '/img/tiles/wall-2-1.png' }, 1: { img: '/img/tiles/wall-2-2.png'}, 2: { img: '/img/tiles/wall-2-2.png'}, 3: { img: '/img/tiles/wall-2-2.png'}, 4: { img: '/img/tiles/wall-2-2.png'}, 5: { img: '/img/tiles/wall-2-2.png'}, 6: { img: '/img/tiles/wall-2-2.png'}, 7: { img: '/img/tiles/wall-2-2.png'}, 8: { img: '/img/tiles/wall-2-3.png'}},
}

const EMPTY_TYLE_IMG = '/img/tiles/wall-outer.png';

const Hero = () => {
  const [image, setImage] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImage(prevImage => (prevImage === 4 ? 1 : prevImage + 1));
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Image src={`/img/characters/main/1.png`} className={`absolute ${image === 1 ? '' : 'hidden'}`} alt="hero" width="64" height="64" />
      <Image src={`/img/characters/main/2.png`} className={`absolute ${image === 2 ? '' : 'hidden'}`} alt="hero" width="64" height="64" />
      <Image src={`/img/characters/main/3.png`} className={`absolute ${image === 3 ? '' : 'hidden'}`} alt="hero" width="64" height="64" />
      <Image src={`/img/characters/main/4.png`} className={`absolute ${image === 4 ? '' : 'hidden'}`} alt="hero" width="64" height="64" />
    </>
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
    <>
      <Image src={`/img/enemies/skeleton/1.png`} className={`absolute ${image === 1 ? '' : 'hidden'}`} alt="hero" width="64" height="64" />
      <Image src={`/img/enemies/skeleton/2.png`} className={`absolute ${image === 2 ? '' : 'hidden'}`} alt="hero" width="64" height="64" />
      <Image src={`/img/enemies/skeleton/3.png`} className={`absolute ${image === 3 ? '' : 'hidden'}`} alt="hero" width="64" height="64" />
      <Image src={`/img/enemies/skeleton/4.png`} className={`absolute ${image === 4 ? '' : 'hidden'}`} alt="hero" width="64" height="64" />
    </>
  );
}

export default function Home() {
  const [heroPosition, setHeroPosition] = useState({row: 4, col: 4});
  const [enemiesPosition, setEnemiesPosition] = useState([{row: 1, col: 2}, {row: 7, col: 5}]);
  
  const [enemiesCoordinates, setEnemiesCoorndinates] = useState<string[]>([]);
  const [cameraCoordinates, setCameraCoordinates] = useState({row: 0, col: 0});

  useEffect(() => {
    setEnemiesCoorndinates(enemiesPosition.map(({ row, col}) => `${row}-${col}`));
  }, [enemiesPosition, enemiesPosition.length]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div>
        {
          mapSize.map((row, rowIndex) => (
            <div className='flex' key={`row-${rowIndex + 1}`}>
              {
                mapSize.map((col, columnIndex) => (
                  <div key={`row-${rowIndex + 1}-tile-${columnIndex}`}>
                    {
                      `${heroPosition.row}-${heroPosition.col}` === `${rowIndex}-${columnIndex}` ? (
                        <Hero />
                      ) : null
                    }
                    {
                      enemiesCoordinates.includes(`${rowIndex + cameraCoordinates.row}-${columnIndex + cameraCoordinates.col}`) ? (
                        <Enemy />
                      ) : null
                    }
                    <Image src={matrix[rowIndex + cameraCoordinates.row]?.[columnIndex + cameraCoordinates.col]?.img || EMPTY_TYLE_IMG} alt="tile" width="64" height="64" />
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
      <div className="flex gap-2 mb-2 mt-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setCameraCoordinates(cameraPosition => ({ ...cameraPosition, row: cameraPosition.row - 1 }))
            // setHeroPosition(heroPosition => ({ ...heroPosition, row: heroPosition.row - 1 }))
          }}
        >
          Up
        </button>
      </div>
      <div className="flex gap-2 mb-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setCameraCoordinates(cameraPosition => ({ ...cameraPosition, col: cameraPosition.col - 1 }))
            // setHeroPosition(heroPosition => ({ ...heroPosition, col: heroPosition.col - 1 }))
          }}
        >
          Left
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setCameraCoordinates(cameraPosition => ({ ...cameraPosition, col: cameraPosition.col + 1 }))
            // setHeroPosition(heroPosition => ({ ...heroPosition, col: heroPosition.col + 1 }))
          }}
        >
          Right
        </button>
      </div>
      <div className="flex gap-2 mb-2">
      <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setCameraCoordinates(cameraPosition => ({ ...cameraPosition, row: cameraPosition.row + 1 }))
            // setHeroPosition(heroPosition => ({ ...heroPosition, row: heroPosition.row + 1 }))
          }}
        >
          Down
        </button>
      </div>
    </main>
  )
}
