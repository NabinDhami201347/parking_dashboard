/* eslint-disable react/prop-types */
import moment from "moment";
import { Link } from "react-router-dom";

const TableRow = ({ reservation }) => {
  const formattedStartTime = moment(reservation.startTime).format("MMM DD, YYYY, HH:mm:ss");
  const formattedEndTime = moment(reservation.endTime).format("MMM DD, YYYY, HH:mm:ss");

  return (
    <tr className="text-xs">
      <td className="border px-4 py-2 text-blue-600 hover:underline">
        <Link to={`/customers/${reservation.customer._id}`}>{reservation.customer.name}</Link>
      </td>
      <td className="border px-4 py-2">{reservation.vehicle.vehicleType}</td>
      <td className="border px-4 py-2">{reservation.vehicle.licensePlate}</td>
      <td className="border px-4 py-2">{reservation.parkingSpot.name}</td>
      <td className="border px-4 py-2">{reservation.parkingSpot.location}</td>
      <td className="border px-4 py-2">{formattedStartTime}</td>
      <td className="border px-4 py-2">{formattedEndTime}</td>
      <td className="border px-4 py-2">{reservation.status}</td>
      <td className="border px-4 py-2">${reservation.totalCost.toFixed(2)}</td>
    </tr>
  );
};

export default TableRow;
