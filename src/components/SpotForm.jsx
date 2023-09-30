import { useState } from "react";

import { privateApi } from "../api";

const SpotForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    spotType: "Indoor",
    pricePerHour: 1,
    features: [],
    carCapacity: 10,
    bikeCapacity: 10,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newFeatures = formData.features.split(",").map((feature) => feature.trim());

    try {
      const response = await privateApi.post("/spots", {
        name: formData.name,
        location: formData.location,
        spotType: formData.spotType,
        description: formData.description,
        pricePerHour: formData.pricePerHour,
        capacity: {
          bike: formData.bikeCapacity,
          car: formData.carCapacity,
        },
        features: newFeatures,
      });
      console.log(response);
      console.log(formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" mx-auto rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Create a New Spot</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-sm font-medium">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border bg-transparent border-gray-300 rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Description:</label>
          <input
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border bg-transparent border-gray-300 rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border bg-transparent border-gray-300 rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Spot Type:</label>
          <select
            name="spotType"
            value={formData.spotType}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border bg-transparent border-gray-300 rounded-lg focus:outline-none"
          >
            <option value="Indoor">Indoor</option>
            <option value="Open">Open</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Price Per Hour:</label>
          <input
            type="number"
            name="pricePerHour"
            value={formData.pricePerHour}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border bg-transparent border-gray-300 rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Features:</label>
          <input
            type="text"
            name="features"
            value={formData.features}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border bg-transparent border-gray-300 rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Car Capacity:</label>
          <input
            type="number"
            name="carCapacity"
            value={formData.carCapacity}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border bg-transparent border-gray-300 rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Bike Capacity:</label>
          <input
            type="number"
            name="bikeCapacity"
            value={formData.bikeCapacity}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border bg-transparent border-gray-300 rounded-lg focus:outline-none"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="col-span-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Create Parking Spot
        </button>
      </form>
    </div>
  );
};

export default SpotForm;
