const ProposalContent = ({ data }) => {
  console.log("PROPOSAL DATA =", data);

  return (
    <div className="mt-6 text-[13px] leading-7 text-left sm:text-justify w-full max-w-full overflow-hidden px-4 sm:px-0">

      <p className="mb-4 font-semibold break-words">
        Dear {data?.customerName || "Sir"},
      </p>

      <p className="mb-4 break-words">
        This has reference to your enquiry of Silent DG Set. We are pleased
        to introduce ourselves as one of the largest genset manufacturer in
        India having manufacturing range of 2 KVA to 2000 KVA Genset
        providing custom built power solutions.
      </p>

      <p className="mb-4 break-words">
        DG sets are powered by ‘EICHER/TMTL ENGINES’, a unit of TAFE Motors
        and Tractors Limited, well known for their ruggedness, economics of
        performance & high reliability. Eicher Engines are based on
        AIR/WATER-COOLED technology and have powered more than 2,0,000
        DG Sets running across the country.
      </p>

      <p className="mb-4 break-words">
        Eicher Engines have earned the trust of millions of users as these
        engines can be operated for long periods without stopping the engine,
        require lowest maintenance cost, offer best-in-class fuel economy
        and meet the latest emission norms.
      </p>

      <p className="mb-4 break-words">
        We are the OEM of Eicher Engines powered PERFECT DG set. TMTL has
        created an enviable position for themselves in the industry because
        of our commitment towards product quality and total customer
        satisfaction. Our state-of-the-art design & manufacturing facilities,
        strong service support and customer friendly attitude have made
        ‘PERFECT’ DG sets the first choice for most telecom corporates such
        as Bharti Infratel, Indus Towers, Vodafone, Reliance JIO, Idea,
        IDMC, ICICI Bank, Axis Bank, Aditya Birla Retail, HDFC Bank,
        Kotak Mahindra Bank, IOCL, SBI and many others.
      </p>

      <p className="mb-4 break-words">
        We have also developed capability to execute the complete project
        including civil works, Installation, electrical cabling & earthing
        etc. Our team of expert engineers and installers shall guide you
        appropriately for installation of complete genset in the most
        economical way.
      </p>

      <p className="mb-4 break-words">
        Our manufacturing plants, located at M-7, Additional, MIDC,
        Satara - 415004, are equipped with the latest machinery such as
        Amada/Muratech make CNC Cutting, CNC Bending and a fully automated
        powder coating facility with pure Polyester powder and baking on
        automatic conveyorized plant resulting in good surface finish and
        protection against corrosion. All the products coming out of our
        plants conform to stringent quality control norms and are thoroughly
        tested for performance. DG Sets are manufactured as per technical
        guidelines of Tafe Motors & Tractors Limited.
      </p>

      <p className="mb-4 break-words">
        We are also pleased to inform you that all models of DG Sets
        manufactured by us, are tested and certified as per latest Sound &
        Emission norms, issued by CPCB.
      </p>

      <p className="font-medium break-words">
        Assuring you of our best attention at all times.
      </p>

    </div>
  );
};

export default ProposalContent;