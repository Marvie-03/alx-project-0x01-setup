import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
          #{username}
        </span>
      </div>
      <div className="space-y-2">
        <p className="text-gray-600">
          <span className="font-medium">Email:</span> {email}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Phone:</span> {phone}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Website:</span> {website}
        </p>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <h3 className="font-medium text-gray-700">Address</h3>
        <p className="text-gray-600">
          {address.street}, {address.suite}
        </p>
        <p className="text-gray-600">
          {address.city}, {address.zipcode}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Geo:</span> {address.geo.lat}, {address.geo.lng}
        </p>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <h3 className="font-medium text-gray-700">Company</h3>
        <p className="text-gray-600">
          <span className="font-medium">Name:</span> {company.name}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Catchphrase:</span> {company.catchPhrase}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">BS:</span> {company.bs}
        </p>
      </div>
    </div>
  );
};

export default UserCard;