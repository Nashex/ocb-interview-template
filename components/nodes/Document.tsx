import * as React from "react";

interface Props {
  children: React.ReactNode[];
  source: string;
}

export default function Document({ children, source }: Props) {
  return <article className="prose prose-xl mx-auto">{children}</article>;
}
