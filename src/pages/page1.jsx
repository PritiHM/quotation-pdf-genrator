import Header from "../components/Header";
import CustomerInfo from "../components/CustomerInfo";
import ProposalContent from "../components/ProposalContent";

const Page1 = ({ data, quoteNo }) => {
  return (
<div
  className="w-[210mm] h-[297mm] mx-auto bg-white px-8 py-6 overflow-hidden"
>      <Header />

      <CustomerInfo
        data={data}
        quoteNo={quoteNo}
      />

      <ProposalContent data={data} />
    </div>
  );
};

export default Page1;