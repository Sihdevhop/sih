"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useLogoutUserMutation } from '@/lib/services/auth';

const UserSidebar = () => {
  const [logoutUser] = useLogoutUserMutation()
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const response = await logoutUser()
      if (response.data && response.data.status === "success") {
        router.push('/')
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <nav className="bg-[#344C64] text-white py-8 md:px-5 md:text-lg lg:px-8 lg:text-xl font-semibold flex flex-col gap-6 h-full " >

      <Link href="/" className='flex items-center gap-2 hover:text-indigo-300 transition duration-300 ease-in-out'>
      <img src="/home.svg" className='md:w-7 md:h-7 lg:w-9 lg:h-9' />
      Home
      </Link>

      <Link href="/user/profile"
        className="flex items-center gap-2 hover:text-indigo-400 transition duration-300 ease-in-out"
      >
        <img src="/profile.svg" className='md:w-7 md:h-7 lg:w-9 lg:h-9' />
        Profile
      </Link>
      
      <Link href="/user/event"
        className="flex items-center gap-2 hover:text-indigo-400 transition duration-300 ease-in-out"
      >
        <img src="/event.svg" className='md:w-7 md:h-7 lg:w-9 lg:h-9' />
        Events
      </Link>
      
      <Link href="/user/resource"
        className="flex items-center gap-2 hover:text-indigo-400 transition duration-300 ease-in-out"
      >
        <img src="/resource.svg" className='md:w-7 md:h-7 lg:w-9 lg:h-9' />
        Resources
      </Link>

      <Link href="/user/change-password"
        className="flex items-center gap-2 hover:text-indigo-400 transition duration-300 ease-in-out"
      >
        <img src="/changepwd.svg" className='md:w-7 md:h-7 lg:w-9 lg:h-9' />
        Change Password
      </Link>

      <button onClick={handleLogout} className="hover:text-indigo-400 transition duration-300 ease-in-out bg-gray-600 rounded-full py-3">
        Logout
      </button>


    </nav>
  );
};

export default UserSidebar;