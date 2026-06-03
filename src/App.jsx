import { useRef, useState } from "react";
import generators from "./data/generators";

import QuotationForm from "./components/QuotationForm";

import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";

function App() {
  const [formData, setFormData] = useState({
    companyName: "",
    customerName: "",
    address: "",
    mobile: "",
    email: "",
    generator: "35KVA",
    margin: "25",
    transportation: "", // ADD THIS

    date: new Date().toISOString().split("T")[0],
    advanceAmount: "",
    balanceAmount: "",
  });

  const [quoteNo, setQuoteNo] = useState(() => {
  return (
    localStorage.getItem("quoteNo") ||
    "NUS/QTN/03044/2026-2027"
  );
});


  const data = {
    ...generators[formData.generator],

    companyName: formData.companyName,
    customerName: formData.customerName,
    address: formData.address,
    mobile: formData.mobile,
    email: formData.email,
    transportation: formData.transportation, // ADD THIS

    date: formData.date,
    advanceAmount: formData.advanceAmount,
  };

  const printRef = useRef();

  return (
    <div className="bg-gray-200 py-4 md:py-10 px-2 md:px-0">
     <div className="quotation-form">
  <QuotationForm
    formData={formData}
    setFormData={setFormData}
    printRef={printRef}
    quoteNo={quoteNo}
    setQuoteNo={setQuoteNo}
  />
</div>

      <div ref={printRef} id="quotation-pdf">
       <Page1
  data={data}
  quoteNo={quoteNo}
/>

        <div className="h-8"></div>

        <Page2 />

        <div className="h-8"></div>

        <Page3 data={data} />

        <div className="h-8"></div>

        <Page4 data={data} />
      </div>
    </div>
  );
}

export default App;