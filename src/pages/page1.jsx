import Header from "../components/Header";
import CustomerInfo from "../components/CustomerInfo";
import ProposalContent from "../components/ProposalContent";

const Page1 = ({ data }) => {
  console.log("PAGE1 DATA =", data);

  return (
<div className="w-full max-w-[210mm] min-h-[297mm] mx-auto bg-white px-4 md:px-8 py-4 md:py-6 shadow-lg overflow-x-auto">
      <Header />

      <CustomerInfo data={data} />

      <ProposalContent data={data} />

    </div>
  );
};

export default Page1;