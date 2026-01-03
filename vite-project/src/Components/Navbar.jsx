import React, { useState } from 'react';
import { PiUserCircleGear } from "react-icons/pi";
import { CgMenuGridO } from "react-icons/cg";
import { TbMenu3, TbLocation } from "react-icons/tb";
import { 
  Search, 
  MapPin, 
  ShoppingCart, 
  ChevronDown,
  ChevronRight,
  Store,
  X,              
  Settings,       
  LayoutGrid,     
  Handshake,      
  UserPlus,       
  Building2,      
  Phone,          
  MessageCircle   
} from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Cakes', icon: <LayoutGrid className="w-5 h-5" />, hasDropdown: true },
    { name: 'Flowers', icon: <LayoutGrid className="w-5 h-5" />, hasDropdown: true },
    { name: 'Decorations', icon: <LayoutGrid className="w-5 h-5" />, hasDropdown: true },
    { name: 'Gifts', icon: <LayoutGrid className="w-5 h-5" />, hasDropdown: true },
    { name: 'Experience', icon: <LayoutGrid className="w-5 h-5" />, hasDropdown: true },
    { name: 'Wedding', icon: <LayoutGrid className="w-5 h-5" />, hasDropdown: true },
    { name: 'Plants', icon: <Handshake className="w-5 h-5" />, hasDropdown: false },
    { name: 'Home Decor', icon: <Handshake className="w-5 h-5" />, hasDropdown: false },
    { name: 'Personalized', icon: <Handshake className="w-5 h-5" />, hasDropdown: false },
    { name: 'Blog', icon: <Handshake className="w-5 h-5" />, hasDropdown: false },
  ];

  return (
    <nav className="w-full bg-white font-sans relative z-40 shadow-sm">
      
      {/* --- TOP BAR SECTION --- */}
      <div className="max-w-7xl container mx-auto px-4 py-2 lg:py-3 border-b border-gray-200 lg:border-none">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* LEFT SECTION */}
          <div className="flex items-center justify-between w-full lg:w-auto gap-4 xl:gap-13">

            {/* MOBILE MENU – LEFT (mobile only) */}
            <div className='flex space-x-3'>
              <button
                className="lg:hidden text-gray-600"
                onClick={() => setIsMobileMenuOpen(true)} 
              >
                <TbMenu3 className="w-6 h-6" />
              </button>

              {/* LOGO */}
              <div className="flex items-center gap-2 ">
                <a href="/" className="flex-shrink-0">
                  <img
                    src="https://giftlaya.com/logo/christmasLogo.png"
                    alt="Giftlaya"
                    className="h-14 lg:h-16 object-contain"
                  />
                </a>
              </div>
            </div>

            
            <div className="hidden lg:flex items-center gap-2 text-sm text-gray-700">
              <MapPin className="w-6 h-6 text-gray-600" strokeWidth={1.5} />
              <div className="leading-tight flex flex-col">
                <span className="font-bold text-gray-900 text-xs">Bareilly</span>
                <div className="flex items-center gap-1 cursor-pointer hover:text-red-600 group">
                  <span className="text-md font-bold text-red-600">Uttar Pradesh</span>
                  <ChevronDown className="w-3 h-3 text-gray-500 group-hover:text-red-600" />
                </div>
              </div>
            </div>

            {/* MOBILE RIGHT ICONS */}
            <div className="flex items-center gap-4 lg:hidden">
              <Search className="w-5 h-5 text-gray-600" />
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  0
                </span>
              </div>
            </div>

          </div>

          {/* CENTER SECTION: Search Bar */}
          <div className="hidden lg:flex flex-grow justify-center px-8 min-w-0">
            <div className="relative w-full max-w-xl">
              <input 
                type="text" 
                placeholder='Search "Cakes"' 
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:border-red-300 focus:ring-2 focus:ring-red-50 transition-all shadow-sm"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-red-500 transition-colors" />
            </div>
          </div>

          {/* RIGHT SECTION: Actions */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          
            <div className="relative group cursor-pointer">
              <span className="absolute -top-3 right-0 bg-[#54794e] text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow-sm z-10 tracking-wide">
                Register
              </span>
              <div className="flex items-center gap-2 border border-[#54794e] text-[#54794e] px-4 py-2 rounded-lg hover:bg-green-50 transition-colors">
                <Store className="w-5 h-5" />
                <span className="font-bold text-sm">Sell with Us</span>
              </div>
            </div>

            {/* Icon Links */}
            <div className="flex items-center gap-6 text-gray-600">
              <a href="#" className="flex flex-col items-center group">
                <div className="p-1 rounded-full">
                    <PiUserCircleGear className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-semibold ">Login</span>
              </a>

              <a href="#" className="flex flex-col items-center group relative">
                <div className="relative p-1 rounded-full ">
                  <ShoppingCart className="w-6 h-6" strokeWidth={1.5} />
                  <span className="absolute -top-0.5 -right-0.5 bg-red-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">
                    0
                  </span>
                </div>
                <span className="text-sm font-semibold">Cart</span>
              </a>

              <a href="#" className="flex flex-col items-center group">
                <div className="p-1 rounded-full ">
                    <CgMenuGridO className="w-6 h-6" strokeWidth={0.5} />
                </div>
                <span className="text-sm font-semibold">More</span>
              </a>
            </div>
          </div>
        </div>
      </div>


      {/* --- MOBILE SPECIFIC LOCATION BAR --- */}
      <div className="lg:hidden px-4 pb-3 pt-0">
        <div className="flex items-center w-full gap-3 cursor-pointer">
            <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                <TbLocation  className="w-5 h-5 text-gray-500 fill-gray-500/20" />
            </div>
            <div className="flex items-center gap-2">
                <span className="text-[#8B4513] font-bold text-sm whitespace-nowrap">Choose Your City</span>
                <span className="bg-[#FFF5EE] text-[#8B4513] text-xs font-semibold px-2 py-1 rounded">Not Selected</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400 ml-auto" />
        </div>
      </div>

      {/* --- BOTTOM NAVIGATION BAR (Desktop) --- */}
      <div className="hidden lg:block border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <ul className="flex items-center justify-center space-x-8 py-3">
            {navItems.map((item, index) => (
              <li key={index} className="group relative cursor-pointer hover:underline">
                <a href="#" className={`flex items-center gap-1 text-[15px] font-medium tracking-wide transition-colors ${item.hasDropdown ? "text-gray-700 " : "text-gray-700 hover:text-red-700"}`}>
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 transition-colors" strokeWidth={2.5} />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY (Full Screen Drawer) --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col h-[100dvh] overflow-y-auto animate-in slide-in-from-left duration-200">
          
        
          <div className="p-4 bg-linear-to-b from-red-100 to-white flex items-start justify-between">
            <div className="flex items-center gap-3">
                
                <div className="w-12 h-12 rounded-full bg-[#A05244] flex items-center justify-center text-white text-xl font-medium">
                    U
                </div>
              
                <div>
                    <div className="flex items-center gap-1.5">
                        <span className="font-bold text-lg text-gray-800">User</span>
                        <Settings className="w-4 h-4 text-gray-400" />
                    </div>
                    <span className="text-sm text-gray-500">Login is pending</span>
                </div>
            </div>
          
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-1">
                <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          
          <div className="flex-1 pb-6">
            <ul className="flex flex-col gap- px-3 mt-2">
                {navItems.map((item, index) => (
                    <li key={index} className="border-b border-gray-50 last:border-none">
                        <a href="#" className="flex items-center justify-between px-4 py-4 border border-gray-100 bg-white rounded-xl shadow-sm text-gray-700 hover:bg-gray-50 active:scale-[0.98] transition-all">
                            <div className="flex items-center gap-3">
                                <span className="text-gray-500">{item.icon}</span>
                                <span className="font-medium text-[15px]">{item.name}</span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                        </a>
                    </li>
                ))}
            </ul>

          
            <div className="mt-2 flex flex-col">
        
                <a href="#" className="flex items-center justify-between px-5 py-3 bg-[#FFF9E5]">
                    <div className="flex items-center gap-3">
                        <Store className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-700 text-[15px]">Sell with Us</span>
                    </div>
                    <span className="text-[#F59E0B] font-bold text-sm">Join Now</span>
                </a>

                
                <a href="#" className="flex items-center justify-between px-5 py-3.5 hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                        <UserPlus className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-700 text-[15px]">Register as Vendor</span>
                    </div>
                    <span className="text-[#B91C1C] font-bold text-sm">Join Now</span>
                </a>

                
                <a href="#" className="flex items-center justify-between px-5 py-3.5 hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                        <Building2 className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-700 text-[15px]">Get a Franchise</span>
                    </div>
                    <span className="text-[#E11D48] font-bold text-sm">Join Now</span>
                </a>


                <a href="#" className="flex items-center justify-between px-5 py-3.5 hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-700 text-[15px]">Call Us</span>
                    </div>
                    <span className="text-[#3B82F6] font-bold text-sm">10AM - 7:30PM</span>
                </a>

                
                <a href="#" className="flex items-center justify-between px-5 py-3.5 hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                        <MessageCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 text-[15px]">Whatsapp Us</span>
                    </div>
                    <span className="text-[#22C55E] font-bold text-sm">Available 24x7</span>
                </a>

            </div>
          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;