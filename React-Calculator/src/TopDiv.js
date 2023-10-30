import { useEffect, useState } from "react";

export function TopDiv() {
  return (
    <div>
      <Circle />
      <Theme />
    </div>
  );
}
function Circle() {
  return <div className="circle-div"></div>;
}
function Theme() {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    let firstDiv = document.querySelector(".first-div");
    let secondDiv = document.querySelector(".second-div");
    let clearBtns = document.querySelector(".clear-btns");
    let circleDiv = document.querySelector(".circle-div");

    if (theme) {
      firstDiv.style.backgroundColor = "#172d67";
      secondDiv.style.backgroundColor = "#070b26";
      firstDiv.style.color = "white";
      secondDiv.style.color = "white";
      clearBtns.style.color = "white";
      clearBtns.style.borderColor = "white";
      circleDiv.style.backgroundColor = "white";
      document.documentElement.style.setProperty("--after-bg-color", "white");
    } else {
      firstDiv.style.backgroundColor = "white";
      secondDiv.style.backgroundColor = "wheat";
      firstDiv.style.color = "black";
      secondDiv.style.color = "black";
      clearBtns.style.color = "black";
      circleDiv.style.backgroundColor = "black";
      clearBtns.style.borderColor = "black";
      document.documentElement.style.setProperty("--after-bg-color", "black");
    }
  }, [theme]);

  function changeTheme() {
    setTheme((curr) => !curr);
  }

  return (
    <div className="theme-div" onClick={changeTheme}>
      <img
        className="img-box"
        src={theme ? "/dark-theme.svg" : "/light-theme.svg"}
        alt="mode"
      />
    </div>
  );
}
