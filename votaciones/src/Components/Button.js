import React from "react";

export default function Button(props) {
  const { boton, estado } = props;
  return <button style={{
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    background: "#4a430b",
    color: "#ffffff",
    fontSize: 20
  }}onClick={boton}>{estado}</button>;
}