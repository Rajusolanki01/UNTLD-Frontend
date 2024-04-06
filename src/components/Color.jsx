import React from "react";

const Color = ({ data }) => {
  const uniqueColors = [...new Set(data?.flatMap((item) => item?.color))];

  return (
    <>
      <ul className="colors">
        {uniqueColors &&
          uniqueColors?.map((color, index) => (
            <li key={index}>
              <span
                style={{
                  backgroundColor: color,
                }}
              ></span>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Color;
