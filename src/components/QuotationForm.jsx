import React from "react";
import { useState } from "react";
import { useReactToPrint } from "react-to-print";
import generators from "../data/generators";


const QuotationForm = ({
  formData,
  setFormData,
  printRef,
}) => {
  const [quoteNo, setQuoteNo] = useState(() => {
    return localStorage.getItem("quoteNo") || "QT-1001";
  });

  const generator = generators[formData.generator] || {};

  const dealerPrice =
    formData.margin === "30"
      ? generator.dealer30 || 0
      : generator.dealer25 || 0;

  const baseTotal =
    formData.margin === "30"
      ? generator.final30 || 0
      : generator.final25 || 0;

  const gst = baseTotal - dealerPrice;

  // Compute numeric transportation charge securely
  const transportCost = parseFloat(formData.transportation) || 0;

  // Add transportation pricing into final total calculation matrix
  const total = baseTotal + transportCost;

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(name, value);

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const downloadPDF = useReactToPrint({
    contentRef: printRef,
    documentTitle: `Quotation-${quoteNo}-${formData.customerName}`,

    onAfterPrint: () => {
      const parts = quoteNo.split("/");

      const currentNumber = parseInt(parts[2]);

      const nextNumber = String(currentNumber + 1).padStart(5, "0");

      const nextQuoteNo = `NUS/QTN/${nextNumber}/2026-2027`;

      localStorage.setItem("quoteNo", nextQuoteNo);
      setQuoteNo(nextQuoteNo);
    },
  });

  return (
    /* FIX: Added 'print:hidden' class to the outer container. 
      This guarantees mobile browsers explicitly strip this element from the print layout structure.
    */
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-4 sm:p-6 mb-8 mx-4 sm:mx-auto overflow-hidden print:hidden">

      <h2 className="text-xl sm:text-2xl font-bold text-center text-blue-700 mb-6 px-2 break-words">
        Generator Quotation Form
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

        <div>
          <label className="block font-medium mb-1 text-sm sm:text-base">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName || ""}
            onChange={handleChange}
            placeholder="Enter Your Company Name"
            className="w-full border rounded-lg p-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-sm sm:text-base">
            Customer Name
          </label>
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            placeholder="Enter Customer Name"
            className="w-full border rounded-lg p-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-sm sm:text-base">
            Mobile Number
          </label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter Mobile Number"
            className="w-full border rounded-lg p-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-sm sm:text-base">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            className="w-full border rounded-lg p-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-sm sm:text-base">
            Quotation Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-sm sm:text-base">
            Generator KVA
          </label>
          <select
            name="generator"
            value={formData.generator}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 text-sm sm:text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Generator</option>
            {Object.keys(generators).map((key) => (
              <option key={key} value={key}>
                {generators[key].kva} KVA | {generators[key].phase} Phase
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1 text-sm sm:text-base">
            Dealer Margin
          </label>
          <select
            name="margin"
            value={formData.margin}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 text-sm sm:text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="25">+25,000 Margin</option>
            <option value="30">+30,000 Margin</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1 text-sm sm:text-base">
            Advance Amount
          </label>
          <input
            type="number"
            name="advanceAmount"
            value={formData.advanceAmount}
            onChange={handleChange}
            placeholder="Enter Advance Amount"
            className="w-full border rounded-lg p-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-sm sm:text-base">
            Balance Amount
          </label>
          <input
            type="number"
            name="balanceAmount"
            value={formData.balanceAmount}
            onChange={handleChange}
            placeholder="Enter Balance Amount"
            className="w-full border rounded-lg p-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-sm sm:text-base">
            Transportation
          </label>
          <input
            type="number"
            name="transportation"
            value={formData.transportation || ""}
            onChange={handleChange}
            placeholder="Enter Transportation Amount"
            className="w-full border rounded-lg p-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block font-medium mb-1 text-sm sm:text-base">
            Address
          </label>
          <textarea
            rows="3"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter Address"
            className="w-full border rounded-lg p-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Generator Details */}
        <div className="sm:col-span-2">
          <div className="bg-blue-50 border rounded-lg p-4 sm:p-5">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-blue-700">
              Generator Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm sm:text-base">
              <p className="break-words">
                <b>KVA :</b> {generator.kva || ""}
              </p>
              <p className="break-words">
                <b>Phase :</b> {generator.phase || ""}
              </p>
              <p className="break-words">
                <b>Model :</b> {generator.model || ""}
              </p>
              <p className="break-words">
                <b>BHP :</b> {generator.bhp || ""}
              </p>
              <p className="break-words">
                <b>NDP :</b> ₹ {generator.ndp?.toLocaleString() || 0}
              </p>
              <p className="break-words">
                <b>AMF :</b> ₹ {generator.amf?.toLocaleString() || 0}
              </p>
            </div>
          </div>
        </div>

        {/* PRICE DETAILS */}
        <div className="sm:col-span-2">
          <div className="bg-green-50 rounded-lg p-4 sm:p-5 border">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-green-700">
              Price Details
            </h3>
            
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-2 text-sm sm:text-base">
              <span>Dealer Price</span>
              <span className="font-semibold break-words">
                ₹ {dealerPrice.toLocaleString()}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-2 text-sm sm:text-base">
              <span>GST (18%)</span>
              <span className="font-semibold break-words">
                ₹ {gst.toLocaleString()}
              </span>
            </div>

            {/* Itemized Transportation calculation layout */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-2 text-sm sm:text-base">
              <span>Transportation</span>
              <span className="font-semibold break-words">
                ₹ {transportCost.toLocaleString()}
              </span>
            </div>

            <hr className="my-2 border-gray-300" />

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 text-lg sm:text-xl font-bold text-green-700">
              <span>Total (With GST)</span>
              <span className="break-words">
                ₹ {total.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <div className="sm:col-span-2 flex justify-center mt-4 sm:mt-6">
          <button
            onClick={downloadPDF}
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors shadow-md"
          >
            Download PDF
          </button>
        </div>

      </div>

    </div>
  );
};

export default QuotationForm;