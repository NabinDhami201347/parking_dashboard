import { Routes, Route, Outlet } from "react-router-dom";

import Login from "./components/Login";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";

import ParkingSpots from "./pages/ParkingSpots";
import Reservation from "./pages/Customer";
import ParkingSpot from "./pages/ParkingSpot";
import SpotForm from "./pages/SpotForm";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/spots" element={<ParkingSpots />} />
        <Route path="/create-spot" element={<SpotForm />} />
        <Route path="/customers/:id" element={<Reservation />} />
        <Route path="/spots/:id" element={<ParkingSpot />} />
      </Route>
    </Routes>
  );
}

// function RequireAuth(props) {
//   const { accessToken } = useAuth();

//   if (!accessToken) {
//     return <Navigate to="/login" replace />;
//   }

//   // eslint-disable-next-line react/prop-types
//   return props.children;
// }

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
