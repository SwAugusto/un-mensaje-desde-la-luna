interface HojaProps {
  closeHoja: () => void;
}

function Hoja({ closeHoja }: HojaProps) {
  return (
    <div className='absolute z-50 flex justify-center w-full h-screen py-10 bg-gray-400/50'>
      <article className='flex flex-col gap-2 p-4  h-full bg-[#FAF2CE] border-black/30 rounded-lg border-2 top-5 bottom-10 w-6xl'>
        <div
          className='h-full overflow-y-auto '
          style={{ scrollbarWidth: "thin" }}
        >
          <p className='text-pretty'> {import.meta.env.VITE_TEXTO_CARTA}</p>
        </div>
        <button
          type='button'
          className='p-2 rounded bg-amber-200/30 hover:bg-amber-400/30'
          onClick={closeHoja}
        >
          Guardar Carta
        </button>
      </article>
    </div>
  );
}

export default Hoja;
