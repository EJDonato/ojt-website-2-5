import { useParams } from "react-router-dom";
import { students } from "../data/student_data.js";

import StudentCarousel from "../components/student_carousel.jsx";
import Footer from "../components/footer.jsx";

function StudentPage() {
  const { id } = useParams();
  const student = students.find((c) => c.id === id);

  if (!student)
    return (
      <div className="flex items-center justify-center h-screen bg-black/30">
        <h1 className="font-bold text-7xl text-red-700 mb-40">
          Student Not Found
        </h1>
      </div>
    );

  return (
    <main>
      <div className="flex items-center justify-center h-[40vh] bg-white/30 shadow-xl shadow-black/40">
        <div className="flex flex-row items-center gap-10">
          <img src={student.image} alt="" className="w-60" />
          <div className="flex flex-col max-w-6xl">
            <h1 className="font-bold text-7xl mb-5">{student.fullname}</h1>
            <h1 className="text-4xl font-bold">{student.company}</h1>
            <h1 className="text-3xl">{student.position}</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-black/30 text-white shadow-xl shadow-black/40">
        <h1 className="pt-10 font-bold text-3xl">ABOUT ME</h1>
        <p className="p-10 pt-5 text-justify text-lg">{student.about}</p>
      </div>

      <StudentCarousel />
      <Footer />
    </main>
  );
}

export default StudentPage;
