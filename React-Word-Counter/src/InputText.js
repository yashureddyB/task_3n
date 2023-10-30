export function InputText({ words, onWords }) {
  return (
    <textarea
      rows={10}
      cols={70}
      value={words}
      onChange={(e) => onWords(e.target.value)}
      placeholder="Enter the text ..."
    />
  );
}
