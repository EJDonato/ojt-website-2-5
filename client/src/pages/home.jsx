import image from "../assets/inspire_logo.png";
import CompanyCarousel from "../components/company_carousel.jsx";
import StudentCarousel from "../components/student_carousel.jsx";
import Footer from "../components/footer.jsx";

function Home() {
  return (
    <main>
      <div className='flex items-center justify-center h-[60vh] flex-col gap-2 bg-[url("/src/assets/groufie.png")] bg-cover bg-center shadow-xl shadow-black/30 z-0'>
        <div className="flex items-center justify-center flex-col gap-2 p-6 rounded-3xl bg-black/30">
          <h1 className="font-bold text-white text-3xl text-center">
            Bachelor of Science in Computer Engineering 2-5
          </h1>
          <h3 className="text-white text-xl text-center">Batch 24-25</h3>
        </div>
      </div>
      <StudentCarousel />

      <div className="flex items-center justify-center xl:m-0 sm: m-3">
        <div className="flex items-center justify-center mt-3 bg-white/30 rounded-4xl shadow-xl shadow-black/30 xl:gap-32 xl:p-10 sm: gap-5 sm: p-5">
          <div className="flex flex-col gap-5">
            <h1 className="text-black font-bold xl:text-5xl sm: text-3xl">OJT Adviser</h1>
            <h2 className="text-white font-bold xl:text-2xl sm: text-lg">
              Dr. Lutzer U. Reyes
            </h2>
          </div>
          <div>
            <img className="xl:w-80 sm:w-[30vw]" src={image} alt="" />
          </div>
        </div>
      </div>

      <a href="/company-profiles">
        <div className="flex flex-col items-center justify-center m-8 bg-white/30 overflow-hidden rounded-4xl shadow-xl shadow-black/30">
          <h1 className="font-bold mt-4 xl:text-4xl sm: text-2xl text-center">
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
