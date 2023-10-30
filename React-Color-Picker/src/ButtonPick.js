export function ButtonPick({ onshow, selectedColor }) {
  function handleClick(e) {
    onshow(true);
  }

  return (
    <button
      className="button-pick"
      style={{ background: selectedColor }}
      onClick={(e) => handleClick(e)}
    >
      {selectedColor ? selectedColor : "Pick a color"}
    </button>
  );
}
