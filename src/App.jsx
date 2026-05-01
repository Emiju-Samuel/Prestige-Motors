import React, { useState } from "react";
import { assets } from "./assets/assets";
import { MdArrowRightAlt, MdEmail, MdOutlineEmail, MdOutlineFacebook, MdOutlinePermPhoneMsg, MdMenu, MdClose } from "react-icons/md";
import { GoShieldCheck } from "react-icons/go";
import { CiBank, CiReceipt, CiStar } from "react-icons/ci";
import { LuCircleUserRound } from "react-icons/lu";
import { FaFacebook, FaTruckLoading } from "react-icons/fa";
import { IoDiamondOutline, IoKeyOutline, IoStar } from "react-icons/io5";
import { BsArrowUpRight, BsTiktok } from "react-icons/bs";
import { GrFacebook, GrLocation } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen w-full "
      style={{ backgroundColor: "#121212" }}
    >
      <div
        className="w-full h-screen"
        style={{
          backgroundImage: `url(${assets.heroSectionBackground2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#121212",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="navbar flex flex-row items-center justify-between md:justify-between gap-10 md:gap-0 w-full px-10 md:px-10 lg:px-30 py-5 relative z-20">
          <div className="logo">
            <span className="text-gray-200 text-xl">Prestige Motors</span>
          </div>
          <div className="hidden md:flex navitems flex-row items-center gap-30 text-sm text-gray-50">
            <span className="hover:text-gray-300 cursor-pointer"><a href="#home">Home</a></span>
            <span className="hover:text-gray-300 cursor-pointer"><a href="#about">About</a></span>
            <span className="hover:text-gray-300 cursor-pointer">
              <a href="#inventory">Inventory</a>
            </span>
            <span className="hover:text-gray-300 cursor-pointer"><a href="#services">Services</a></span>
            <span className="hover:text-gray-300 cursor-pointer"><a href="#contact">Contact</a></span>
          </div>
          <button
            type="button"
            className="block md:hidden text-gray-50 p-2 rounded-md bg-white/5 hover:bg-white/10 transition-colors duration-200"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          >
            {mobileMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
        </div>

        <div className={`fixed inset-0 z-30 transition-all duration-300 ${mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
          <div
            className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0"}`}
            onClick={() => setMobileMenuOpen(false)}
          />
          <div
            className={`absolute top-0 right-0 h-full w-72 max-w-xs bg-white/10 backdrop-blur-xs shadow-2xl p-6 flex flex-col gap-6 text-gray-50 transform transition-transform duration-300 ease-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">Menu</span>
              <button
                type="button"
                className="text-gray-50 p-2 rounded-md bg-white/5 hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <MdClose size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-5 text-lg">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="hover:text-gray-300">Home</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-gray-300">About</a>
              <a href="#inventory" onClick={() => setMobileMenuOpen(false)} className="hover:text-gray-300">Inventory</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-gray-300">Services</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-gray-300">Contact</a>
            </nav>
          </div>
        </div>

        <div id="home" className="heroSectionContent items-center justify-center flex flex-col gap-20 md:gap-10 w-full h-full text-center">
          <div className="flex flex-col items-center gap-10">
            <span
              className="text-4xl xl:text-6xl font-bold bg-gradient-to-r from-gray-400 to-gray-100 bg-clip-text text-transparent lg:px-0 px-8"
            >
              Drive Your Dream Car Today
            </span>
            <span className="lg:px-0 px-2 text-base text-gray-200">
              Premium quality vehicles, unbeatable prices, and flexible
              financing, all in one place
            </span>
          </div>
          <div className="buttons mt-10 flex flex-row items-center gap-3 md:gap-10 px-2 md:px-0">
            <button className="group flex flex-row items-center gap-2 px-4 md:px-6 py-2.5 text-gray-50 font-medium bg-white/10 backdrop-blur-xs border border-white/20 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-white/20 hover:border-white/30 hover:scale-105 active:scale-9">
              <span><a href="#inventory">Browse Cars</a></span>
              <MdArrowRightAlt className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button className="group flex flex-row items-center gap-2 px-4 md:px-6 py-2.5 text-gray-50 font-medium bg-white/10 backdrop-blur-xs border border-white/20 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-white/20 hover:border-white/30 hover:scale-105 active:scale-9">
              <span><a href="#contact">Book a Test Drive</a></span>
              <MdArrowRightAlt className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      <div id="about" className="xl:px-30 lg:px-25 px-3 mt-30 flex flex-col items-center justify-center gap-20 w-full h-full">
        <div className="upper flex flex-col gap-5 justify-center items-center text-center">
          <span
            className="text-4xl font-bold bg-gradient-to-r from-gray-400 to-gray-100 bg-clip-text text-transparent"
          >
            Who we Are
          </span>
          <span className="text-gray-200 text-sm w-4/5 font-light">
            At Prestige Motors, we’re more than just a car dealership, we’re
            your trusted partner in finding the perfect vehicle. With years of
            experience in the automotive industry, we pride ourselves on
            offering high-quality vehicles, transparent pricing, and exceptional
            customer service. Our inventory is carefully curated to meet
            different lifestyles and budgets, ensuring every customer drives
            away satisfied.
          </span>
        </div>

        <div className="lower flex flex-col xl:flex-row justify-center items-center gap-10 xl:gap-30 w-full h-full">
          <div className="flex">
            <img
              src={assets.supraImage}
              alt=""
              className="w-sm h-auto"
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div className="flex flex-col gap-10 items-start">
            <div className="flex flex-row gap-3 text-lg items-center">
              <GoShieldCheck className="text-amber-200 stroke-[1.5]" />
              <span className="text-gray-200 font-light">
                Certified & inspected vehicles
              </span>
            </div>
            <div className="flex flex-row gap-3 text-lg items-center">
              <CiReceipt className="text-amber-200 stroke-[1.5]" />
              <span className="text-gray-200 font-light">
                Transparent pricing (no hidden charges)
              </span>
            </div>
            <div className="flex flex-row gap-3 text-lg items-center">
              <LuCircleUserRound className="text-amber-200 stroke-[1.5]" />
              <span className="text-gray-200 font-light">
                Customer-first approach
              </span>
            </div>
            <div className="flex flex-row gap-3 text-lg items-center">
              <FaTruckLoading className="text-amber-200 stroke-[1.5]" />
              <span className="text-gray-200 font-light">
                Nationwide delivery available
              </span>
            </div>
          </div>
        </div>
      </div>

      <div id="inventory" className="flex flex-col justify-center items-center gap-10 w-full h-full mt-20 lg:mt-10 p-5 xl:p-30">
        <div>
          <span className="text-4xl font-bold bg-gradient-to-r from-gray-500 to-gray-100 bg-clip-text text-transparent" >Featured Vehicles</span>
        </div>
        {/* cards */}
        <div className="grid xl:grid-cols-3 grid-cols-1 gap-5 xl:gap-20 mt-5 lg:mt-10 items-stretch">
          {/* card */}
          <div className="flex flex-col gap-3 w-full h-full bg-white/5 backdrop-blur-xs border border-white/20 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-white/7 hover:border-white/30 hover:scale-105">
            <div className="overflow-hidden rounded-t-lg">
              <img src={assets.corvette} alt="" className="w-full h-56 object-cover" />
            </div>
            <div className="content flex flex-col gap-8 items-center py-5 px-8 flex-1">
              <div className="flex flex-row items-center w-full justify-between">
                <div className="flex flex-col gap-0.5 items-start"><span className="text-xs text-gray-600">2020</span><span className="text-sm text-gray-50">Corvette C6</span></div>
                <span className="text-sm text-amber-200">$80,000</span>
              </div>
              <div className="flex flex-row justify-between w-full gap-5 items-center">
                <div className="flex flex-col gap-0.5 items-center"><span className="text-xs text-gray-600">0-100</span><span className="text-xs text-gray-50">3.5s</span></div>
                <div><span className="border-1 border-r-gray-400 h-5"></span></div>
                <div className="flex flex-col gap-0.5 items-center"><span className="text-xs text-gray-600">ENGINE</span><span className="text-xs text-gray-50">V6 TT</span></div>
                <div><span className="border-1 border-r-gray-400"></span></div>
                <div className="flex flex-col gap-0.5 items-center"><span className="text-xs text-gray-600">TOP SPEED</span><span className="text-xs text-gray-50">340km/h</span></div>
              </div>
            </div>
          </div>

          {/* card */}
          <div className="flex flex-col gap-3 w-full h-full bg-white/5 backdrop-blur-xs border border-white/20 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-white/7 hover:border-white/30 hover:scale-105">
            <div className="overflow-hidden rounded-t-lg">
              <img src={assets.supraImage} alt="" className="w-full h-56 object-cover" />
            </div>
            <div className="content flex flex-col gap-8 items-center py-5 px-8 flex-1">
              <div className="flex flex-row items-center w-full justify-between">
                <div className="flex flex-col gap-0.5 items-start"><span className="text-xs text-gray-600">2024</span><span className="text-sm text-gray-50">Toyota Supra</span></div>
                <span className="text-sm text-amber-200">$90,000</span>
              </div>
              <div className="flex flex-row justify-between w-full gap-5 items-center">
                <div className="flex flex-col gap-0.5 items-center"><span className="text-xs text-gray-600">0-100</span><span className="text-xs text-gray-50">2.9s</span></div>
                <div><span className="border-1 border-r-gray-400 h-5"></span></div>
                <div className="flex flex-col gap-0.5 items-center"><span className="text-xs text-gray-600">ENGINE</span><span className="text-xs text-gray-50">V6 TT</span></div>
                <div><span className="border-1 border-r-gray-400"></span></div>
                <div className="flex flex-col gap-0.5 items-center"><span className="text-xs text-gray-600">TOP SPEED</span><span className="text-xs text-gray-50">310km/h</span></div>
              </div>
            </div>
          </div>

          {/* card */}
          <div className="flex flex-col gap-3 w-full h-full bg-white/5 backdrop-blur-xs border border-white/20 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-white/7 hover:border-white/30 hover:scale-105 active:scale-9">
            <div className="overflow-hidden rounded-t-lg">
              <img src={assets.BMW} alt="" className="w-full h-56 object-cover" />
            </div>
            <div className="content flex flex-col gap-8 items-center py-5 px-8 flex-1">
              <div className="flex flex-row items-center w-full justify-between">
                <div className="flex flex-col gap-0.5 items-start"><span className="text-xs text-gray-600">2023</span><span className="text-sm text-gray-50">BMW M8</span></div>
                <span className="text-sm text-amber-200">$95,000</span>
              </div>
              <div className="flex flex-row justify-between w-full gap-5 items-center">
                <div className="flex flex-col gap-0.5 items-center"><span className="text-xs text-gray-600">0-100</span><span className="text-xs text-gray-50">3.2s</span></div>
                <div><span className="border-1 border-r-gray-400 h-5"></span></div>
                <div className="flex flex-col gap-0.5 items-center"><span className="text-xs text-gray-600">ENGINE</span><span className="text-xs text-gray-50">V6 TT</span></div>
                <div><span className="border-1 border-r-gray-400"></span></div>
                <div className="flex flex-col gap-0.5 items-center"><span className="text-xs text-gray-600">TOP SPEED</span><span className="text-xs text-gray-50">300km/h</span></div>
              </div>
            </div>
          </div>

          {/* card */}
          <div className="flex flex-col gap-3 w-full h-full bg-white/5 backdrop-blur-xs border border-white/20 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-white/7 hover:border-white/30 hover:scale-105">
            <div className="overflow-hidden rounded-t-lg">
              <img src={assets.Cadillac} alt="" className="w-full h-56 object-cover" />
            </div>
            <div className="content flex flex-col gap-8 items-center py-5 px-8 flex-1">
              <div className="flex flex-row items-center w-full justify-between">
                <div className="flex flex-col gap-0.5 items-start"><span className="text-xs text-gray-600">2023</span><span className="text-sm text-gray-50">Cadillac CT5</span></div>
                <span className="text-sm text-amber-200">$83,000</span>
              </div>
              <div className="flex flex-row justify-between w-full gap-5 items-center">
                <div className="flex flex-col gap-0.5 items-center"><span className="text-xs text-gray-600">0-100</span><span className="text-xs text-gray-50">3.5s</span></div>
                <div><span className="border-1 border-r-gray-400 h-5"></span></div>
                <div className="flex flex-col gap-0.5 items-center"><span className="text-xs text-gray-600">ENGINE</span><span className="text-xs text-gray-50">V6 TT</span></div>
                <div><span className="border-1 border-r-gray-400"></span></div>
                <div className="flex flex-col gap-0.5 items-center"><span className="text-xs text-gray-600">TOP SPEED</span><span className="text-xs text-gray-50">290km/h</span></div>
              </div>
            </div>
          </div>

          {/* card */}
          <div className="flex flex-col gap-3 w-full h-full bg-white/5 backdrop-blur-xs border border-white/20 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-white/7 hover:border-white/30 hover:scale-105">
            <div className="overflow-hidden rounded-t-lg">
              <img src={assets.corvetteC8} alt="" className="w-full h-56 object-cover" />
            </div>
            <div className="content flex flex-col gap-8 items-center py-5 px-8 flex-1">
              <div className="flex flex-row items-center w-full justify-between">
                <div className="flex flex-col gap-0.5 items-start"><span className="text-xs text-gray-600">2024</span><span className="text-sm text-gray-50">Corvette C8</span></div>
                <span className="text-sm text-amber-200">$120,000</span>
              </div>
              <div className="flex flex-row justify-between w-full gap-5 items-center">
                <div className="flex flex-col gap-0.5 items-center"><span className="text-xs text-gray-600">0-100</span><span className="text-xs text-gray-50">2.8s</span></div>
                <div><span className="border-1 border-r-gray-400 h-5"></span></div>
                <div className="flex flex-col gap-0.5 items-center"><span className="text-xs text-gray-600">ENGINE</span><span className="text-xs text-gray-50">V8 TT</span></div>
                <div><span className="border-1 border-r-gray-400"></span></div>
                <div className="flex flex-col gap-0.5 items-center"><span className="text-xs text-gray-600">TOP SPEED</span><span className="text-xs text-gray-50">330km/h</span></div>
              </div>
            </div>
          </div>

          {/* card */}
          <div className="flex flex-col gap-3 w-full h-full bg-white/5 backdrop-blur-xs border border-white/20 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-white/7 hover:border-white/30 hover:scale-105">
            <div className="overflow-hidden rounded-t-lg">
              <img src={assets.porshecayenne} alt="" className="w-full h-56 object-cover" />
            </div>
            <div className="content flex flex-col gap-8 items-center py-5 px-8 flex-1">
              <div className="flex flex-row items-center w-full justify-between">
                <div className="flex flex-col gap-0.5 items-start"><span className="text-xs text-gray-600">2024</span><span className="text-sm text-gray-50">Porshe Cayenne</span></div>
                <span className="text-sm text-amber-200">$150,000</span>
              </div>
              <div className="flex flex-row justify-between w-full gap-5 items-center">
                <div className="flex flex-col gap-0.5 items-center"><span className="text-xs text-gray-600">0-100</span><span className="text-xs text-gray-50">3.6s</span></div>
                <div><span className="border-1 border-r-gray-400 h-5"></span></div>
                <div className="flex flex-col gap-0.5 items-center"><span className="text-xs text-gray-600">ENGINE</span><span className="text-xs text-gray-50">V6 TT</span></div>
                <div><span className="border-1 border-r-gray-400"></span></div>
                <div className="flex flex-col gap-0.5 items-center"><span className="text-xs text-gray-600">TOP SPEED</span><span className="text-xs text-gray-50">270km/h</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="flex flex-col gap-20 mt-20 lg:mt-10 px-7 lg:px-20 xl:px-40 pb-10 lg:pb-20 xl:pb-30 w-full h-full">
        <div><span className="text-3xl font-bold bg-gradient-to-r from-gray-500 to-gray-100 bg-clip-text text-transparent">Why Choose Prestige Motors?</span></div>
        <div className="flex xl:flex-row flex-col xl:gap-20 gap-10 w-full h-full items-center justify-center">
          <div><img src={assets.benz} alt="" className="w-lg"/></div>
          <div className="flex flex-col items-start gap-10">
            <div className="flex flex-col gap-1 items-start">
              <div className="flex flex-row gap-2 items-center text-amber-200 text-base"><IoKeyOutline className="stroke-[1.5]"/><span>Wide Selection</span></div>
              <div><span className="text-xs text-gray-400">Explore a diverse range of vehicles from economy to luxury, all in one place.</span></div>
            </div>

            <div className="flex flex-col gap-1 items-start">
              <div className="flex flex-row gap-2 items-center text-amber-200 text-base"><IoDiamondOutline className="stroke-[1.5]"/><span>Quality Assurance</span></div>
              <div><span className="text-xs text-gray-400">Every car undergoes a thorough inspection to ensure reliability and performance.</span></div>
            </div>

            <div className="flex flex-col gap-1 items-start">
              <div className="flex flex-row gap-2 items-center text-amber-200 text-base"><CiBank className="stroke-[1.5]"/><span>Flexible Financing</span></div>
              <div><span className="text-xs text-gray-400">We offer tailored payment plans to suit your budget and needs.</span></div>
            </div>

            <div className="flex flex-col gap-1 items-start">
              <div className="flex flex-row gap-2 items-center text-amber-200 text-base"><CiStar className="stroke-[1.5]" /><span>Trusted Service</span></div>
              <div><span className="text-xs text-gray-400">Our team is dedicated to providing honest advice and exceptional customer experience.</span></div>
            </div>

          </div>
        </div>
      </div>



      <div id="services" className="flex flex-col items-center justify-center gap-7 xl:gap-15 w-full h-full px-5 lg:px-20 xl:px-40 mt-10 pb-10 lg:pb-20 xl:pb-30">
        <div><span className="text-4xl font-bold bg-gradient-to-r from-gray-500 to-gray-100 bg-clip-text text-transparent">Our Services</span></div>
        <div className="grid xl:grid-cols-3 grid-cols-1 gap-5 xl:gap-15 w-full h-full">
          <div className="flex flex-col gap-5 items-center bg-white/5 backdrop-blur-xs border border-white/20 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-white/7 hover:border-white/30 hover:scale-105 p-5">
            <div><img src={assets.carSalesImage} alt="" /></div>
            <div className="flex flex-col gap-2 items-start">
              <span className="text-amber-200 text-base">Car Sales</span>
              <span className="text-gray-400 text-xs leading-5">Explore an exquisite collection of both brand-new and certified pre-owned vehicles, meticulously curated to offer unmatched performance and luxury at the most competitive market valuations</span>
            </div>
          </div>

          <div className="flex flex-col gap-5 items-center bg-white/5 backdrop-blur-xs border border-white/20 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-white/7 hover:border-white/30 hover:scale-105 p-5">
            <div><img src={assets.tradeInImage} alt="" /></div>
            <div className="flex flex-col gap-2 items-start">
              <span className="text-amber-200 text-base">Trade-In Services</span>
              <span className="text-gray-400 text-xs leading-5">Experience a seamless transition to your next masterpiece with our transparent appraisal process, designed to provide maximum value for your current vehicle while simplifying your upgrade journey</span>
            </div>
          </div>

          <div className="flex flex-col gap-5 items-center bg-white/5 backdrop-blur-xs border border-white/20 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-white/7 hover:border-white/30 hover:scale-105 p-5">
            <div><img src={assets.carFinancingImage} alt="" /></div>
            <div className="flex flex-col gap-2 items-start">
              <span className="text-amber-200 text-base">Car Financing</span>
              <span className="text-gray-400 text-xs leading-5">Navigate your purchase with confidence through our bespoke financial solutions, offering highly flexible payment structures and competitive rates tailored specifically to your unique capital requirements</span>
            </div>
          </div>

          <div className="flex flex-col gap-5 items-center bg-white/5 backdrop-blur-xs border border-white/20 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-white/7 hover:border-white/30 hover:scale-105 p-5">
            <div><img src={assets.vehicleInspectionImage} alt="" /></div>
            <div className="flex flex-col gap-2 items-start">
              <span className="text-amber-200 text-base">Vehicle Inspection</span>
              <span className="text-gray-400 text-xs leading-5">Our master technicians conduct rigorous, multi-point diagnostic assessments and aesthetic evaluations to ensure every vehicle meets our uncompromising standards of reliability and mechanical excellence</span>
            </div>
          </div>

          <div className="flex flex-col gap-5 items-center bg-white/5 backdrop-blur-xs border border-white/20 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-white/7 hover:border-white/30 hover:scale-105 p-5">
            <div><img src={assets.afterSalesSupportImage} alt="" /></div>
            <div className="flex flex-col gap-2 items-start">
              <span className="text-amber-200 text-base">After-Sales Support</span>
              <span className="text-gray-400 text-xs leading-5">Commitment to our clients extends far beyond the showroom, encompassing precision maintenance, genuine parts procurement, and a dedicated concierge team for all your ongoing automotive needs</span>
            </div>
          </div>

          <div className="flex flex-col gap-5 items-center bg-white/5 backdrop-blur-xs border border-white/20 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-white/7 hover:border-white/30 hover:scale-105 p-5">
            <div><img src={assets.bespokeCustomizationImage} alt="" /></div>
            <div className="flex flex-col gap-2 items-start">
              <span className="text-amber-200 text-base">Bespoke Customization</span>
              <span className="text-gray-400 text-xs leading-5">Transform your vehicle into a personal statement with our exclusive customization suite, offering high-end detailing, performance enhancements, and tailored interior refinements to suit your individual style</span>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-col mt-10 xl-px-0 px-7 items-center justify-center gap-3 lg:gap-10">
        <div><span className="text-3xl xl:text-4xl font-bold bg-gradient-to-r from-gray-500 to-gray-100 bg-clip-text text-transparent">What Our Clients Are Saying</span></div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-20 xl:gap-15 items-center w-full h-full mt-10 px-2 lg:px-20 xl:px-40 pb-10 lg:pb-20 xl:pb-30">
        <div className="flex flex-col items-start gap-5">
          <div className="flex flex-row gap-1.5 text-amber-200"><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></div>
          <div><span className="text-gray-400 text-xs">“I had an amazing experience buying my car here. The process was smooth and transparent from start to finish.”</span></div>
          <div className="flex flex-row w-full"><span className="border border-gray-800 w-3/5"></span></div>
          <div><span className="text-gray-300 text-sm">— James Anderson</span></div>
        </div>

        <div className="flex flex-col items-start gap-5">
          <div className="flex flex-row gap-1.5 text-amber-200"><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></div>
          <div><span className="text-gray-400 text-xs">“Great customer service and quality vehicles. I highly recommend them to anyone looking for a reliable car.”</span></div>
          <div className="flex flex-row w-full"><span className="border border-gray-800 w-3/5"></span></div>
          <div><span className="text-gray-300 text-sm">— Chioma K</span></div>
        </div>

        <div className="flex flex-col items-start gap-5">
          <div className="flex flex-row gap-1.5 text-amber-200"><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></div>
          <div><span className="text-gray-400 text-xs">“They helped me find the perfect car within my budget. Very professional and trustworthy team.”</span></div>
          <div className="flex flex-row w-full"><span className="border border-gray-800 w-3/5"></span></div>
          <div><span className="text-gray-300 text-sm">— David O</span></div>
        </div>
      </div>
      </div>


      <div id="contact" className="w-full h-full mt-15 lg:mt-10"
        style={{
          backgroundImage: `url(${assets.heroSectionBackground2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#121212",
          backgroundBlendMode: "overlay",
        }}>
          <div className="flex flex-col xl:flex-row xl:items-end justify-center items-center gap-10 xl:px-50 px-5 py-20 xl:py-30 w-full h-full">
            <div className="flex flex-col items-center xl:items-start gap-10">
              <div><span className="text-4xl font-bold bg-gradient-to-r from-gray-500 to-gray-100 bg-clip-text text-transparent">Get In Touch</span></div>
              <div className="flex flex-col gap-5 items-center">
                <div className="flex flex-row w-full gap-20 xl:gap-60 justify-between items-center px-5 py-3 bg-white/5 backdrop-blur-xs border border-white/20 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-white/7 hover:border-white/30 hover:scale-105">
                  <div className="flex flex-row items-center gap-5">
                    <div className="p-2 bg-white/5 backdrop-blur-xs border border-white/20 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-white/7 hover:border-white/30 hover:scale-105"><MdOutlineEmail className="text-base text-amber-200"/></div>
                    <div className="flex flex-col items-start gap-0.5"><span className="text-sm text-gray-300">Email</span><span className="text-xs text-gray-400">prestigemotors@email.com</span></div>
                  </div>
                  <div className="p-2 bg-white/5 backdrop-blur-xs border border-white/20 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-white/7 hover:border-white/30 hover:scale-105"><BsArrowUpRight className="text-gray-300 text-xs"/></div>
                </div>

                <div className="flex flex-row w-full gap-20 xl:gap-60 justify-between items-center px-5 py-3 bg-white/5 backdrop-blur-xs border border-white/20 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-white/7 hover:border-white/30 hover:scale-105">
                  <div className="flex flex-row items-center gap-5">
                    <div className="p-2 bg-white/5 backdrop-blur-xs border border-white/20 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-white/7 hover:border-white/30 hover:scale-105"><MdOutlinePermPhoneMsg className="text-base text-amber-200"/></div>
                    <div className="flex flex-col items-start gap-0.5"><span className="text-sm text-gray-300">Phone</span><span className="text-xs text-gray-400">+234 800 123 4567</span></div>
                  </div>
                  <div className="p-2 bg-white/5 backdrop-blur-xs border border-white/20 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-white/7 hover:border-white/30 hover:scale-105"><BsArrowUpRight className="text-gray-300 text-xs"/></div>
                </div>

                <div className="flex flex-row w-full gap-20 xl:gap-40 justify-between items-center px-5 py-3 bg-white/5 backdrop-blur-xs border border-white/20 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-white/7 hover:border-white/30 hover:scale-105">
                  <div className="flex flex-row items-center gap-5">
                    <div className="p-2 bg-white/5 backdrop-blur-xs border border-white/20 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-white/7 hover:border-white/30 hover:scale-105"><GrLocation className="text-base text-amber-200"/></div>
                    <div className="flex flex-col items-start gap-0.5"><span className="text-sm text-gray-300">Address</span><span className="text-xs text-gray-400">123 Auto Lane, Lagos, Nigeria</span></div>
                  </div>
                  <div className="p-2 bg-white/5 backdrop-blur-xs border border-white/20 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-white/7 hover:border-white/30 hover:scale-105"><BsArrowUpRight className="text-gray-300 text-xs"/></div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <form>
                <div className="flex flex-col gap-2.5 items-start w-full p-1.5 bg-white/5 backdrop-blur-xs border border-white/20 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
                  <input type="text" placeholder="Name" className="w-full px-4 py-4 bg-white/5 backdrop-blur-xs border border-white/20 rounded-lg shadow-lg transition-all duration-300 ease-in-out text-gray-100 text-xs"/>
                  <input type="email" placeholder="Email" className="w-full px-4 py-4 bg-white/5 backdrop-blur-xs border border-white/20 rounded-lg shadow-lg transition-all duration-300 ease-in-out text-gray-100 text-xs"/>
                  <textarea placeholder="Message" className="w-full px-4 py-4 bg-white/5 backdrop-blur-xs border border-white/20 rounded-lg shadow-lg transition-all duration-300 ease-in-out text-gray-100 text-xs resize-none h-70"></textarea>
                  <button className="group w-full flex flex-row items-center justify-center gap-2 px-6 py-4.5 font-semibold bg-gray-200 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-101">
                    <span className="text-xs text-gray-900">Submit</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>


        <div className="flex flex-col gap-10 lg:gap-20 w-full h-full mt-5 lg:mt-10 py-10 justify-start xl:items-center items-start xl:justify-center px-7 lg:px-20 xl:px-40">
          <div className="flex flex-col xl:flex-row gap-10 xl:justify-between items-start xl:items-center w-full h-full">
            <div className="flex flex-col gap-1"><span className="text-base text-gray-200 font-semibold">Prestige Motors</span><span className="text-gray-400 text-xs">Driven by quality, powered by trust</span></div>
            <div className="flex flex-col xl:flex-row xl:gap-20 gap-5 text-sm text-gray-300">
              <span className="cursor-pointer transition-all duration-300 ease-in-out hover:text-amber-200"><a href="#home">Home</a></span>
              <span className="cursor-pointer transition-all duration-300 ease-in-out hover:text-amber-200"><a href="#inventory">Inventory</a></span>
              <span className="cursor-pointer transition-all duration-300 ease-in-out hover:text-amber-200"><a href="#services">Services</a></span>
              <span className="cursor-pointer transition-all duration-300 ease-in-out hover:text-amber-200"><a href="#contact">Contact</a></span>
            </div>
            <div className="flex flex-row gap-5 text-gray-300">
              <MdOutlineFacebook />
              <AiOutlineInstagram />
              <BsTiktok />
            </div>
          </div>
          <hr className="w-6/7 text-gray-800"/>
          <div className="text-amber-200 text-xs"><span>© 2026 Prestige Motors. All rights reserved.</span></div>
        </div>
    </div>
  );
};

export default App;
