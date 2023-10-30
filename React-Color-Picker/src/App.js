import { useState } from "react";
import { ColorPicker } from "./ColorPicker";
import { Heading } from "./Heading";

export default function App() {
  const [show, setshow] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");

  const arrColors = [
    "#fe0000",
    "#00ff01",
    "#0000fe",
    "#ffff00",
    "#ff00fe",
    "#00ffff",
    "#fea500",
    "#81007f",
    "#ffc0cb",
    "#008001",
    "#fe6347",
    "#01ced1",
    "#8b4512",
    "#000000",
    "#4682b4",
    "#fed700",
  ];

  return (
    <div className="main-div">
      <Heading />
      <ColorPicker
        arrColors={arrColors}
        show={show}
        onshow={setshow}
        onSelectedColor={setSelectedColor}
        selectedColor={selectedColor}
      />
    </div>
  );
}
