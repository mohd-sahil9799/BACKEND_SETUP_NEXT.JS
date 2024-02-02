"use client";
import { useState, useEffect } from "react";
import Button from "./button";

export default function Page() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        console.log("data api", response);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json();
        console.log("json data", json); 

        setApiData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {apiData.map((api, index) => (
        <div key={index}>
          <p className="mx-60 mt-10 text-2xl">{api.id}</p>
                        <Button/>
          <p className="text-center text-2xl">{api.title}</p>
        </div>
      ))}
    </div>
  );
}
