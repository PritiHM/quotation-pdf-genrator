import CommercialTable from "../components/CommercialTable";

const Page3 = ({ data }) => {
  return (
<div className="w-[210mm] h-[297mm] mx-auto bg-white px-8 py-6 overflow-hidden">     <CommercialTable data={data} />
    </div>
  );
};

export default Page3;