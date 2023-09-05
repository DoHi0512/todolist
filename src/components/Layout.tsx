import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-[90%] h-4/5">{children}</div>
    </div>
  );
};
