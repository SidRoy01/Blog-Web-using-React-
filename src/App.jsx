import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer, Backgroung } from "./Components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between  ">
      <div className="w-full block">
        <Header />

        <main>
          <Backgroung>
            <Outlet />
          </Backgroung>
        </main>

        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
