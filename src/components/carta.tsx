import Atropos from "atropos/react";
import "atropos/css";
import { useState } from "react";
import Hoja from "./hoja";

function Carta() {
  const [flipped, setFlipped] = useState(false);
  const [openCard, setOpenCard] = useState(false);

  const closeHoja = () => {
    setOpenCard(!openCard);
  };

  return (
    <>
      <Atropos
        rotateXMax={20} // Rotación sutil en X
        rotateYMax={20} // Rotación sutil en Y
        highlight={false}
        rotateXInvert={false}
        rotateYInvert={false}
        shadow={false}
        className='w-6xl h-[500px] absolute z-30 '
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 ${
            flipped ? "rotate-y-180" : ""
          }`}
          onClick={() => setFlipped(!flipped)}
        >
          {!flipped && (
            <>
              <article className='absolute z-20 flex flex-col items-end justify-end w-full px-4 pt-16'>
                <img
                  src='Estampa1.png'
                  className='drop-shadow-md w-[100px]'
                  alt='Estampa San Valetín 1'
                />
              </article>
              <article className='absolute z-20 flex flex-col items-start justify-end w-full h-full px-4 py-4'>
                <img
                  src='Estampa2.png'
                  className='drop-shadow-md w-[100px]'
                  alt='Estampa San Valetín 1'
                />
                <img
                  src='Estampa4.png'
                  className='drop-shadow-md w-[100px]'
                  alt='Estampa San Valetín 4'
                />
              </article>
            </>
          )}
          {/* Cara Frontal */}
          {!flipped ? (
            <div className='absolute flex items-center justify-center w-full h-full bg-[#EEE2BD] border-4 border-black/20 rounded-lg frontface-hidden'>
              <div
                className={`absolute shadow-md w-6xl top-0 h-[250px] bg-black/30 clip-triangle ${
                  openCard ? "hidden" : " "
                }`}
              >
                <div
                  className={`absolute shadow-md inset-0 m-[1px] top-0 bg-[#EEE2BD] clip-triangle ${
                    openCard ? "hidden " : ""
                  }`}
                ></div>
              </div>

              {!openCard && (
                <button
                  title='Abrir carta'
                  type='button'
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenCard(!openCard);
                  }}
                  className='absolute z-50 w-20 h-20 text-2xl font-bold hover:cursor-pointer'
                >
                  <img
                    src='Sello.png'
                    className='drop-shadow-2xl'
                    alt='Abrir Carta'
                  />
                </button>
              )}
            </div>
          ) : (
            <div className='absolute flex flex-col w-full h-full p-5 bg-[#EEE2BD] border-4 border-black/20 rounded-lg -rotate-y-180'>
              <div className='flex'>
                <article className='w-[100px] h-[100px] '>
                  <img
                    src='Estampa3.png'
                    className='drop-shadow-md'
                    alt='Estampa San Valetín 3'
                  />
                  <img
                    src='Estampa4.png'
                    className='drop-shadow-md'
                    alt='Estampa San Valetín 4'
                  />
                </article>
              </div>
              <div className='flex flex-col items-end justify-end w-full h-full '>
                <p>Para: {import.meta.env.VITE_NOMBRE_PARA}</p>
                <p>De: {import.meta.env.VITE_NOMBRE_DE}</p>
              </div>
            </div>
          )}
        </div>
      </Atropos>
      {openCard && <Hoja closeHoja={closeHoja} />}
    </>
  );
}

export default Carta;
