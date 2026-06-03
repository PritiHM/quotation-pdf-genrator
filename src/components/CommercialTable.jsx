const CommercialTable = ({ data }) => {

  const dealerPrice =
    data.margin === "30"
      ? data.dealer30 || 0
      : data.dealer25 || 0;

  const total =
    data.margin === "30"
      ? data.final30 || 0
      : data.final25 || 0;

  const gst = total - dealerPrice;

  return (
    <div className="text-[13px] leading-6 text-left sm:text-justify w-full overflow-hidden">

      <h3 className="font-bold mt-2">EARTHING:</h3>
      <p>
        The Earthing arrangements for DG set / Canopy will be homogenous.
      </p>

      <h3 className="font-bold mt-2">PAINTING:</h3>
      <p>
        All metal surfaces will be thoroughly treated with degreasing,
        derusting and phosphating in our in-house fully-automated,
        9 tank pre-treatment process, conveyorized powder coating plant,
        before final powder coating. The finish will be suitable for outdoor use.
      </p>

      <h3 className="font-bold mt-2">NOISE LEVEL PERFORMANCE:</h3>
      <p>
        The maximum noise level permitted during full load will be 75 dB,
        measured at 1 meter distance from the edge of canopy.
        The product shall be certified by CPCB as per latest sound norms.
      </p>

      <h3 className="font-bold mt-2">FUEL FILLING & DRAIN:</h3>
      <p>
        Suitable external fuel filling and drainage connections with locking
        facility will be provided.
      </p>

      <h3 className="font-bold mt-2">FUEL TANK:</h3>
      <p>
        The fuel tank shall be removable type. The tank shall be fabricated
        from CRCA / HR Pickled / MS, minimum 2 mm thick sheet.
      </p>

      <h3 className="font-bold mt-2">TEMPERATURE RISE INSIDE CANOPY:</h3>
      <p>
        The maximum permissible temperature rise above the ambient
        will be 5°C to 7°C as per IS standard.
      </p>

      <h3 className="font-bold mt-2">VENTILATION:</h3>
      <p>
        The canopy is equipped with a forced air circulation fan of reputed make.
      </p>

      <h3 className="font-bold mt-2">ANTI VIBRATION PADS:</h3>
      <p>
        The anti-vibration pads will be provided below diesel engine and alternator.
      </p>

      <h3 className="font-bold mt-2">EMERGENCY PUSH STOP BUTTON:</h3>
      <p>
        The canopy will have provision of emergency push button which shall
        be housed in a protective enclosure with a glass front.
      </p>

      <p className="mt-4">
        Design / Specifications are subject to change due to continual
        improvement process.
      </p>

      <h2 className="font-bold text-2xl mt-10 mb-5 bg-yellow-200 inline-block px-2 break-words max-w-full">
        Commercial:
      </h2>

      <div className="w-full border border-gray-400 rounded-sm">
        <table className="w-full text-sm table-fixed">
          <thead>
            <tr className="bg-gray-100">
              <th className="border-b border-r border-gray-400 p-2 w-[6%]">
                S.N.
              </th>
              <th className="border-b border-r border-gray-400 p-2 w-[49%]">
                Product Description
              </th>
              <th className="border-b border-r border-gray-400 p-2 w-[15%]">
                Unit Price
              </th>
              <th className="border-b border-r border-gray-400 p-2 w-[10%]">
                Qty
              </th>
              <th className="border-b p-2 w-[20%]">
                Amount
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border-b border-r border-gray-400 p-2 text-center">
                1
              </td>

              <td className="border-b border-r border-gray-400 p-3 break-words">
                <strong>
                  Diesel Genset, PECH-{data.kva} KVA,{" "}
                  {data.phase} PH,{" "}
                  Auto Start - Auto Stop Panel Provision,{" "}
                  {data.bhp} BHP,{" "}
                  Eicher - TMTL Engines,{" "}
                  {data.model}
                </strong>
                <br />
<strong>{data.emissionType}</strong>
              </td>

              <td className="border-b border-r border-gray-400 p-2 text-center break-words">
                ₹ {dealerPrice.toLocaleString()}
              </td>

              <td className="border-b border-r border-gray-400 p-2 text-center">
                1
              </td>

              <td className="border-b p-2 text-center break-words">
                ₹ {dealerPrice.toLocaleString()}
              </td>
            </tr>

            <tr>
              <td className="border-b border-r border-gray-400 p-2 text-center">
                2
              </td>

              <td className="border-b border-r border-gray-400 p-2">
                GST @18%
              </td>

              <td className="border-b border-r border-gray-400 p-2 text-center break-words">
                ₹ {gst.toLocaleString()}
              </td>

              <td className="border-b border-r border-gray-400 p-2 text-center">
                -
              </td>

              <td className="border-b p-2 text-center break-words">
                ₹ {gst.toLocaleString()}
              </td>
            </tr>

            <tr>
              <td className="border-r border-gray-400 p-2 text-center">
                3
              </td>

              <td className="border-r border-gray-400 p-2">
                Transportation
              </td>

              <td className="border-r border-gray-400 p-2 text-center">
                Extra
              </td>

              <td className="border-r border-gray-400 p-2 text-center">
                1
              </td>

              <td className="p-2 text-center">
  ₹ {data.transportation || "At Actual"}
</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* CHANGED: Replaced flex centering container with a block container that shrinks the overall width and centers it with mx-auto */}
      <div className="w-full max-w-xl mx-auto mt-5 overflow-x-auto">
        {/* CHANGED: Set to table-fixed to allow explicit layout control over column structure */}
        <table className="w-full border border-gray-400 text-sm table-fixed">
          <tbody>
            <tr>
              {/* CHANGED: Configured an explicit width percentage to shifts the divider line left so it visually matches the upper table's dividing point exactly */}
              <td className="border border-gray-400 p-2 font-semibold w-[64%]">
                Sub Total 
              </td>
              {/* CHANGED: Configured remaining structural balance width for the amount values column */}
              <td className="border border-gray-400 p-2 text-right whitespace-nowrap w-[36%]">
                ₹ {dealerPrice.toLocaleString()}
              </td>
            </tr>

            <tr>
              <td className="border border-gray-400 p-2 font-semibold">
                GST @18%
              </td>
              <td className="border border-gray-400 p-2 text-right whitespace-nowrap">
                ₹ {gst.toLocaleString()}
              </td>
            </tr>

            <tr>
              <td className="border border-gray-400 p-2 font-bold bg-yellow-100">
                Grand Total
              </td>
              <td className="border border-gray-400 p-2 text-right font-bold bg-yellow-100 whitespace-nowrap">
                ₹ {total.toLocaleString()}
              </td>
            </tr>

            <tr>
              <td className="border border-gray-400 p-2 font-semibold">
                Advance Amount
              </td>
              <td className="border border-gray-400 p-2 text-right whitespace-nowrap">
                ₹ {data.advanceAmount || 0}
              </td>
            </tr>

            <tr>
              <td className="border border-gray-400 p-2 font-semibold">
                Balance Amount
              </td>
              <td className="border border-gray-400 p-2 text-right whitespace-nowrap">
                ₹ {data.balanceAmount || 0}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default CommercialTable;