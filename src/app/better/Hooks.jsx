import React from "react";

export default function Hooks(props) {
  return (
    <div>
      Hooks
      <h2>Name: {props.name}</h2>
      <h2>Age: {props.age}</h2>
      <h2>Tribe: {props.town}</h2>
    </div>
  );
}
