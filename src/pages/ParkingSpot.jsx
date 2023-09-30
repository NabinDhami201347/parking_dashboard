import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { publicApi } from "../api";
import Loading from "../components/Loading";
import ParkingSpotInfo from "../components/ParkinsSpotInfo";

const ParkingSpot = () => {
  const [spot, setSpot] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const fetchSpot = async () => {
    try {
      const res = await publicApi.get(`/spots/${id}`);
      setSpot(res.data.spot);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSpot();
  }, [id]);

  if (loading) return <Loading />;

  if (error) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Reservations</h1>
        <p className="text-red-500">Error: {error.message}</p>
      </div>
    );
  }
  return <ParkingSpotInfo spot={spot} />;
};

export default ParkingSpot;
