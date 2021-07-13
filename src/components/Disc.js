import React from "react";

export default function Disc(props) {
  const discStyle =
    props.current && props.index === 0
      ? {
          color: "blue",
          background: "black",
        }
      : {
          color: "blue",
          background: "red",
        };

  return (
    <div style={discStyle}>
      <p>{new Array(props.length + 1).join("0")}</p>
      <p>{new Array(props.length + 1).join("0")}</p>
    </div>
  );
}
