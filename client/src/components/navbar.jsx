import logo from "../assets/inspire_logo.png";

function Navbar() {
  const path = window.location.pathname;
  return (
    <nav className="relative flex justify-between bg-gradient-to-bl from-black to-[rgb(100, 21, 21)] shadow-xl shadow-black/60 text-white z-20 sticky top-0">
      <div className="flex items-center gap-5 p-4 pl-15">
        <img className="w-15 shadow-lg shadow-black/30" src={logo} alt="Logo" />
        <p className="font-bold text-xl">2-5 Portfolio</p>
      </div>
      <div className="flex items-center p-4 pr-16">
        <ul className="flex text-lg font-bold gap-15">
          <li>
            <a
              className={`relative inline-block group transition duration-400 ease-in-out ${
                path === "/" ? "text-red-400" : "text-white hover:text-red-400"
              }`}
              href="/"
            >
              Home
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-red-400 origin-center transition-transform duration-300 ${
                  path === "/"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </a>
          </li>
          <li>
            <a
              className={`relative inline-block group transition duration-400 ease-in-out ${
                path === "/company-profiles"
                  ? "text-red-400"
                  : "text-white hover:text-red-400"
              }`}
              href="/company-profiles"
            >
              Company Profiles
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-red-400 origin-center transition-transform duration-300 ${
                  path === "/company-profiles"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </a>
          </li>
          <li>
            <a
              className={`relative inline-block group transition duration-400 ease-in-out ${
                path === "/weekly-reports"
                  ? "text-red-400"
                  : "text-white hover:text-red-400"
              }`}
              href="/weekly-reports"
            >
              Weekly Reports
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-red-400 origin-center transition-transform duration-300 ${
                  path === "/weekly-reports"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </a>
          </li>
          <li>
            <a
              className={`relative inline-block group transition duration-400 ease-in-out ${
                path === "/assessments"
                  ? "text-red-400"
                  : "text-white hover:text-red-400"
              }`}
              href="/assessments"
            >
              Assessments
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-red-400 origin-center transition-transform duration-300 ${
                  path === "/assessments"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </a>
          </li>
          <li>
            <a
              className={`relative inline-block group transition duration-400 ease-in-out ${
                path === "/evidences"
                  ? "text-red-400"
                  : "text-white hover:text-red-400"
              }`}
              href="/evidences"
            >
              Evidences
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-red-400 origin-center transition-transform duration-300 ${
                  path === "/evidences"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
