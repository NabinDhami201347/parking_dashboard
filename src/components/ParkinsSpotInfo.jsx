/* eslint-disable react/prop-types */

import { Bike, Car, DollarSign } from "lucide-react";
import { FcDoNotMix, FcServices } from "react-icons/fc";

import parkingImage from "/parking.webp";

const ParkingSpotInfo = ({ spot }) => {
  return (
    <div className="flex flex-col gap-4 my-6">
      {spot.available ? (
        <div className="flex items-center gap-4 bg-green-600 px-4 py-2 rounded-sm">
          <FcServices className="h-10 w-10" />
          <p className="text-2xl">Avaliable</p>
        </div>
      ) : (
        <div className="flex items-center gap-4 bg-red-600 px-4 py-2 rounded-sm">
          <FcDoNotMix className="h-10 w-10" />
          <p className="text-2xl">Unavailable</p>
        </div>
      )}
      {spot.imageUrls.length >= 1 ? (
        <img src={spot.imageUrls[0]} alt="Parking Spot" className="w-full max-h-96" />
      ) : (
        <img src={parkingImage} alt="ok" className="w-full max-h-96" />
      )}

      <div className="grid grid-cols-2 gap-10">
        <div className="">
          <h2 className="text-4xl font-semibold">{spot.name}</h2>
          <div className="text-lg text-gray-300">{spot.description}</div>
          <div className="text-base text-gray-400">{spot.location}</div>
        </div>

        <div className="border border-orange-700 hover:border-orange-400 cursor-pointer transition-colors py-6 rounded">
          <div className="flex items-center px-4 justify-between">
            <div className="flex items-center gap-4">
              <DollarSign className="h-10 w-10" />
              <p className="text-2xl font-semibold">Total Revenue</p>
            </div>
            <p className="text-4xl pr-4">{spot?.revenue.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10 my-10">
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl">Total Capacity</h2>
          <div className="grid grid-cols-2 gap-10">
            <div className="border border-lime-700 hover:border-lime-400 cursor-pointer transition-colors py-6 rounded">
              <div className="flex items-center px-4 justify-between">
                <Bike className="h-10 w-10" />
                <p className="text-4xl">{spot.capacity.bike}</p>
              </div>
            </div>
            <div className="border border-lime-700 hover:border-lime-400 cursor-pointer transition-colors py-6 rounded">
              <div className="flex items-center px-4 justify-between">
                <Car className="h-10 w-10" />
                <p className="text-4xl">{spot.capacity.car}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl">Total Reservations</h2>
          <div className="grid grid-cols-2 gap-10">
            <div className="border border-green-400 hover:border-green-700 cursor-pointer transition-colors py-6 rounded">
              <div className="flex items-center px-4 justify-between">
                <Bike className="h-10 w-10" />
                <p className="text-4xl">{spot.reservations?.bike.length ?? 0}</p>
              </div>
            </div>
            <div className="border border-green-400 hover:border-green-700 cursor-pointer transition-colors py-6 rounded">
              <div className="flex items-center px-4 justify-between">
                <Car className="h-10 w-10" />
                <p className="text-4xl">{spot.reservations?.car.length ?? 0}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingSpotInfo;
