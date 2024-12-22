import asset3 from '../assets/Assets 3.png'; // Adjust the path to your assets folder
import asset4 from '../assets/Assets 4.png';
import graphic1 from '../assets/Graphic 1 2.png';
import vectorObject from '../assets/Vector Smart Object21 1.png';

function HomePage() {
  return (
    <div
      id="homePage"
      className="relative w-full min-h-fit h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] xl:h-[750px] max-h-[850px] mb-8"
    >
      {/* Background Images */}
      <img
        className="absolute -bottom-16 left-0 -z-40 w-[7rem] sm:w-[9rem] md:w-[12rem] lg:w-[15rem] xl:w-[18rem] transition-all duration-300 ease-in-out"
        src={asset3}
        alt="Background Asset 3"
      />
      <img
        className="absolute -bottom-16 right-0 -z-50 w-[7rem] sm:w-[9rem] md:w-[12rem] lg:w-[15rem] xl:w-[18rem] transition-all duration-300 ease-in-out"
        src={asset4}
        alt="Background Asset 4"
      />
      <img
        className="absolute -bottom-16 left-0 -z-50"
        src={graphic1}
        alt="Graphic 1"
      />
      <img
        className="absolute -bottom-16 left-8 sm:left-16 md:left-20 lg:left-28 xl:left-36 -z-20 w-[15rem] sm:w-[20rem] md:w-[25rem] lg:w-[30rem] xl:w-[41rem] transition-all duration-300 ease-in-out"
        src={vectorObject}
        alt="Vector Smart Object"
      />

      {/* Content */}
      <div className="flex flex-col justify-between gap-[15px] mt-[5%] items-center px-12 sm:ml-[30%] md:ml-[50%] mr-[2rem] transition-all duration-1000 ease-in-out">
        <div className="text-xl sm:text-2xl md:text-4xl lg:text-6xl lg:leading-[66px] leading-[33px] font-medium">
          Mendleson Communication and Engagement
        </div>
        <div className="font-normal text-lg leading-7 text-[#2C2C2C]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sed
          ipsum, ut quam volutpat, tortor.
        </div>
      </div>
    </div>
  );
}

export default HomePage;
