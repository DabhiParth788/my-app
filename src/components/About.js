import aboutUsImage from '../assets/about us 1.png'; // Adjust the path to your assets folder
import engagementIcon from '../assets/Enagagement icon 1.png';
import communicationIcon from '../assets/coomunication icon 1.png';
import groupBackground from '../assets/Group30.png'; // Background image for heading

function About() {
  return (
    <div
      id="aboutUs"
      className="relative w-fit h-fit flex flex-col lg:flex-row py-2 sm:py-4 sm:px-12 px-4 sm:pt-0 pt-12"
    >
      {/* Image Section */}
      <div className="lg:w-[50%] lg:h-[475px] flex items-start md:mt-12 justify-center sm:p-12 p-4">
        <img src={aboutUsImage} alt="About Us" />
      </div>

      {/* Content Section */}
      <div className="lg:w-[50%] h-[50%] md:mt-16 flex flex-col gap-4">
        {/* Title and Description */}
        <div>
          <div
            className="font-medium text-2xl sm:text-4xl leading-[28px] sm:leading-[56px]"
            style={{
              backgroundImage: `url(${groupBackground})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left bottom',
              width: 'fit-content',
            }}
          >
            <span>ABOUT US</span>
          </div>
          <div className="font-normal text-base sm:text-lg leading-5 sm:leading-7 text-[#2C2C2C]">
            We love what we do and are driven by achieving great results for our
            clients. Our awards and impressive client list are testament to our
            high-quality approach. We deliver value, creativity, results, and
            exceptional levels of customer service and professionalism. We
            specialize in infrastructure development, energy, and natural
            resources.
          </div>
        </div>

        {/* Icons and Subsections */}
        <div className="flex gap-16">
          {/* Engagement Section */}
          <div className="flex flex-col gap-4">
            <div className="size-11">
              <img src={engagementIcon} alt="Engagement Icon" />
            </div>
            <div className="font-medium text-lg sm:text-2xl leading-5 sm:leading-7">
              Engagement
            </div>
            <div className="font-normal text-sm sm:text-lg leading-5 sm:leading-7 text-[#2C2C2C]">
              We are engagement specialists, who have led projects at all
              levels of the IAP2 spectrum.<span>READ MORE</span>
            </div>
          </div>

          {/* Communication Section */}
          <div className="flex flex-col gap-4">
            <div className="size-11">
              <img src={communicationIcon} alt="Communication Icon" />
            </div>
            <div className="font-medium text-lg sm:text-2xl leading-5 sm:leading-7">
              Communications
            </div>
            <div className="font-normal text-sm sm:text-lg leading-5 sm:leading-7 text-[#2C2C2C]">
              We are award-winning leaders in communications and campaign
              management.<span>READ MORE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
