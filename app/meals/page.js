import React from "react";
import Link from "next/link";

export default function mealsPage() {
  return (
    <main>
      <h1>mealsPage</h1>
      <p>
        <Link href="/meals/item1">Item 1</Link>
      </p>
      <p>
        <Link href="/meals/item2">Item 2</Link>
      </p>
    </main>
  );
}
