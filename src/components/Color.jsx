import React from "react";

const Color = ({ data }) => {
  return (
    <>
      <ul className="colors">
        {data &&
          data.map((item, index) => (
            <li key={index}>
              {item.color.map((color, i) => (
                <span
                  key={i}
                  style={{
                    backgroundColor: color,
                  }}
                ></span>
              ))}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Color;
