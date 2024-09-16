import React from "react";

export default function MealsLayout({ children }) {
  return (
    <>
      <div className="mealsLayout">
        <h1 style={{ color: "yellow" }}>Meals-Layout</h1>
      </div>
      {children}
    </>
  );
}
