import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function Container({ title, children }: Props) {
  return (
    <main className="py-4 px-4 lg:px-16 xl:px-32 2xl:px-64">
      <h1 className="capitalize mb-4 font-bold text-3xl">/{title}</h1>
      {children}
    </main>
  );
}
