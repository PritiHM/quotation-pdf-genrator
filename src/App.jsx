import { useRef, useState } from "react";
import generators from "./data/generators";

import QuotationForm from "./components/QuotationForm";


import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";

function App() {
  const [formData, setFormData] = useState({
  customerName: "",
  address: "",
  mobile: "",
  email: "",
  generator: "35KVA",
  margin: "25",
  date: new Date().toISOString().split("T")[0],
  advanceAmount: "",
  balanceAmount: "",
});
console.log(formData);
  const data = {
    ...generators[formData.generator],

    customerName: formData.customerName,
    address: formData.address,
    mobile: formData.mobile,
    email: formData.email,
    date: formData.date,
    advanceAmount: formData.advanceAmount,
  };
  const printRef = useRef();

  return (
<div className="bg-gray-200 py-4 md:py-10 px-2 md:px-0">
     <QuotationForm
  formData={formData}
  setFormData={setFormData}
  printRef={printRef}
/>
<div ref={printRef} id="quotation-pdf">
        <Page1 data={data} />

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