import facebookIcon from '../assets/facebook 1.png';
import linkedinIcon from '../assets/linkedin 1.png';
import googleIcon from '../assets/search 1.png';

const Contact = () => {
  return (
    <div id="contactUs" className="mt-20 w-full flex justify-center px-16">
      <div className="bg-[#BFDBFF] p-12 grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-4 w-[1260px] min-w-fit min-h-fit text-sm leading-7">
        <div className="flex flex-col">
          <p className="text-base font-bold leading-9">Social</p>
          <a href="#" className="flex items-center relative hover:text-white">
            Facebook <img className="absolute -left-6 size-4 rounded-md" src={facebookIcon} alt="Facebook" />
          </a>
          <a href="#" className="flex items-center relative hover:text-white">
            Linkedin <img className="absolute -left-6 size-4 rounded-md" src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="#" className="flex items-center relative hover:text-white">
            Google + <img className="absolute -left-6 size-4 rounded-md" src={googleIcon} alt="Google+" />
          </a>
        </div>
        <div className="flex flex-col">
          <p className="text-base font-bold leading-9">Explore</p>
          <a href="#" className="hover:text-white">Services</a>
          <a href="#" className="hover:text-white">Team</a>
          <a href="#" className="hover:text-white">Clients</a>
        </div>
        <div className="flex flex-col">
          <p className="text-base font-bold leading-9">Contact</p>
          <a href="#" className="hover:text-white">Idk anyone will read</a>
          <a href="#" className="hover:text-white">this gibberish address</a>
          <a href="#" className="hover:text-white">1234567890</a>
        </div>
        <div className="flex flex-col">
          <p className="text-base font-bold leading-9">Email</p>
          <a href="mailto:assignment1@email.com" className="hover:text-white">assignment1@email.com</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
