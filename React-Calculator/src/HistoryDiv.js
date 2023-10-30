export function HistoryDiv({ history, onPressedKey, onResultCame }) {
  function handleClick() {
    if (history) {
      let value =
        history.indexOf("=") !== -1
          ? history.slice(0, history.indexOf("=") - 1)
          : history;
      onPressedKey(value);
      onResultCame(false);
    }
  }
  return (
    <div className="history-div" onClick={handleClick}>
      {history}
    </div>
  );
}
