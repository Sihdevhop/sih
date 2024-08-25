import MobileSidebar from "@/components/MobileSidebar"
import UserSidebar from "@/components/UserSidebar"
const UserLayout = ({ children }) => {
  return (
    <div className="md:grid md:grid-cols-5">
      <div className="hidden md:block fixed w-1/5 h-screen">
        <UserSidebar />
      </div>
      <div className="md:hidden relative z-10">
        <MobileSidebar/>
      </div>
      <div className="md:col-start-2 md:col-span-4 bg-gray-100 ">
        {children}
      </div>
    </div>
  )
}

export default UserLayout