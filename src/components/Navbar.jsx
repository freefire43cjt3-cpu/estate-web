import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaBuilding,
  FaSearch,
  FaHeart,
  FaMoon,
  FaChevronDown,
  FaHome,
  FaCity,
  FaKey,
  FaUsers,
  FaQuestionCircle,
} from "react-icons/fa";

import "../assets/styles/Navbar.css";


function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  const [liked, setLiked] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  const [propertyDrop, setPropertyDrop] = useState(false);
  const [companyDrop, setCompanyDrop] = useState(false);


  useEffect(() => {

    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);


  useEffect(() => {

    if(darkMode){
      document.body.classList.add("dark");
    }else{
      document.body.classList.remove("dark");
    }

  },[darkMode]);


  const closeMenu = () => {
    setMenuOpen(false);
    setPropertyDrop(false);
    setCompanyDrop(false);
  };


  return (

    <header className={scroll ? "navbar active" : "navbar"}>

      <div className="container">


        {/* Logo */}

        <a href="#home" className="logo">

          <FaBuilding className="logo-icon"/>

          <span>
            LuxeEstate
          </span>

        </a>



        {/* Navigation */}

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>


          <a href="#home" onClick={closeMenu}>
            Home
          </a>



          {/* Properties Dropdown */}

          <div 
          className="dropdown"
          onClick={() => setPropertyDrop(!propertyDrop)}
          >

            <span className="drop-title">
              Properties
              <FaChevronDown/>
            </span>


            <div 
            className={
              propertyDrop 
              ? "dropdown-menu show" 
              : "dropdown-menu"
            }
            >

              <a href="#allproperties">
                <FaHome/>
                All Properties
              </a>

              <a href="#apartments">
                <FaCity/>
                Apartments
              </a>

              <a href="#luxury-villas">
                <FaKey/>
                Luxury Villas
              </a>

              <a href="#properties">
                Commercial
              </a>


            </div>


          </div>





          <a href="#stats" onClick={closeMenu}>
            Stats
          </a>



          <a href="#agents" onClick={closeMenu}>
            Agents
          </a>





          {/* Company Dropdown */}


          <div 
          className="dropdown"
          onClick={() => setCompanyDrop(!companyDrop)}
          >

            <span className="drop-title">
              Company
              <FaChevronDown/>
            </span>


            <div 
            className={
              companyDrop
              ? "dropdown-menu show"
              : "dropdown-menu"
            }
            >

              <a href="#about">
                About Us
              </a>

              <a href="#agents">
                <FaUsers/>
                Our Agents
              </a>

              <a href="#testimonials">
                Testimonials
              </a>

              <a href="#faq">
                <FaQuestionCircle/>
                FAQ
              </a>


            </div>


          </div>




          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>



        </nav>





        {/* Right Side */}

        <div className="right-side">


          {/* Search */}

          <button
          className="icon"
          onClick={()=>setShowSearch(!showSearch)}
          >

            <FaSearch/>

          </button>



          {
            showSearch && (

              <input

              className="search-input"

              type="text"

              placeholder="Search properties..."

              value={search}

              onChange={(e)=>setSearch(e.target.value)}

              />

            )
          }






          {/* Favourite */}

          <button
          className={`icon ${liked ? "liked" : ""}`}
          onClick={()=>setLiked(!liked)}
          >

            <FaHeart/>

          </button>





          {/* Dark Mode */}

          <button
          className="icon"
          onClick={()=>setDarkMode(!darkMode)}
          >

            <FaMoon/>

          </button>





          {/* Buttons */}

          <button className="login">
            Sign In
          </button>


          <button className="cta">
            List Property
          </button>





          {/* Mobile Button */}

          <button
          className="menu-btn"
          onClick={()=>setMenuOpen(!menuOpen)}
          >

            {
              menuOpen
              ?
              <FaTimes/>
              :
              <FaBars/>
            }

          </button>



        </div>


      </div>


    </header>

  );

}


export default Navbar;