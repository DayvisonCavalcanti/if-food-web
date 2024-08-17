import { useState } from 'react';
import { FaDollarSign, FaHandshake, FaHome, FaInfoCircle, FaSignOutAlt, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);
 

  return (
    <div className={`flex  ${isOpen ? 'w-64' : 'w-18'}  text-secondary_1 abs transition-width duration-300 mx-4 my-4`}>
      <div className="flex flex-col w-full  rounded-2xl bg-white">
        <div className="flex flex-col justify-between border-2 border-secondary_1 h-full rounded-2xl">
        <div >
        <button
          onClick={toggleSidebar}
          className="p-2 text-2xl font-bold  hover:bg-secondary_2  w-full rounded-t-2xl"
        >
          {isOpen ? '<<' : '>>'}
        </button>
          <div>
          <Link to="/home-parceiros">
            <SidebarItem icon={<FaHome />} text="Home" isOpen={isOpen}  />
          </Link>
          <SidebarItem icon={<FaUsers />} text="Clientes" isOpen={isOpen} />
          <SidebarItem icon={<FaHandshake />} text="Parceiros" isOpen={isOpen} />
          <SidebarItem icon={<FaDollarSign />} text="Faturamento" isOpen={isOpen} />
          <SidebarItem icon={<FaInfoCircle />} text="Informações" isOpen={isOpen} />
          </div>
        </div >
          <SidebarItem icon={<FaSignOutAlt />} text="Logout" isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text, isOpen }) => (
  <div className={`flex items-center p-4 hover:bg-secondary_2 cursor-pointer ${!isOpen && 'justify-center'}`}>
    <div className="text-xl cursor-pointer">{icon}</div>
    {isOpen && <span className="ml-4">{text}</span>}
  </div>
);

export default Sidebar;
