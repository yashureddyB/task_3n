import { useState } from "react";
import { ButtonClear } from "./ButtonClear";
import { HistoryDiv } from "./HistoryDiv";
import { InputDiv } from "./InputDiv";
import { TopDiv } from "./TopDiv";
import { Values } from "./Values";

export default function App() {
  const [pressedKey, setPressedKey] = useState("");
  const [history, setHistory] = useState("");
  const [error, setError] = useState(false);
  const [resultCame, setResultCame] = useState(false);

  function handleHistory(recived) {
    console.log(recived);
    setHistory(recived);
  }

  return (
    <div className="main-div">
      <div className="first-div">
        <TopDiv />
        <HistoryDiv
          history={history}
          pressedKey={pressedKey}
          onPressedKey={setPressedKey}
          onError={setError}
          onResultCame={setResultCame}
        />
        <InputDiv
          pressedKey={pressedKey}
          onPressedKey={setPressedKey}
          resultCame={resultCame}
        />
      </div>
      <div className="second-div">
        <ButtonClear
          onPressedKey={setPressedKey}
          onHistory={setHistory}
          pressedKey={pressedKey}
          error={error}
          resultCame={resultCame}
          onResultCame={setResultCame}
          history={history}
        />
        <Values
          onPressedKey={setPressedKey}
          onHistory={handleHistory}
          onError={setError}
          onResultCame={setResultCame}
          resultCame={resultCame}
          pressedKey={pressedKey}
        />
      </div>
    </div>
  );
}
