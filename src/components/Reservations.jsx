import { useQuery } from "@tanstack/react-query";

import { publicApi } from "../api";
import TableRow from "./TableRow";
import Loading from "./Loading";
import ErrorComponent from "./ErrorComponent";

const TableHeader = () => (
  <thead className="text-sm">
    <tr>
      <th className="px-4 py-2 border">Customer Name</th>
      <th className="px-4 py-2 border">Vehicle</th>
      <th className="px-4 py-2 border">Vehicle No.</th>
      <th className="px-4 py-2 border">Parking Spot</th>
      <th className="px-4 py-2 border">Location</th>
      <th className="px-4 py-2 border">Start Time</th>
      <th className="px-4 py-2 border">End Time</th>
      <th className="px-4 py-2 border">Status</th>
      <th className="px-4 py-2 border">Total Cost</th>
    </tr>
  </thead>
);

const Reservations = () => {
  const {
    data: reservations,
    isLoading,
    isError,
    error,
  } = useQuery(["reservations"], async () => {
    const response = await publicApi.get("reservations");
    return response.data.reservations;
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorComponent label="Reservations" error={error} />;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Reservations</h1>
      <div className="border border-gray-300 rounded-lg my-4 overflow-x-auto">
        <table className="min-w-full">
          <TableHeader />
          <tbody>
            {reservations.map((reservation, index) => (
              <TableRow key={reservation._id} reservation={reservation} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reservations;
