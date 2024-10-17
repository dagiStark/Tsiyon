import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/Layout";
import AuthLogin from "./pages/auth/Login";
import AuthRegister from "./pages/auth/Register";
import AdminLayout from "./components/admin-view/Layout";
import ShoppingLayout from "./pages/shopping-view/Layout";

function App() {
  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white">
        <h1>Header component</h1>
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<AuthLogin />} />
            <Route path="register" element={<AuthRegister />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element />
          </Route>
          <Route path="/shop" element={<ShoppingLayout />}>
            <Route path="home" element />
          </Route>
          
        </Routes>
      </div>
    </>
  );
}

export default App;
