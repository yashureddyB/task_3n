import { useState } from "react";
import { Output } from "./Output";
import { InputText } from "./InputText";
import { Heading } from "./Heading";

export default function App() {
  const [words, setWords] = useState("");

  return (
    <div className="main-div">
      <Heading />
      <InputText words={words} onWords={setWords} />
      <Output words={words} />
    </div>
  );
}
