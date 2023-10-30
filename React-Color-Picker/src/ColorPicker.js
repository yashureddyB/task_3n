import { ButtonPick } from "./ButtonPick";
import { ColorBox } from "./ColorBox";

export function ColorPicker({
  arrColors,
  show,
  onshow,
  onSelectedColor,
  selectedColor,
}) {
  let styleValues = [];
  for (let i = 1; i <= 16; i++) {
    styleValues.push([7, i, 8, i + 1]);
  }

  return (
    <div className="colorPickerDiv">
      {show
        ? arrColors.map((currColor, i) => (
            <ColorBox
              key={currColor}
              colorPassed={currColor}
              styleValue={styleValues[i]}
              onSelectedColor={onSelectedColor}
              onshow={onshow}
            />
          ))
        : null}
      <ButtonPick onshow={onshow} selectedColor={selectedColor} />
    </div>
  );
}
