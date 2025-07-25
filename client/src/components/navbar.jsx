import logo from '../assets/inspire_logo.png';

function Navbar() {
    return (
        <nav className='flex justify-between bg-gradient-to-bl from-black to-rgb(100, 21, 21) shadow-xl shadow-black/30 text-white'>
            <div className='flex items-center gap-5 p-4 pl-15'>
                <img className="w-15 shadow-lg shadow-black/30" src={logo} alt="Logo" />
                <p className='font-bold text-xl'>2-5 Portfolio</p>
            </div>
            <div className='flex items-center p-4 pr-16'>
                <ul className='flex text-lg font-bold gap-15'>
                    <li className=''><a className='relative inline-block text-white group hover:text-red-400 transition duration-400 ease-in-out' href="/">Home<span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-400 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300"></span></a></li>
                    <li className=''><a className='relative inline-block text-white group hover:text-red-400 transition duration-400 ease-in-out' href="/company-profiles">Company Profiles<span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-400 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300"></span></a></li>
                    <li className=''><a className='relative inline-block text-white group hover:text-red-400 transition duration-400 ease-in-out' href="/weekly-reports">Weekly Reports<span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-400 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300"></span></a></li>
                    <li className=''><a className='relative inline-block text-white group hover:text-red-400 transition duration-400 ease-in-out' href="/assessments">Assessments<span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-400 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300"></span></a></li>
                    <li className=''><a className='relative inline-block text-white group hover:text-red-400 transition duration-400 ease-in-out' href="/evidences">Evidences<span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-400 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300"></span></a></li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;