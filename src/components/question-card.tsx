import { useConfig } from "../config-storage";

interface QuestionCardProps {
  openQuest: boolean;
  AcceptQuest?: () => void;
  CancelQuest?: () => void;
}

function QuestionCard({
  openQuest,
  AcceptQuest,
  CancelQuest,
}: QuestionCardProps) {

  const { config } = useConfig();

  return (
    <div
      className={`bg-gray-600/30 border flex gap-4 flex-col border-white/10 rounded-2xl w-auto h-fit transition-all transform  duration-1000 delay-700 p-4  ${
        openQuest ? "visible" : "invisible"
      }`}
    >
      <h2 className='text-4xl font-bold w-auto text-center text-red-700'>
       
        {config!.pregunta}
      </h2>
      <img
        src={config!.imagenPregunta}
        alt='archivo pregunta'
        className='self-center object-cover w-52 h-52 rounded-2xl'
      />
      <div className='flex items-center gap-4 justify-evenly  flex-col md:flex-row'>
        <button
          type='button'
          onClick={AcceptQuest}
          className='w-40 px-4 py-1 border rounded cursor-pointer bg-green-500/50 hover:bg-green-500/70'
        >
          {config!.botonAceptar}
        </button>
        <button
          type='button'
          onClick={CancelQuest}
          className='w-40 px-4 py-1 border rounded cursor-pointer bg-red-500/50 hover:bg-red-500/70'
        >
          {config!.botonRechazar}
        </button>
      </div>
    </div>
  );
}

export default QuestionCard;
