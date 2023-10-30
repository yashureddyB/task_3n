import * as math from "mathjs";

export function Value({
  value,
  onPressedKey,
  onHistory,
  onError,
  onResultCame,
  resultCame,
  pressedKey,
}) {
  function handleClick(value) {
    if (value === "=") {
      if (!pressedKey) return;
      onPressedKey((curr) => {
        let ans;
        curr = curr.replace("\u00F7", "/");
        curr = curr.replace("\u00D7", "*");
        if (/[+\-*/]$/g.test(curr)) {
          onError(true);
          onResultCame(true);
          return "Incomplete expression";
        }
        try {
          onError(false);
          ans = math.evaluate(`${curr}`).toFixed(2);
          onHistory(curr);
          onResultCame(true);
          return ans;
        } catch (err) {
          onError(true);
          onPressedKey(err.message);
        }
      });
    } else {
      if (resultCame && !isNaN(value)) {
        onPressedKey(value);
        onResultCame(false);
      } else if (resultCame && isNaN(value)) {
        onPressedKey((curr) => `${curr}${value}`);
        onResultCame(false);
      } else {
        value === "\u232B"
          ? onPressedKey((curr) => curr.slice(0, -1))
          : onPressedKey((curr) => `${curr}${value}`);
      }
    }
  }

  return (
    <button
      className={`${
        value === "\u232B" ? "styleForBackSpace value btns" : "value btns"
      }`}
      onClick={() => handleClick(value)}
    >
      {value}
    </button>
  );
}
