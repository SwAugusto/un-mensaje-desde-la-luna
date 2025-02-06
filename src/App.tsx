import { useEffect, useState } from "react";
import "./App.css";
import QuestionCard from "./components/question-card";
import Carta from "./components/carta";
import { useConfig } from "./config-storage";

const COLORS = ["#fff2", "#fff4", "#fff7", "#fffc"];

function App() {

    const { config } = useConfig();

  const generateSpaceLayer = (
    size: string,
    selector: string,
    totalStars: number,
    duration: string
  ) => {
    const layer = [];

    for (let i = 0; i < totalStars; i++) {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const x = Math.floor(Math.random() * 100);
      const y = Math.floor(Math.random() * 100);
      layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 100}vh 0 ${color}`);
    }

    const container = document.querySelector(selector) as HTMLElement;
    if (container) {
      container.style.setProperty("--space-layer", layer.join(","));
      container.style.setProperty("--size", size);
      container.style.setProperty("--duration", duration);
    }
  };

  useEffect(() => {
    generateSpaceLayer("1px", ".space-1", 200, "25s");
    generateSpaceLayer("2px", ".space-2", 100, "20s");
    generateSpaceLayer("4px", ".space-3", 50, "15s");
  }, []);

  const [openQuestion, setOpenQuestion] = useState(config?.saltarIntro === "S");
  const [openCard, setOpenCard] = useState(false);

  useEffect(() => {
    if (config?.saltarIntro === "S") {
      setOpenQuestion(true);
    }
  }, [config]);

  const cancelQuest = () => {
    setOpenQuestion(false);
  };

  const acceptQuest = () => {
    setOpenQuestion(false);
    setOpenCard(true);
  };

  return (
    <main className=' w-full h-screen bg-gradient-to-b from-25% fixed inset-0 top-0 right-0 left-0 bottom-0 from-[#051327] to-[#000] '>
      <div className='space space-1'></div>
      <div className='space space-2'></div>
      <div className='space space-3'></div>
      <div className='grid w-full h-full place-items-center p-10'>
        {openCard && <div className="h-full flex absolute justify-center items-center"><Carta /></div>}
        {openQuestion && (
          <QuestionCard
            AcceptQuest={acceptQuest}
            CancelQuest={cancelQuest}
            openQuest={openQuestion}
          />
        )}
        {!openQuestion && !openCard && (
          <h1 className='absolute z-20 text-6xl font-bold w-auto text-center  text-white px-16 -translate-y-16 cursor-default select-none reflejo-letra lg:text-9xl'>
            UN MENSAJE DESDE LA LUNA
          </h1>
        )}
        <div
          className={`relative z-5 luna w-2xl h-[42rem] transition-all duration-1000  transform ${
            openQuestion || openCard ? "translate-y-[-1000%] " : ""
          }`}
        >
          <span></span>
          <span></span>
        </div>
        <div className='absolute z-50 top-[80%]'>
          {!openQuestion && !openCard && (
            <button
              type='button'
              className='p-2 bg-white border border-gray-100 rounded shadow-2xl border-button '
              onClick={() => setOpenQuestion(true)}
            >
              Abrir Mensaje
            </button>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
