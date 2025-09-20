import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    id: 1,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleAddressChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof UserData["address"]
  ) => {
    const { value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      address: { ...prevUser.address, [field]: value },
    }));
  };

  const handleGeoChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof UserData["address"]["geo"]
  ) => {
    const { value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      address: {
        ...prevUser.address,
        geo: { ...prevUser.address.geo, [field]: value },
      },
    }));
  };

  const handleCompanyChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof UserData["company"]
  ) => {
    const { value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      company: { ...prevUser.company, [field]: value },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter name"
                required
              />
            </div>
            <div>
              <label htmlFor="username" className="block text-gray-700 font-medium mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={user.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter username"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter email"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter phone"
                required
              />
            </div>
            <div>
              <label htmlFor="website" className="block text-gray-700 font-medium mb-1">
                Website
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={user.website}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter website"
                required
              />
            </div>
          </div>

          <div className="border-t pt-4 mt-4">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Address</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="street" className="block text-gray-700 font-medium mb-1">
                  Street
                </label>
                <input
                  type="text"
                  id="street"
                  value={user.address.street}
                  onChange={(e) => handleAddressChange(e, "street")}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter street"
                  required
                />
              </div>
              <div>
                <label htmlFor="suite" className="block text-gray-700 font-medium mb-1">
                  Suite
                </label>
                <input
                  type="text"
                  id="suite"
                  value={user.address.suite}
                  onChange={(e) => handleAddressChange(e, "suite")}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter suite"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-gray-700 font-medium mb-1">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  value={user.address.city}
                  onChange={(e) => handleAddressChange(e, "city")}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter city"
                  required
                />
              </div>
              <div>
                <label htmlFor="zipcode" className="block text-gray-700 font-medium mb-1">
                  Zipcode
                </label>
                <input
                  type="text"
                  id="zipcode"
                  value={user.address.zipcode}
                  onChange={(e) => handleAddressChange(e, "zipcode")}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter zipcode"
                  required
                />
              </div>
              <div>
                <label htmlFor="lat" className="block text-gray-700 font-medium mb-1">
                  Latitude
                </label>
                <input
                  type="text"
                  id="lat"
                  value={user.address.geo.lat}
                  onChange={(e) => handleGeoChange(e, "lat")}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter latitude"
                />
              </div>
              <div>
                <label htmlFor="lng" className="block text-gray-700 font-medium mb-1">
                  Longitude
                </label>
                <input
                  type="text"
                  id="lng"
                  value={user.address.geo.lng}
                  onChange={(e) => handleGeoChange(e, "lng")}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter longitude"
                />
              </div>
            </div>
          </div>

          <div className="border-t pt-4 mt-4">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Company</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="companyName" className="block text-gray-700 font-medium mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  value={user.company.name}
                  onChange={(e) => handleCompanyChange(e, "name")}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter company name"
                  required
                />
              </div>
              <div>
                <label htmlFor="catchPhrase" className="block text-gray-700 font-medium mb-1">
                  Catchphrase
                </label>
                <input
                  type="text"
                  id="catchPhrase"
                  value={user.company.catchPhrase}
                  onChange={(e) => handleCompanyChange(e, "catchPhrase")}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter catchphrase"
                />
              </div>
              <div>
                <label htmlFor="bs" className="block text-gray-700 font-medium mb-1">
                  BS
                </label>
                <input
                  type="text"
                  id="bs"
                  value={user.company.bs}
                  onChange={(e) => handleCompanyChange(e, "bs")}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter BS"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-6 border-t mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
