import { useState } from 'react';
import my from '../assets/my.jpeg';
import { Menu, X } from 'lucide-react';


export default function Navbar() {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
    const [imageOpen,setImageOpen]=useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-slate-900 text-white transition duration-300">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 sm:px-6">
                <div className="flex justify-between  h-14">
                    <div className="flex items-center space-x-2 group cursor-pointer">
                        <div>
                        <img src={my} alt="my" className="h-12 w-12 rounded-full sm:h-8 sm:w-8"
                        onClick={()=> setImageOpen(true)}
                        />
                        </div>
                     <span className="text-lg sm:text-xl md:text-2xl font-medium">
                        <span  className="font-bold text-white">Aashutosh</span>
                        <span className="text-blue-500">Adhikari</span>
                    </span>
                    </div>
                    {/*nav links*/}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#Home" className="text-sm font-medium hover:text-blue-500">Home</a>
                        <a href="#Skills" className="text-sm font-medium hover:text-blue-500">Skills</a>
                        <a href="#Contact" className="text-sm font-medium hover:text-blue-500">Contact</a>
                    </div>
                   <button className="md:hidden focus:outline-none p-2 text-gray-400 hover:text-white"
                   onClick={() => setMobileMenuIsOpen((prev) => !prev)}
                   >
                    {mobileMenuIsOpen ? (<X className="h-6 w-6 text-white sm:h-6 w-6" />) :
                    (
                     <Menu className="h-6 w-6 text-white sm:h-6 w-6" />
                    )
                    }
                     </button>
                   
                </div>
                </div>
            {mobileMenuIsOpen &&( 
                <div className="md:hidden bg-slate-900 border-t border-slate-800">
                <div className="flex flex-col ">
                     <a href="#Home" className=" text-sm font-medium hover:text-blue-500"
                     onClick={()=>setMobileMenuIsOpen(false)}>Home</a>
                        <a href="#About" className=" text-sm font-medium hover:text-blue-500"
                        onClick={()=>setMobileMenuIsOpen(false)}>About</a>
                        <a href="#Services" className=" text-sm font-medium hover:text-blue-500"
                        onClick={()=>setMobileMenuIsOpen(false)}>Services</a>
                        <a href="#Contact" className=" text-sm font-medium hover:text-blue-500"
                        onClick={()=>setMobileMenuIsOpen(false)}>Contact</a>
                </div>
                </div>
            )}
            {imageOpen && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100]"
    onClick={() => setImageOpen(false)}
  >
    <div
      className="relative"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        onClick={() => setImageOpen(false)}
        className="absolute -top-4 -right-4 bg-white text-black rounded-full p-2 hover:bg-gray-200"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Enlarged Image */}
      <img
        src={my}
        alt="Profile"
        className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-2xl"
      />
    </div>
  </div>
)}
        </nav>

    )
}