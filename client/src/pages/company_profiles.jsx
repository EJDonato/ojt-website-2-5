import {companies} from "../data/company_data.js";
import CompanyCard from "../components/company_card";
import Footer from "../components/footer.jsx";

function CompanyProfiles() {
  return (
    <main>
      <div className="h-[20vh] flex items-center justify-center bg-white/30 shadow-xl shadow-black/40">
        <h1 className="text-5xl font-bold text-center">Company Profiles</h1>
      </div>

      <div className="flex justify-center">
        <div className="flex justify-center flex-wrap gap-8 w-[90vw] p-10">
          {companies.map((company) => (
            <CompanyCard company={company} />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default CompanyProfiles;
