const CustomerInfo = ({ data, quoteNo }) => {
  const formattedDate = new Date(data.date).toLocaleDateString(
    "en-GB",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }
  );

  return (
    <div className="mt-6 text-sm w-full max-w-full overflow-hidden leading-relaxed">

      <h2 className="text-center font-bold text-lg sm:text-xl mb-8 break-words px-2">
        Quotation For {data.kva} kVA {data.phase} Phase Diesel Generator
      </h2>

      <div className="flex flex-row justify-between items-baseline gap-4 mb-6 text-xs sm:text-sm">
        <p className="break-words font-bold">
          Quote Ref No. <span className="font-normal">{quoteNo}</span>
        </p>

        <p className="text-right break-words font-bold pr-4">
          Date- <span className="font-normal">{formattedDate}</span>
        </p>
      </div>

      <div className="break-words space-y-1 mb-6 text-xs sm:text-sm">
        <p className="font-bold mb-3">To,</p>

        <p className="font-bold">
  {data.companyName}
</p>

<p className="font-bold">
  {data.customerName}
</p>
        

        <p className="font-bold pt-2">
          Mob: {data.mobile}
        </p>
      </div>

      <p className="mt-6 font-bold break-words text-xs sm:text-sm">
        Subject: Proposal For {data.kva} kVA {data.phase}Ph EICHER-TMTL Make Silent Diesel Engine Generator
      </p>

    </div>
  );
};

export default CustomerInfo;