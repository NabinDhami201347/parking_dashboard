import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import Login from "./components/Login";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

import { useAuth } from "./hooks/useAuth";
import ParkingSpots from "./pages/ParkingSpots";
import Reservation from "./pages/Customer";
import ParkingSpot from "./pages/ParkingSpot";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/spots" element={<ParkingSpots />} />
        <Route path="/customers/:id" element={<Reservation />} />
        <Route path="/spots/:id" element={<ParkingSpot />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
}

function RequireAuth(props) {
  const { accessToken } = useAuth();

  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  // eslint-disable-next-line react/prop-types
  return props.children;
}

function Layout() {
  return (
    <div className="bg-zinc-900 w-full min-h-screen flex flex-col text-white">
      <Navbar />

      <main className="flex-1 w-11/12 mx-auto mt-16">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
