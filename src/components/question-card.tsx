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
  return (
    <div
      className={`bg-gray-600/30 border flex gap-4 flex-col border-white/10 rounded-2xl w-5xl h-fit transition-all transform  duration-1000 delay-700 p-4  ${
        openQuest ? "visible" : "invisible"
      }`}
    >
      <h2 className='text-4xl font-bold text-center text-red-700'>
        {" "}
        {import.meta.env.VITE_PREGUNTA}
      </h2>
      <img
        src={import.meta.env.VITE_IMAGEN_PREGUNTA}
        alt='archivo pregunta'
        className='self-center object-cover w-52 h-52 rounded-2xl'
      />
      <div className='flex items-center gap-4 justify-evenly'>
        <button
          type='button'
          onClick={AcceptQuest}
          className='w-40 px-4 py-1 border rounded cursor-pointer bg-green-500/50 hover:bg-green-500/70'
        >
          {import.meta.env.VITE_BOTON_ACEPTAR}
        </button>
        <button
          type='button'
          onClick={CancelQuest}
          className='w-40 px-4 py-1 border rounded cursor-pointer bg-red-500/50 hover:bg-red-500/70'
        >
          {import.meta.env.VITE_BOTON_RECHAZAR}
        </button>
      </div>
    </div>
  );
}

export default QuestionCard;
