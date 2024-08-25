"use client";
import { useGetUserQuery } from "@/lib/services/auth";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const Profile = () => {
  const [user, setUser] = useState({});
  const [friend, setFriend] = useState(0);
  const { data, isSuccess } = useGetUserQuery();
  useEffect(() => {
    if (data && isSuccess) {
      setUser(data.user);
    }
  }, [data, isSuccess]);

  const onConect = () => {
    setFriend(1);
  };
  return (
    <div className="flex justify-center items-center py-12 md:py-6 lg:px-6">
      {/* Background Wrapper */}
      <div className="max-w-[90%] ">
        {/* Top Section with Background Image */}
        <div
          className="h-40 sm:h-48 bg-cover bg-center rounded-t-lg"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
        </div>

        {/* Bottom Section with White Background */}
        <div className="bg-white rounded-b-lg p-6">
          <div className="flex flex-col items-center">
            {/* Profile Picture */}
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-300 -mt-16">
              <Image
                src="/profile-1.webp"
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* User Info */}
            <div className="text-center mt-2">
              <div className="flex items-center justify-center gap-2">
                <h1 className="text-2xl font-semibold">{user.name}</h1>
                <div>
                  {user.is_verified && (
                    <Image src="/verified.png" width={20} height={20} />
                  )}
                </div>
              </div>
              <p className="text-gray-600">Los Angeles, California</p>
              <p className="mt-2 text-gray-700 text-sm">
                Solution Manager - Creative Tim Officer
              </p>
              <p className="text-gray-600 text-sm">
                University of Computer Science
              </p>
            </div>

            {/* Friends, Photos, Comments */}
            <div className="mt-4 flex space-x-8 text-center">
              <div>
                <p className="text-lg font-semibold">{friend}</p>
                <p className="text-gray-600">Friends</p>
              </div>
              <div>
                <p className="text-lg font-semibold">10</p>
                <p className="text-gray-600">Photos</p>
              </div>
              <div>
                <p className="text-lg font-semibold">89</p>
                <p className="text-gray-600">Comments</p>
              </div>
            </div>

            {/* Connect Button */}
            <button
              className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600"
              onClick={onConect}
            >
              Connect
            </button>
          </div>

          {/* Bio Section */}
          <div className="mt-6 flex items-center justify-center flex-col">
            <p className="text-gray-700 text-center mb-2">
              An artist of considerable range, Jenna is a name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy writes, performs, and
              records all of his own music, giving it a warm, intimate feel with
              a solid groove structure.
            </p>
            <nav className="bg-white shadow-2xl shadow-slate-600 rounded-full mt-5 mb-5 px-6 lg:px-10 w-full overflow-x-auto">
             
                    {/* Primary Navigation Links */}
                    <div className="flex items-center justify-around gap-x-3 md:gap-x-4 py-6 min-w-[35rem] md:min-w-0">
                      <Link
                        href="/user/id/about"
                        className="flex items-center text-gray-600 hover:text-gray-900"
                      >
                        <img
                          src="/about.jpg"
                          alt="Home"
                          className="h-7 w-7 mr-2 rounded-full"
                        />
                        <span className="md:text-lg font-medium">About</span>
                      </Link>
                      <Link
                        href="/user/id/resume"
                        className="flex items-center text-gray-700 hover:text-gray-900"
                      >
                        <img
                          src="/resume.png"
                          alt="Resume"
                          className="h-7 w-7 mr-2"
                        />
                        <span className="md:text-lg font-medium">Resume</span>
                      </Link>
                      <Link
                        href="/user/id/work"
                        className="flex items-center text-gray-700 hover:text-gray-900"
                      >
                        <img
                          src="/work.png"
                          alt="Works"
                          className="h-7 w-7 mr-2"
                        />
                        <span className="md:text-lg font-medium">Works</span>
                      </Link>
                      <Link
                        href="/user/id/blog"
                        className="flex items-center text-gray-700 hover:text-gray-900"
                      >
                        <img
                          src="/blogs.png"
                          alt="Blogs"
                          className="h-7 w-7 mr-2"
                        />
                        <span className="md:text-lg font-medium">Blogs</span>
                      </Link>
                      <Link
                        href="/user/id/contact"
                        className="flex items-center text-gray-700 hover:text-gray-900"
                      >
                        <img
                          src="/contact.png"
                          alt="Contact"
                          className="h-7 w-7 mr-2"
                        />
                        <span className="md:text-lg font-medium">Contact</span>
                      </Link>
                    </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
