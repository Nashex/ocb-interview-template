import * as React from "react";

export function Callout({ title, children }) {
  return (
    <div className="flex flex-col p-2 mt-4 bg-blue-100 border border-blue-400 rounded">
      <strong>{title}</strong>
      <span>{children}</span>
    </div>
  );
}
