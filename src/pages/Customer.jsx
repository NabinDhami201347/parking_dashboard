import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { publicApi } from "../api";
import Loading from "../components/Loading";
import UserProfile from "../components/Profile";

const Customer = () => {
  const [customer, setCustomer] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const fetchCustomers = async () => {
    try {
      const res = await publicApi.get(`/users/${id}`);
      setCustomer(res.data.user);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
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

  console.log(customer);
  return <UserProfile user={customer} />;
};

export default Customer;
