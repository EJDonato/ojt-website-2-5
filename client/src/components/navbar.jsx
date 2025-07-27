import logo from "../assets/inspire_logo.png";

function Navbar() {
  const path = window.location.pathname;
  return (
    <nav className="relative flex justify-between bg-gradient-to-bl from-black to-[rgb(100, 21, 21)] shadow-xl shadow-black/60 text-white z-20 sticky top-0 xl:flex-row sm: flex-col">
      <div className="flex items-center justify-center gap-5 p-4 ">
        <img className="shadow-lg shadow-black/30 w-20" src={logo} alt="Logo" />
        <p className="font-bold text-xl">2-5 Portfolio</p>
      </div>
      <div className="flex items-center justify-around p-4 xl:pr-16 sm: pr-4">
        <ul className="flex font-bold text-center gap-15 xl:text-lg sm:text-sm ">
          <li className="sm: flex-1 xl:flex-none">
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
          <li className="sm: flex-1 xl:flex-none">
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
          <li className="sm: flex-1 xl:flex-none">
            <a
              className={`relative inline-block group transition duration-400 ease-in-out ${
                path === "/student-profiles"
                  ? "text-red-400"
                  : "text-white hover:text-red-400"
              }`}
              href="/student-profiles"
            >
              Student Profiles
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-red-400 origin-center transition-transform duration-300 ${
                  path === "/student-profiles"
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
