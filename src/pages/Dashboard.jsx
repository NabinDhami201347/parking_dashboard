import { useEffect, useState } from "react";

import Reservations from "../components/Reservations";
import { privateApi } from "../api";

const Dashboard = () => {
  const [totalSpots, setTotalSpots] = useState(0);
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [totalVehicles, setTotalVehicles] = useState(0);
  const [totalReservations, setTotalReservations] = useState(0);

  const fetchTotalSpots = async () => {
    try {
      const res = await privateApi.get("/spots/total");
      setTotalSpots(res.data.total);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchTotalVehicles = async () => {
    try {
      const res = await privateApi.get("/vehicles/total");
      setTotalVehicles(res.data.total);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchTotalReservations = async () => {
    try {
      const res = await privateApi.get("/reservations/total");
      setTotalReservations(res.data.total);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchTotalCustomers = async () => {
    try {
      const res = await privateApi.get("/users/total");
      setTotalCustomers(res.data.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Promise.all([fetchTotalSpots(), fetchTotalVehicles(), fetchTotalReservations(), fetchTotalCustomers()]);
  }, []);

  return (
    <div className="my-10">
      <div className="grid grid-cols-4 gap-10 my-4">
        <div className="w-full rounded-lg border border-purple-300 hover:shadow-md hover:border-purple-500 cursor-pointer transition-colors p-4">
          <h1 className="text-xl">Total Parking Spots</h1>
          <div className="text-2xl">{totalSpots}</div>
        </div>
        <div className="w-full rounded-lg border border-purple-300 hover:shadow-md hover:border-purple-500 cursor-pointer transition-colors p-4">
          <h1 className="text-xl">Total Vehicles</h1>
          <div className="text-2xl">{totalVehicles}</div>
        </div>
        <div className="w-full rounded-lg border border-purple-300 hover:shadow-md hover:border-purple-500 cursor-pointer transition-colors p-4">
          <h1 className="text-xl">Total Reservations</h1>
          <div className="text-2xl">{totalReservations}</div>
        </div>
        <div className="w-full rounded-lg border border-purple-300 hover:shadow-md hover:border-purple-500 cursor-pointer transition-colors p-4">
          <h1 className="text-xl">Total Customers</h1>
          <div className="text-2xl">{totalCustomers}</div>
        </div>
      </div>

      <Reservations />
    </div>
  );
};

export default Dashboard;
