import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [show, setShow] = useState("");
  const [currentText, setCurrentText] = useState(0);


  const texts = [
    { para: `Hi,My girl! I am here to ask you something.`, button: [{ val: "ok", onClick: () => setCurrentText(1) }] },
    {
      para: `Are You Single!`,
      button: [
        { val: "Yes", onClick: () => setCurrentText(3) },
        { val: "No", onClick: () => setCurrentText(2) },
      ],
    },
    {
      para: `Ok Fine.Its time you can close this.😔 `
    },
    {
      para: `You know valentines day is coming. So....`,
      button: [
        { val: "Go on", onClick: () => setCurrentText(4) },
      ],
    },
    {
      para: `Will You be My Valentine?`,
      button: [
        { val: "Go on", onClick: () => setCurrentText(4) },
      ],
      img:"./img/proposal.gif"
    },
  ];

  useEffect(() => {
    let para = texts[currentText].para.split("");
    let temp = "";
    const interval = setInterval(() => {
      temp = temp + para.shift();
      setShow(temp);
      if (para.length === 0) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentText]);

 
  return (
    <div className="flex justify-center items-center h-screen w-screen app p-5">
      <div className="backdrop-custom w-5/6 h-5/6 rounded-3xl flex justify-center items-center p-10">
        <div className="w-[300px]">
          {texts[currentText].img && <img src={texts[currentText].img} alt="" className="rounded mix-blend-color-dodge"/> }
          <p className="text-center text-white text-[14px] mt-2">{show}</p>
          {texts[currentText]?.button?.map((x) => (
            <button onClick={x.onClick} className="bg-pink-600 text-[12px] transition duration-200 hover:bg-pink-700 hover:-translate-y-1 mt-5 text-white px-3 py-1 ms-2 rounded-full float-right">
              {x.val}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
