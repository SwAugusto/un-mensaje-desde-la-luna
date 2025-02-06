import Atropos from "atropos/react";
import { useConfig } from "../config-storage";

interface HojaProps {
  closeHoja: () => void;
}

function Hoja({ closeHoja }: HojaProps) {

  const { config } = useConfig();


  return (
    <Atropos
        rotateXMax={10} 
        rotateYMax={10} 
        highlight={false}
        rotateXInvert={false}
        rotateYInvert={false}
        shadow={false}
      
        className='absolute z-50 w-auto h-full flex justify-center items-center'
      >
        <div className=' flex self-center w-3xl h-full '>
      <article className='flex flex-col gap-2 h-full p-4 bg-[#fdf9e4] border-black/30 rounded-lg border-2 top-5 bottom-10 w-6xl'>
        <div
          className='h-full overflow-y-auto '
          style={{ scrollbarWidth: "thin" }}
        >
          <p className=' px-10 py-4 text-justify text-md font-semibold'> {config!.textoCarta}</p>
        </div>
        <div className="flex  justify-between">
        <button
          type='button'
          className='p-2 rounded border text-amber-500 border-amber-200 bg-amber-100/30 hover:bg-amber-100/30'
          onClick={closeHoja}
        >
          Guardar Carta
        </button>
        <small className="font-bold text-pretty">
          Te quiere... <br />{config!.nombreDe}
        </small>
        </div>
      </article>
    </div>
      </Atropos>
    
  );
}

export default Hoja;
