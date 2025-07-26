import image from "../assets/inspire_logo.png";
import CompanyCarousel from "../components/company_carousel.jsx";
import StudentCarousel from "../components/student_carousel.jsx";
import Footer from "../components/footer.jsx";

function Home() {
  return (
    <main>
      <div className='flex items-center justify-center h-100 flex-col gap-2 bg-[url("/src/assets/groufie.png")] bg-cover bg-center shadow-xl shadow-black/30 z-0'>
        <div className="flex items-center justify-center flex-col gap-2 p-6 rounded-3xl bg-black/30">
          <h1 className="font-bold text-white text-3xl">
            Bachelor of Science in Computer Engineering 2-5
          </h1>
          <h3 className="text-white text-xl">Batch 24-25</h3>
        </div>
      </div>
      <StudentCarousel />

      <div className="mt-1 flex items-center justify-center">
        <div className="flex items-center justify-center gap-32 mt-10 bg-white/30 p-10 rounded-4xl shadow-xl shadow-black/30">
          <div className="flex flex-col gap-5">
            <h1 className="text-black font-bold text-5xl">OJT Adviser</h1>
            <h2 className="text-white font-bold text-2xl">
              Dr. Lutzer U. Reyes
            </h2>
          </div>
          <div>
            <img className="w-80" src={image} alt="" />
          </div>
        </div>
      </div>

      <a href="/company-profiles">
        <div className="flex flex-col items-center justify-center m-8 bg-white/30 overflow-hidden rounded-4xl shadow-xl shadow-black/30">
          <h1 className="font-bold text-4xl mt-4">
            Learn about our partner companies!
          </h1>
          <CompanyCarousel />
        </div>
      </a>

      <Footer />
    </main>
  );
}

export default Home;
