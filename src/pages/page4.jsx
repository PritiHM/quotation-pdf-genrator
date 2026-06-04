import CommercialTable from "../components/CommercialTable";
import TermsConditions from "../components/TermsConditions";

const Page4 = ({ data }) => {
  return (
    <div className="page-container w-full max-w-[210mm] min-h-[297mm] mx-auto bg-white px-8 py-4">
      <CommercialTable data={data} />

      <div className="mt-3">
        <TermsConditions />
      </div>
    </div>
  );
};

export default Page4;