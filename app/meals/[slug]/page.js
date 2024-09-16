import React from "react";

export default function MealDetailsPage({ params }) {
  return (
    <>
      <h1>dynamicMeals</h1>
      <p>{params.slug}</p>
    </>
  );
}
