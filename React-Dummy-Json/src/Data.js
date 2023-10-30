import { useEffect, useState } from "react";
import { DataForOne } from "./DataForOne";
import { Loading } from "./Loading";
import { Error } from "./Error";

export function Data() {
  const [dataRecived, setDataRecived] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(function () {
    async function dataFunc() {
      setIsLoading(true);
      try {
        let res = await fetch(`https://dummyjson.com/users`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        let data = await res.json();
        setDataRecived(data.users);
        setIsError("");
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    dataFunc();
  }, []);

  return (
    <>
      {isError && <Error message={isError} />}
      {isLoading && <Loading />}
      {!isLoading &&
        !isError &&
        dataRecived.map((curr) => (
          <div className="data-row" key={`${curr.ip}${curr.email}`}>
            <DataForOne details={curr} />
          </div>
        ))}
    </>
  );
}
