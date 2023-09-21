import { useState } from "react";
import QRCode from "qrcode";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    // 👇 Store the input value to local state
    setInputText(e.target.value);
  };

  const generateQR = () => {
    console.log(inputText);
    QRCode.toCanvas(document.getElementById("canvas"), inputText, function (error) {
      if (error) console.error(error);
    });
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={inputText} />
      <p>Your input: {inputText}</p>
      <button onClick={generateQR}>Generate QR!</button>
      <canvas id="canvas" align="center" />
    </div>
  );
}

export default App;
