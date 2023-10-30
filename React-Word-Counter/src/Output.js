import { useSplitAccordingTo } from "./useSplitAccordingTo";

export function Output({ words }) {
  let modifiedWords = words.replace(/_|[^\w\s]/g, "").trim();

  let wordCount = useSplitAccordingTo(modifiedWords, /\s+/);

  let charCount = useSplitAccordingTo(words, "");

  return (
    <div className="output">
      {wordCount ? <p>Word Count: {wordCount}</p> : null}
      {charCount ? <p>Character Count: {charCount}</p> : null}
    </div>
  );
}
