import { Link } from "react-router-dom";
import { ShoppingCart, Menu } from "lucide-react";
import { SheetTrigger, Sheet, SheetContent } from "../ui/sheet";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";

function ShoppingHeader() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <Link className="flex items-center gap-2" to={"/shop/home"}>
          <ShoppingCart className="h-6 w-6" />
          <span className="font-bold ">Tsiyon Shopping Mall</span>
        </Link>

        <Sheet>
          <SheetTrigger>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle header menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full max-w-xs"></SheetContent>
        </Sheet>
        <div className="hidden lg:block"></div>
        {isAuthenticated ? <div></div> : null}
      </div>
    </header>
  );
}

export default ShoppingHeader;
