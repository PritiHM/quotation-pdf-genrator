import React from "react";

const CommercialTable = ({ data }) => {
  const dealerPrice =
    data.margin === "30"
      ? Number(data.dealer30) || 0
      : Number(data.dealer25) || 0;

  const total =
    data.margin === "30"
      ? Number(data.final30) || 0
      : Number(data.final25) || 0;

  const gst = total - dealerPrice;

  return (
    <div className="text-[12px] leading-5 text-left sm:text-justify w-full overflow-hidden">

      <h2 className="font-bold text-2xl mt-2 mb-3 bg-yellow-200 inline-block px-2 break-words max-w-full">
        Commercial:
      </h2>

      <div className="w-full border border-gray-400 rounded-sm">
        <table className="w-full text-sm table-fixed">
          <thead>
            <tr className="bg-gray-100">
              <th className="border-b border-r border-gray-400 p-2 w-[6%]">
                S.N.
              </th>

              <th className="border-b border-r border-gray-400 p-2 w-[49%] text-left">
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
                  Diesel Genset, PECH-{data.kva} KVA, {data.phase} PH,
                  Auto Start - Auto Stop Panel Provision,
                  {data.bhp} BHP,
                  Eicher - TMTL Engines,
                  {data.model}
                </strong>

                <br />

                <span className="text-xs text-blue-700 font-semibold">
                  {data.emissionType}
                </span>
              </td>

              <td className="border-b border-r border-gray-400 p-2 text-center">
                ₹ {dealerPrice.toLocaleString("en-IN")}
              </td>

              <td className="border-b border-r border-gray-400 p-2 text-center">
                1
              </td>

              <td className="border-b p-2 text-center">
                ₹ {dealerPrice.toLocaleString("en-IN")}
              </td>
            </tr>

            <tr>
              <td className="border-b border-r border-gray-400 p-2 text-center">
                2
              </td>

              <td className="border-b border-r border-gray-400 p-2 text-left">
                GST @18%
              </td>

              <td className="border-b border-r border-gray-400 p-2 text-center">
                ₹ {gst.toLocaleString("en-IN")}
              </td>

              <td className="border-b border-r border-gray-400 p-2 text-center">
                -
              </td>

              <td className="border-b p-2 text-center">
                ₹ {gst.toLocaleString("en-IN")}
              </td>
            </tr>

            <tr>
              <td className="border-r border-gray-400 p-2 text-center">
                3
              </td>

              <td className="border-r border-gray-400 p-2 text-left">
                Transportation
              </td>

              <td className="border-r border-gray-400 p-2 text-center">
                Extra
              </td>

              <td className="border-r border-gray-400 p-2 text-center">
                1
              </td>

              <td className="p-2 text-center">
                {data.transportation &&
                !isNaN(data.transportation)
                  ? `₹ ${Number(data.transportation).toLocaleString("en-IN")}`
                  : data.transportation || "At Actual"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        className="w-full max-w-xl mx-auto mt-5"
        style={{
          pageBreakInside: "avoid",
          breakInside: "avoid",
        }}
      >
        <table className="w-full border border-gray-400 text-sm table-fixed">
          <tbody>
            <tr>
              <td className="border border-gray-400 p-2 font-semibold w-[64%]">
                Sub Total
              </td>

              <td className="border border-gray-400 p-2 text-right whitespace-nowrap w-[36%]">
                ₹ {dealerPrice.toLocaleString("en-IN")}
              </td>
            </tr>

            <tr>
              <td className="border border-gray-400 p-2 font-semibold">
                GST @18%
              </td>

              <td className="border border-gray-400 p-2 text-right whitespace-nowrap">
                ₹ {gst.toLocaleString("en-IN")}
              </td>
            </tr>

            <tr className="bg-yellow-100 font-bold">
              <td className="border border-gray-400 p-2">
                Grand Total
              </td>

              <td className="border border-gray-400 p-2 text-right whitespace-nowrap">
                ₹ {total.toLocaleString("en-IN")}
              </td>
            </tr>

            <tr>
              <td className="border border-gray-400 p-2 font-semibold">
                Advance Amount
              </td>

              <td className="border border-gray-400 p-2 text-right whitespace-nowrap">
                ₹ {(Number(data.advanceAmount) || 0).toLocaleString("en-IN")}
              </td>
            </tr>

            <tr className="bg-gray-50">
              <td className="border border-gray-400 p-2 font-bold">
                Balance Amount
              </td>

              <td className="border border-gray-400 p-2 text-right font-bold text-red-600 whitespace-nowrap">
                ₹ {(Number(data.balanceAmount) || 0).toLocaleString("en-IN")}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default CommercialTable;