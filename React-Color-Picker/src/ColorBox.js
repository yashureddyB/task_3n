export function ColorBox({ colorPassed, styleValue, onSelectedColor, onshow }) {
  function handleColor(e) {
    onSelectedColor(e.target.style.background);
    onshow(false);
  }

  return (
    <div className="color-box" style={{ gridArea: styleValue.join(" / ") }}>
      <div
        className="color-select"
        style={{ background: colorPassed, height: "100%" }}
        onClick={(e) => handleColor(e)}
      ></div>
    </div>
  );
}
