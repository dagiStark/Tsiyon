import { Fragment } from "react";
import { ChartNoAxesCombined } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LayoutDashboard, ShoppingCart, ListOrdered } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import PropTypes from "prop-types";

const adminSidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    id: "products",
    label: "Products",
    path: "/admin/products",
    icon: <ShoppingCart />,
  },
  {
    id: "orders",
    label: "Orders",
    path: "/admin/orders",
    icon: <ListOrdered />,
  },
];

function MenuItems() {
  const navigate = useNavigate();
  return (
    <nav className="mt-8 flex-col flex gap-2">
      {adminSidebarMenuItems.map((menuItem) => (
        <div
          key={menuItem.id}
          onClick={() => navigate(menuItem.path)}
          className="flex items-center gap-2 rounded-md px-3 py-2 text-xl cursor-pointer text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          {menuItem.icon}
          <span>{menuItem.label}</span>
        </div>
      ))}
    </nav>
  );
}

function AdminSidebar({ open, setOpen }) {
  const navigate = useNavigate();
  return (
    <Fragment>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64">
          <div className="flex flex-col h-full">
            <SheetHeader className={"border-b"}>
              <SheetTitle>
                Admin Panel <ChartNoAxesCombined size={30} />
              </SheetTitle>
            </SheetHeader>
            <MenuItems />
          </div>
        </SheetContent>
      </Sheet>

      <aside className="w-64 flex-col border-r bg-background p-6 hidden sm:flex">
        {/* Sidebar content */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/admin/dashboard")}
        >
          <ChartNoAxesCombined size={30} />
          <h1 className="text-2xl font-extrabold">Admin Panel</h1>
        </div>
        <MenuItems />
      </aside>
    </Fragment>
  );
}

export default AdminSidebar;

AdminSidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
