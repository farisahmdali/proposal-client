import { useEffect, useState } from "react";
import "./App.css";
import $ from "jquery";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaase";

function App() {
  const [show, setShow] = useState("");
  const [currentText, setCurrentText] = useState(0);
  const [data, setData] = useState({});

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
      para: `Ok Fine.Its time you can close this.😔 `,
    },
    {
      para: `You know valentines day is coming. So....`,
      button: [{ val: "Go on", onClick: () => setCurrentText(4) }],
    },
    {
      para: `Like Rabindranath Tagore Said....`,
      button: [{ val: "Go on", onClick: () => setCurrentText(5) }],
    },
    {
      para: `"Love is an endless mystery, for it has nothing else to explain it.".Love is an irresistible desire, to be irresistibly desired.`,
      button: [{ val: "Ok", onClick: () => setCurrentText(6) }],
    },
    {
      para: `I am here to ask you something!`,
      button: [{ val: "Ok", onClick: () => setCurrentText(7) }],
    },
    {
      para: `You never know when love comes and finds you. But I think I have found it with you.Will you be there for my rest of my life?`,
      button: [
        { val: "Yes", onClick: () => setCurrentText(8) },
        { val: "No", onClick: () => setCurrentText(6) },
      ],
      img: "./img/proposal.gif",
    },
    {
      para: `Thank u my love 🥹.Love u my sweetheart.`,
      button: [{ val: "Love u too", onClick: () => window.location.href = "https://instagram.com/faris_ahemmed" }],
    },
    // {
    //   para: `So can i have your whatsapp number.`,
    //   button: [
    //     {
    //       val: "Here You Go",
    //       onClick: async () => {
    //         try {
    //           setCurrentText(10);
    //           const docRef = await addDoc(collection(db, "users"), {
    //             data
    //           });
    //           console.log("Document written with ID: ", docRef.id);
    //         } catch (e) {
    //           console.error("Error adding document: ", e);
    //         }
    //       },
    //     },
    //   ],
    //   input: [{ name: "whatsappNumber", placeholder: "", type: "tel" }],
    // },
    // {
    //   para: `Here is my number 9526444434.`,
    //   button: [
    //     {
    //       val: "See You Later",
    //       onClick: () => {
    //         window.location.href = "https://instagram.com";
    //       },
    //     },
    //   ],
    // },
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
    }, 30);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentText]);

  useEffect(() => {
    $("#submit-form").submit((e) => {
      e.preventDefault();
      console.log($("#submit-form").serialize());
      if ($("#submit-form").serialize()) {
        $.ajax({
          url: "https://script.google.com/macros/s/AKfycbw6MVXet1DydW1yyMeiAFVONOCLDLaL6W0epf-0wAtoooVEa_V2cMVI7OJ41kGe4UmrVA/exec",
          data: $("#submit-form").serialize(),
          method: "post",
          success: function (response) {
            console.log(response);
            setCurrentText(10);
            // alert("Form submitted successfully");
            // window.location.reload();
            //window.location.href="https://google.com"
          },
          error: function (err) {
            console.log(err);
            setCurrentText(10);
          },
        });
      }
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-screen app p-5">
      <div className="backdrop-custom w-5/6 h-5/6 rounded-3xl flex justify-center items-center p-10">
        <div className="w-[300px]">
          {texts[currentText].img && <img src={texts[currentText].img} alt="" className="rounded mix-blend-color-dodge" />}
          <p className="text-center text-white text-[14px] mt-2">{show}</p>
          <form action="" id="submit-form">
            {texts[currentText]?.input?.map((x) => (
              <input onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm mt-5 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  " type={x?.type} name={x?.name} placeholder="enter the number" />
            ))}
            {texts[currentText]?.button?.map((x) => (
              <button onClick={x.onClick} className="bg-pink-600 text-[12px] transition duration-200  mt-5 text-white px-3 py-1 ms-2 rounded-full float-right">
                {x.val}
              </button>
            ))}
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
