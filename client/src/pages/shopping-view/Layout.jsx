import React from "react";
import ShoppingHeader from "./Header";

function ShoppingLayout() {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* common header  */}
      <ShoppingHeader />
      <main className="flex flex-col bg-white"></main>
    </div>
  );
}

export default ShoppingLayout;
