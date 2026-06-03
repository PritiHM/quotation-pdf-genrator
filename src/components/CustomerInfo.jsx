const CustomerInfo = ({ data, quoteNo }) => {
    const formattedDate = new Date(data.date).toLocaleDateString(
    "en-GB",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <div className="mt-6 text-sm w-full max-w-full overflow-hidden">

      <h2 className="text-center font-bold text-lg sm:text-xl mb-6 break-words px-2">
        Quotation For {data.kva}kva - {data.phase} phase Diesel Generator
      </h2>

      <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-6">
        <p className="break-words">
  <span className="font-semibold">
    Quote Ref No.
  </span>
  <br />
  {quoteNo}
</p>

        <p className="sm:text-right break-words">
          <span className="font-semibold">
            Date
          </span>
          <br />
          {formattedDate}
        </p>
      </div>

      <div className="break-words">
        <p>To,</p>

        <p className="font-semibold">
          {data.customerName}
        </p>

        <p>{data.address}</p>

        <p>
          Mob : {data.mobile}
        </p>
      </div>

      <p className="mt-4 font-semibold break-words">
        Subject: Proposal For {data.kva} EICHER-TMTL Make Silent Diesel Engine Generator
      </p>

    </div>
  );
};

export default CustomerInfo;