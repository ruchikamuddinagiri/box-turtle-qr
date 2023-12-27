import { React, useState } from "react";
import QRCode from "qrcode";
import "./App.css";
import MyQRcode from "./components/qrCode";
import { jsPDF } from "jspdf";

function App() {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    // 👇 Store the input value to local state
    setInputText(e.target.value);
  };

  const generateQR = () => {
    let url = "https://clemsonboxturtles.com";
    let qrText = url + "/" + inputText;
    console.log(qrText)
    QRCode.toCanvas(
      document.getElementById("canvas"),
      qrText,
      { scale: 10 },
      function (error) {
        if (error) console.error(error);
      }
    );
  };

  const generatePDF = () => {
    // Defines the pdf
    let pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: [40, 40],
    });

    // Transforms the canvas into a base64 image
    let base64Image = document.getElementById("canvas").toDataURL();

    // Adds the image to the pdf
    pdf.addImage(base64Image, "png", 0, 0, 40, 40);

    // Downloads the pdf
    pdf.save(inputText + ".pdf");
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={inputText} />
      <p>Your input: {inputText}</p>
      <button onClick={generateQR}>Generate QR!</button>
      <MyQRcode printableId="printme"></MyQRcode>
      <button onClick={generatePDF}>Download pdf</button>
    </div>
  );
}

export default App;

// TODO: push the qr code, send it to you
// TODO: prod deployment url, update in code qr text

// TODO: get updated list of turtles, question list
// TODO:
