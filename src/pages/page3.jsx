import CommercialTable from "../components/CommercialTable";

const Page3 = ({ data }) => {
  return (
<div className="w-full max-w-[210mm] min-h-[297mm] mx-auto bg-white px-4 md:px-8 py-4 md:py-6 shadow-lg overflow-x-auto">      <CommercialTable data={data} />
    </div>
  );
};

export default Page3;