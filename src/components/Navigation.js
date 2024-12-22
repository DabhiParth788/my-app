import logo from '../assets/logo-1 1.png'; // Adjust the path to your assets folder
import asset1 from '../assets/Asset 1.png';
import asset2 from '../assets/Asset 2.png';

function Navigation() {
  return (
    <div className="relative flex flex-col lg:flex-row justify-between w-full h-24 min-h-fit items-start sm:items-center px-[8%] z-20 mb-12 lg:mb-4">
      {/* Logo */}
      <div className="text-7xl w-80 z-30">
        <img src={logo} alt="Logo" />
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col sm:flex-row w-68 justify-between items-center z-30">
        <a href="#aboutUs" className="flex-initial w-28 hover:text-cyan-500">
          About Us
        </a>
        <a href="#services" className="flex-initial w-28 hover:text-cyan-500">
          Services
        </a>
        <a href="#ourTeam" className="flex-initial w-28 hover:text-cyan-500">
          Team
        </a>
        <a href="#ourClients" className="flex-initial w-28 hover:text-cyan-500">
          Clients
        </a>
        <a href="#contactUs" className="flex-initial w-28 hover:text-cyan-500">
          Contact Us
        </a>
      </div>

      {/* Background Images */}
      <img
        className="absolute top-0 left-0 -z-10 w-[3rem] sm:w-[4rem] md:w-[5rem] lg:w-[6rem] xl:w-[7rem] transition-all duration-300 ease-in-out"
        src={asset1}
        alt="Background Asset 1"
      />
      <img
        className="absolute top-0 right-0 -z-10 w-[7rem] sm:w-[9rem] md:w-[12rem] lg:w-[15rem] xl:w-[18rem] transition-all duration-300 ease-in-out"
        src={asset2}
        alt="Background Asset 2"
      />
    </div>
  );
}

export default Navigation;
