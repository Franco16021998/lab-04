import React from "react";

export default function Statistic(props) {
  const { estado, valor } = props;
  return (
    <div>
      <p style={{fontFamily:"monospace", fontSize:15}} >
        {estado} {valor}
      </p>
    </div>
  );
}