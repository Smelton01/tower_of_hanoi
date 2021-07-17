import React from "react";
import Disc from "./Disc";

export default function Pole(props) {
  // props is of disc sizes

  const gridStyle = {
    flex: 1,
  }
  const disc = (length, index) => {
    return (
      <div style={gridStyle}>
        <Disc
          length={length}
          pole={props.pole}
          index={index}
          current={props.current}
          style={gridStyle}
        />
        <p></p>
      </div>
    );
  };

  return <div>{props.discs.map((l, index) => disc(l, index))}</div>;
}
