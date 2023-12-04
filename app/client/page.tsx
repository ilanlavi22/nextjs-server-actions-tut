"use client";

import { useState } from "react";

export default function ClientPage() {
  const [count, setCount] = useState(0);
  const increase = () => setCount((count) => count + 1);

  return (
    <section>
      <p className="mb-4 text-7xl font-bold">{count}</p>
      <button onClick={increase} className="btn btn-primary uppercase">
        Increase
      </button>
    </section>
  );
}
