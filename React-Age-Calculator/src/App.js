import { useState } from "react";
import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
} from "date-fns";
import { Output } from "./Output";
import { InputDiv } from "./InputDiv";
import { Heading } from "./Heading";

export default function App() {
  const [enteredValue, setEnteredValue] = useState("");
  const [ageCalcualted, setAgeCalcualted] = useState({});

  function handleCalAge(value) {
    let today = new Date();
    let dob = new Date(value);

    let years = differenceInYears(today, dob);
    today.setFullYear(today.getFullYear() - years);

    let months = differenceInMonths(today, dob);
    today.setMonth(today.getMonth() - months);

    let days = differenceInDays(today, dob);

    setAgeCalcualted({
      years: years,
      months: months,
      days: days,
    });
  }

  return (
    <div className="main-div">
      <Heading />
      <InputDiv
        onEnteredValue={setEnteredValue}
        enteredValue={enteredValue}
        onCalAge={handleCalAge}
      />
      <Output ageCalcualted={ageCalcualted} />
    </div>
  );
}
