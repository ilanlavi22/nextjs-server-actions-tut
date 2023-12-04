"use client";

interface ErrorProps {
  error: Error;
}

export default function error(error: ErrorProps) {
  return <div className=" font-bold text-red-500">{error.error.message}</div>;
}
