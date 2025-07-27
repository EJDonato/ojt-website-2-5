import { companies } from "../data/company_data.js";
import { useParams } from "react-router-dom";
import { students } from "../data/student_data.js";

import StudentCard from "../components/student_card.jsx";
import Footer from "../components/footer.jsx";

function CompanyPage() {
  const { id } = useParams();
  const company = companies.find((c) => c.id === id);
  const interns = students.filter((student) =>
    company.intern.includes(student.id)
  );

  if (!company)
    return (
      <div className="flex items-center justify-center h-screen bg-black/30">
        <h1 className="font-bold text-7xl text-red-700 mb-40">
          Company Not Found
        </h1>
      </div>
    );

  return (
    <main>
      <div className="flex items-center justify-center h-[40vh] bg-white/30 shadow-xl shadow-black/40">
        <div className="flex flex-row items-center gap-10">
          <img src={company.logo} alt="" className="w-60" />
          <div className="flex flex-col gap-3 max-w-6xl">
            <h1 className="font-bold text-7xl">{company.name}</h1>
            <h1 className="text-3xl">{company.address}</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-black/30 text-white shadow-xl shadow-black/40">
        <h1 className="pt-10 font-bold text-3xl">ABOUT THE COMPANY</h1>
        <p className="p-10 pt-5 text-justify text-lg">{company.about}</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-3 mb-8">
        <h1 className="text-3xl font-bold pt-10 text-white">
          STUDENT INTERNS' TESTIMONIALS
        </h1>
        <div className="flex justify-center flex-wrap gap-8">
          {interns.map((student) => (
            <StudentCard student={student} showTestimonial={true} />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default CompanyPage;
