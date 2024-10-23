import { Button } from "@/components/ui/button";
import { logoutUser } from "@/store/auth-slice";
import { Menu, LogOut } from "lucide-react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

function AdminHeader({ setOpen }) {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
  }
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
      <Button onClick={() => setOpen(true)} className="sm:hidden">
        <Menu />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <div className="flex flex-1 justify-end ">
        <Button
          className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow"
          onClick={() => handleLogout()}
        >
          <LogOut />
          Logout
        </Button>
      </div>
    </header>
  );
}

export default AdminHeader;

AdminHeader.propTypes = {
  setOpen: PropTypes.func.isRequired,
};
