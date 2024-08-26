import Image from 'next/image';
import { useGetUserQuery } from "@/lib/services/auth";
import { useEffect, useState } from "react";

const ProfileCard = () => {
    const [user, setUser] = useState({});
  const { data, isSuccess } = useGetUserQuery();
  useEffect(() => {
    if (data && isSuccess) {
      setUser(data.user);
    }
  }, [data, isSuccess]);
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-xs mx-auto sm:max-w-full mt-5">
      <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white -mt-12">
        <Image
          src="/profile-1.webp" // Replace with actual profile image
          alt="Profile Picture"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h2 className="text-xl font-semibold mt-4">{user.name}</h2>
      <p className="text-gray-600">UI/UX Designer</p>
      <div className="mt-4 space-y-2 text-left">
        <p><strong>Phone:</strong> +123 456 7890</p>
        <p><strong>Location:</strong> Hong Kong, China</p>
        <p className='overflow-x-auto'><strong>Email:</strong> {user.email}</p>
        <p><strong>Birthday:</strong> May 21, 1990</p>
      </div>
      <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-full">
        Download CV
      </button>
    </div>
  );
};

export default ProfileCard;
