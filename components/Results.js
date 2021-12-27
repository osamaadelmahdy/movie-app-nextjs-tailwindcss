import React from "react";
import Thumbnail from "./Thumbnail";

function Results({ result }) {
  return (
    <div className="flex flex-col items-center justify-center sm:flex-row flex-wrap">
      {result.map((item) => (
        <Thumbnail key={item.id} result={item} />
      ))}
    </div>
  );
}

export default Results;
