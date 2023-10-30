import { useMemo } from "react";

export function useSplitAccordingTo(text, splitter) {
  let temp = useMemo(
    () => (text === "" ? 0 : text.split(splitter).length),
    [text, splitter]
  );
  console.log(temp);
  return temp;
}
