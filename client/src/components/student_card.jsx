

function StudentCard({ student, showTestimonial=false }) {
  return (
    <div className="bg-white/30 p-6 rounded-4xl shadow-xl shadow-black/30 max-w-71">
      <a href={`/student-profiles/${student.id}`}>
        <img
          src={student.image}
          alt={student.name}
          className="h-60 object-contain mx-auto"
        />
        <h2 className="text-center mt-4 font-bold text-2xl">{student.surname}</h2>
      </a>
      {showTestimonial && (
        <div className="flex items-center justify-center mt-4">
          <p className="text-lg">{student.testimonial}</p>
        </div>
      )}
    </div>
  );
}

export default StudentCard;
