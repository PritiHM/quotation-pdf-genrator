import tmtl from "../assets/tmtl.jpg";
import nexus from "../assets/nexus.png";
import perfect from "../assets/perfect.jpg";

const Header = () => {
  return (
    <div className="pb-4 w-full max-w-full overflow-hidden">

      {/* Logos Row */}
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:items-center sm:gap-0 w-full mb-6">

        <div className="w-full sm:w-1/3 flex justify-center sm:justify-start">
          <img
            src={tmtl}
            alt="TMTL"
            className="h-12 sm:h-16 object-contain"
          />
        </div>

        <div className="w-full sm:w-1/3 flex justify-center">
          <img
            src={nexus}
            alt="Nexus"
            className="h-16 sm:h-20 object-contain"
          />
        </div>

        <div className="w-full sm:w-1/3 flex justify-center sm:justify-end">
          <img
            src={perfect}
            alt="Perfect"
            className="h-12 sm:h-16 object-contain"
          />
        </div>

      </div>

      <h1 className="text-center text-red-600 text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide px-2 break-words">
        NEXUS URJA SOLUTIONS
      </h1>

      <p className="text-center text-xs mt-2 px-4 break-words">
        Office: Flat No. G-1403, Yashada Splendid Park, Dudulgaon, Moshi, Pune-412105
      </p>

      <div className="text-center text-xs mt-1 px-4 text-gray-900 flex flex-wrap justify-center gap-x-2 gap-y-0.5">
        <span className="inline-block">Sales: +91 8668250720 / 8983328537</span>
        <span className="hidden sm:inline">|</span>
        <span className="inline-block">Email: sales@nexusurjasolutions.com</span>
        <span className="hidden sm:inline">|</span>
        <span className="inline-block">GST: 27EPUPM4088H1Z2</span>
      </div>

      <hr className="mt-3 border-gray-400" />
    </div>
  );
};

export default Header;