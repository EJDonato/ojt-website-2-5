import {students} from "../data/student_data.js";
import StudentCard from "../components/student_card";
import Footer from "../components/footer.jsx";

function StudentProfiles() {
  return (
    <main>
      <div className="h-[20vh] flex items-center justify-center bg-white/30 shadow-xl shadow-black/40">
        <h1 className="text-5xl font-bold text-center">Student Profiles</h1>
      </div>

      <div className="flex justify-center">
        <div className="flex justify-center flex-wrap gap-8 w-[90vw] p-10">
          {students.map((student) => (
            <StudentCard student={student} />
          ))}
        </div>
      </div>
        <Footer />
    </main>
  );
}

export default StudentProfiles;