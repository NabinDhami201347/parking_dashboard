import { useEffect, useState } from "react";

import { publicApi } from "../api";
import Spot from "../components/Spot";
import Loading from "../components/Loading";

const ParkingSpots = () => {
  const [spots, setSpots] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchSpots = async () => {
    try {
      const response = await publicApi.get("spots");

      setSpots(response.data.spots);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSpots();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <h2>Error while fetching</h2>;
  }

  return (
    <section className="my-10">
      <div className="grid md:grid-cols-4 gap-4">
        {spots.map((spot) => (
          <Spot key={spot._id} spot={spot} />
        ))}
      </div>
    </section>
  );
};

export default ParkingSpots;
