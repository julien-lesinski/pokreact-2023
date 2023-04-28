import { Outlet } from "react-router-dom";
import { Header } from "../molecules/Header/Header";

export function MainTemplate() {
  return (
    <div className="flex flex-col items-stretch h-screen">
      <Header />
      <div className="flex flex-col grow">
        <Outlet />
      </div>
    </div>
  );
}
