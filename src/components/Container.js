import React, { useState, useEffect } from "react";
import axios from "axios";

import Button from "./Button";
import Cards from "./Cards";

export default function Container() {
  const [dataEnd, setDataEnd] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);

  // Function to fetch data from the API
  const fetchData = async (url_API) => {
    const response = await axios.get(url_API);
    const data = response.data;

    setNextUrl(data.info.next);
    setPrevUrl(data.info.prev);
    conditionData(data.results); //Apply conditional
  };

  // Call fetchData funcion
  useEffect(() => {
    fetchData("https://rickandmortyapi.com/api/character");
  }, []);

  //Apply filtering for the people still they are Alive
  const conditionData = (data) => {
    const newItems = data.filter((item) => item.status === "Alive");
    // console.log(newItems);
    setDataEnd(newItems);
  };

  // Function to handle clicks on the "Next Page" button
  const handleNextPage = () => {
    fetchData(nextUrl);
  };

  // Function to handle clicks on the "Previous Page" button
  const handlePrevPage = () => {
    fetchData(prevUrl);
  };

  return (
    <>
      <div>
        <h1 className="text-center text-2xl font-bold py-10 text-white">
          Rick and Morty Characters
        </h1>
        <div className="grid lg:grid-cols-4 gap-5 px-5">
          {dataEnd.map((item, i) => {
            item.episode.length < 25
              ? (item.character = "side")
              : (item.character = "main");

            return (
              <div key={i}>
                <Cards {...item} key={item.id} />
              </div>
            );
          })}
        </div>

        {/**Button */}
        <div className="flex gap-2 justify-center items-center py-10 text-white font-bold">
          <Button
            prevUrl={prevUrl}
            handleClickP={handlePrevPage}
            titlePrev="Prev Page"
          />

          <Button
            nextUrl={nextUrl}
            handleClickN={handleNextPage}
            titleNext="Next Page"
          />
        </div>
      </div>
    </>
  );
}
