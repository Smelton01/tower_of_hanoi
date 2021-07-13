import React from "react";
import Disc from "./Disc";

export default function Pole(props) {
  // props is of disc sizes
  const disc = (length, index) => {
    return (
      <p>
        <Disc
          length={length}
          pole={props.pole}
          index={index}
          current={props.current}
        />
      </p>
    );
  };

  return <div>{props.discs.map((l, index) => disc(l, index))}</div>;
}
