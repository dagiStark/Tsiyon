import React from "react";
import ShoppingHeader from "./Header";
import { Outlet } from "react-router-dom";

function ShoppingLayout() {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* common header  */}
      <ShoppingHeader />
      <main className="flex flex-col bg-white">
        <Outlet />
      </main>
    </div>
  );
}

export default ShoppingLayout;
