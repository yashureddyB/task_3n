import { Data } from "./Data";
import { HeadingsForData } from "./HeadingsForData";

export function DataHeading() {
  return (
    <div className="data-div">
      <div className="data-row">
        <HeadingsForData />
      </div>
      <Data />
    </div>
  );
}
