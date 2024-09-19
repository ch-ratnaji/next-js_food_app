"use client";
export default function error({ error }) {
  return (
    <main className="error">
      <h1>An Error Occured</h1>
      <p>Failed to fetch the data, please try again later</p>
    </main>
  );
}
