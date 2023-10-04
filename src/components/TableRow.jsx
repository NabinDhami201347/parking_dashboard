/* eslint-disable react/prop-types */
import moment from "moment";
import { Link } from "react-router-dom";
import EditStatus from "./modal/EditStatus";

const TableRow = ({ reservation }) => {
  const formattedStartTime = moment(reservation.startTime).format("DD MMM, HH:mm A");
  const formattedEndTime = moment(reservation.endTime).format("DD MMM, HH:mm A");

  return (
    <tr className="text-base">
      <td className="border px-4 py-2 text-blue-600 hover:underline">
        <Link to={`/customers/${reservation.customer._id}`}>{reservation.customer.name}</Link>
      </td>
      <td className="border px-4 py-2">{reservation.vehicle.vehicleType}</td>
      <td className="border px-4 py-2">{reservation.vehicle.licensePlate}</td>
      <td className="border px-4 py-2">{reservation.parkingSpot.name}</td>
      {/* <td className="border px-4 py-2">{reservation.parkingSpot.location}</td> */}
      <td className="border px-4 py-2">{formattedStartTime}</td>
      <td className="border px-4 py-2">{formattedEndTime}</td>
      <td
        className={`flex items-center border px-4 py-2 ${
          reservation.status === "Pending"
            ? "text-yellow-500"
            : reservation.status === "Confirmed"
            ? "text-green-500"
            : "text-red-500"
        }`}
      >
        {reservation.status}
        <EditStatus status={reservation.status} id={reservation._id} />
      </td>
      <td className="border px-4 py-2">${reservation.totalCost.toFixed(2)}</td>
    </tr>
  );
};

export default TableRow;
