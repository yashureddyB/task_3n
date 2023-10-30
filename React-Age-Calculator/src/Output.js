export function Output({ ageCalcualted }) {
  return JSON.stringify(ageCalcualted) !== "{}" ? (
    <div className="output-div">
      You are {ageCalcualted.years} years , {ageCalcualted.months} months ,
      {ageCalcualted.days} days old
    </div>
  ) : null;
}
