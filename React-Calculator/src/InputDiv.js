export function InputDiv({ pressedKey, onPressedKey, resultCame }) {
  function handleInput(e) {
    if (
      !isNaN(e.target.value) ||
      e.target.value === "/" ||
      e.target.value === "*"
    )
      onPressedKey(e.target.value);
  }

  return (
    <div className="input-div">
      <input
        className="input-box"
        type="text"
        value={pressedKey}
        onChange={(e) => handleInput(e)}
        disabled={resultCame}
      />
    </div>
  );
}
