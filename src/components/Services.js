import engagementImg from '../assets/Engagement vector 1.png';
import communicationImg from '../assets/Coominucation vector 1.png';
import facilitationImg from '../assets/facilation vector 1.png';
import consultationImg from '../assets/Consultation vector 1.png';
import trainingImg from '../assets/Training and vector 1.png';
import backgroundImg1 from '../assets/Asset 5 2.png';
import backgroundImg2 from '../assets/Asset 6 1.png';
import backgroundImg3 from '../assets/Asset 7 1.png';
import backgroundImg4 from '../assets/Asset 8 2.png';

const Services = () => {
  return (
    <div id="services" className="relative w-full min-w-fit h-fit py-4 flex flex-col items-center justify-between gap-16 md:gap-8">
      <img className="absolute -top-0 sm:-top-4 md:-top-16 left-0 -z-50 w-[10rem] sm:w-[13rem] md:w-[15rem] lg:w-[18rem] xl:w-[20rem] transition-all duration-300 ease-in-out" src={backgroundImg1} alt="Background 1" />
      <img className="absolute right-0 top-[50rem] sm:top-[46rem] md:top-[25rem] lg:top-[30rem] xl:top-[32rem] -z-50 w-[5rem] sm:w-[7rem] md:w-[9rem] lg:w-[12rem] xl:w-[15rem] transition-all duration-300 ease-in-out" src={backgroundImg2} alt="Background 2" />
      <img className="absolute left-0 top-[80rem] sm:top-[75rem] md:top-[40rem] lg:top-[50rem] xl:top-[60rem] -z-50 w-[7rem] sm:w-[9rem] md:w-[10rem] lg:w-[12rem] xl:w-[15rem] transition-all duration-300 ease-in-out" src={backgroundImg3} alt="Background 3" />
      <img className="absolute right-0 top-[108rem] sm:top-[100rem] md:top-[60rem] lg:top-[60rem] xl:top-[85rem] -z-50 w-[7rem] sm:w-[9rem] md:w-[10rem] lg:w-[12rem] xl:w-[15rem] transition-all duration-300 ease-in-out" src={backgroundImg4} alt="Background 4" />

      <div className="font-medium text-[48px] leading-[56.88px] bg-[url('assets/Group30.png')] bg-no-repeat bg-left-bottom w-fit">
        Services
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-2 md:gap-8 lg:gap-12 xl:gap-16 items-center justify-between text-[#2C2C2C]">
        <div className="flex gap-2 sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16 flex-col md:w-[430px] lg:w-[480px] xl:w-[529px] h-fit">
          <div className="font-medium text-3xl lg:text-4xl xl:text-5xl leading-[25px] lg:leading-[50px] md:text-right text-center">Engagement</div>
          <div className="font-normal text-base leading-6 md:text-right text-center">
            We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high-quality approach. We deliver value, creativity, results, and exceptional levels of customer service and professionalism. We specialize in infrastructure development, energy, and natural resources.
          </div>
        </div>
        <div className="flex items-center xl:w-[450px] lg:w-[350px] md:w-[250px] w-[300px]">
          <img src={engagementImg} alt="Engagement" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2 md:gap-8 lg:gap-12 xl:gap-16 items-center justify-between text-[#2C2C2C]">
        <div className="flex items-center xl:w-[450px] lg:w-[350px] md:w-[250px] w-[300px]">
          <img src={communicationImg} alt="Communication" />
        </div>
        <div className="flex gap-2 sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16 flex-col md:w-[430px] lg:w-[480px] xl:w-[529px] h-fit">
          <div className="font-medium text-3xl lg:text-4xl xl:text-5xl leading-[25px] lg:leading-[50px] md:text-left text-center">Communications</div>
          <div className="font-normal text-base leading-6 md:text-left text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus.
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-2 md:gap-8 lg:gap-12 xl:gap-16 items-center justify-between text-[#2C2C2C]">
        <div className="flex gap-2 sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16 flex-col md:w-[430px] lg:w-[480px] xl:w-[529px] h-fit">
          <div className="font-medium text-3xl lg:text-4xl xl:text-5xl leading-[25px] lg:leading-[50px] md:text-right text-center">Facilitation</div>
          <div className="font-normal text-base leading-6 md:text-right text-center">
            We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high-quality approach. We deliver value, creativity, results, and exceptional levels of customer service and professionalism. We specialize in infrastructure development, energy, and natural resources.
          </div>
        </div>
        <div className="flex items-center xl:w-[450px] lg:w-[350px] md:w-[250px] w-[300px]">
          <img src={facilitationImg} alt="Facilitation" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2 md:gap-8 lg:gap-12 xl:gap-16 items-center justify-between text-[#2C2C2C]">
        <div className="flex items-center xl:w-[450px] lg:w-[350px] md:w-[250px] w-[300px]">
          <img src={consultationImg} alt="Consultation" />
        </div>
        <div className="flex gap-2 sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16 flex-col md:w-[430px] lg:w-[480px] xl:w-[529px] h-fit">
          <div className="font-medium text-3xl lg:text-4xl xl:text-5xl leading-[25px] lg:leading-[50px] md:text-left text-center">Consultation and Research</div>
          <div className="font-normal text-base leading-6 md:text-left text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus.
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-2 md:gap-8 lg:gap-12 xl:gap-16 items-center justify-between text-[#2C2C2C]">
        <div className="flex gap-2 sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16 flex-col md:w-[430px] lg:w-[480px] xl:w-[529px] h-fit">
          <div className="font-medium text-3xl lg:text-4xl xl:text-5xl leading-[25px] lg:leading-[50px] md:text-right text-center">Training & Mentoring</div>
          <div className="font-normal text-base leading-6 md:text-right text-center">
            We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high-quality approach. We deliver value, creativity, results, and exceptional levels of customer service and professionalism. We specialize in infrastructure development, energy, and natural resources.
          </div>
        </div>
        <div className="flex items-center xl:w-[450px] lg:w-[350px] md:w-[250px] w-[300px]">
          <img src={trainingImg} alt="Training & Mentoring" />
        </div>
      </div>
    </div>
  );
};

export default Services;
