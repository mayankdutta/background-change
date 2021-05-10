import { useState } from "react";

function App() {
  const [bg, setBg] = useState("bg-gray-400");
  const [name, setName] = useState("gray");

  const buttonClasses =
    "cursor-pointer p-4 font-sans text-4xl bg-red-500 border-8 border-red-500 rounded-full hover:border-red-800";

  const fixBg =
    "items-center w-screen h-screen App grid grid-rows-2 justify-items-center gap-y-0";
  // let bgClasses = ("items-center w-screen h-screen  App grid justify-items-center bg-gray-800");

  const changeBg = () => {
    setBg("bg-yellow-400");
    setName("yellow");
  };
  const changeBg2 = () => {
    setBg("bg-pink-400");
    setName("pink");
  };
  const reset = () => {
    setBg("bg-gray-400");
    setName("gray");
  };
  return (
    <div className={fixBg + " " + bg}>
      <buton
        onClick={changeBg}
        onDoubleClick={changeBg2}
        className={buttonClasses}
      >
        Get Background
      </buton>
      <buton onClick={reset} className={buttonClasses}>
        {name}
      </buton>
    </div>
  );
}

export default App;
