import { Value } from "./Value";

export function Values({
  onPressedKey,
  onHistory,
  onError,
  onResultCame,
  resultCame,
  pressedKey,
}) {
  // prettier-ignore
  let arr = [7, 8, 9, "\u232B",
    4, 5, 6, "\u00F7",
    1, 2, 3, "\u00D7",
    0, "\u002E", "\u003D", "\u002B"];

  return (
    <div className="values-div">
      {arr.map((a) => (
        <Value
          value={a}
          key={a}
          onPressedKey={onPressedKey}
          onHistory={onHistory}
          onError={onError}
          onResultCame={onResultCame}
          resultCame={resultCame}
          pressedKey={pressedKey}
        />
      ))}
    </div>
  );
}
