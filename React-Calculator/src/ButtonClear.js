export function ButtonClear({
  onPressedKey,
  onHistory,
  pressedKey,
  error,
  resultCame,
  onResultCame,
  history,
}) {
  function handleClick() {
    if (pressedKey === history) {
      onPressedKey("");
      return;
    }

    onPressedKey("");
    !error && resultCame && onHistory((curr) => `${curr} = ${pressedKey}`);
    onResultCame(false);
  }

  function handleClickHistory() {
    onHistory("");
    onResultCame(false);
  }
  return (
    <div className="clear-btns">
      <button className="clear-btn" onClick={() => handleClick()}>
        Clear
      </button>
      <button className="clear-btn" onClick={() => handleClickHistory()}>
        Clear History
      </button>
    </div>
  );
}
