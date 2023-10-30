export function InputDiv({ onEnteredValue, enteredValue, onCalAge }) {
  function handleBtn() {
    enteredValue && onCalAge(enteredValue);
  }

  return (
    <div>
      <label className="lalel-age " htmlFor="date">
        Enter your date of birth
      </label>
      <br />
      <input
        className="input-age"
        name="date"
        type="date"
        value={enteredValue}
        onChange={(e) => onEnteredValue(e.target.value)}
        max={new Date().toISOString().split("T")[0]}
      />
      <br />
      <button className="btn-age" onClick={() => handleBtn()}>
        Calculate Age
      </button>
    </div>
  );
}
