import React from "react";

export default function dynamicMeals({ params }) {
  return (
    <>
      <h1>dynamicMeals</h1>
      <p>{params.slug}</p>
    </>
  );
}
