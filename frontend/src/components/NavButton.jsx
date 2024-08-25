const NavButton = ({ label, active }) => {
    return (
      <button className={`flex items-center justify-center  p-1 rounded-lg ${active ? 'bg-pink-500 text-white' : 'bg-gray-100 hover:bg-pink-500 hover:text-white'} transition duration-300 ease-in-out`}>
        <span className="p-2 mx-4">{label}</span>
      </button>
    );
  };
  
  export default NavButton;
  