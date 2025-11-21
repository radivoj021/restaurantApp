import "./Header.css";
import { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const myElementRef = useRef(null);
  const upperHeader1 = useRef(null);
  const upperHeader2 = useRef(null);

  useEffect(() => {
    // 1️⃣ — odmah proveri poziciju elementa kada se komponenta učita
    if (myElementRef.current) {
      const rect = myElementRef.current.getBoundingClientRect();
      console.log("Pozicija od vrha viewporta:", rect.top);

      const yPosition = rect.top + window.scrollY;
      console.log("Pozicija od vrha stranice:", yPosition);
    }

    // 2️⃣ — dodaj scroll listener
    const handleScroll = () => {
      const scrollY = window.scrollY;

        const rect = myElementRef.current.getBoundingClientRect();
        const yPosition = rect.top + window.scrollY;
       /*  console.log("📍 Pozicija elementa od vrha stranice:", yPosition); */

      if (scrollY >= 50) {
        /* console.log("🔥 Skrolovao si više od 50px"); */
        upperHeader1.current.classList.remove("upper1ColorBack");
        upperHeader1.current.classList.add("upper1ColorChange");

        upperHeader2.current.classList.remove("upper1ColorChange");
        upperHeader2.current.classList.add("upper1ColorBack");

        upperHeader1.current.classList.add("upper1Hidden");


      } else {
        /* console.log("⬆️ Skrol ispod 50px"); */
        upperHeader1.current.classList.remove("upper1ColorBack");
        upperHeader1.current.classList.add("upper1ColorChange");

        setInterval(upperHeader2.current.classList.remove("upper1ColorBack"), 3000);
        upperHeader2.current.classList.add("upper1ColorChange");

        upperHeader1.current.classList.remove("upper1Hidden");
        upperHeader1.current.classList.add(".moveDown")
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 3️⃣ — ukloni listener kad se komponenta ugasi
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="upperHeader"
        
      >
        <div 
          className="upperHeaderX"
          id="upperHeader1"
          ref={upperHeader1}
          >
          {/* Hello upper */}
        </div>
        <div 
          className="upperHeaderX" 
          id="upperHeader2"
          ref={upperHeader2}
        >
          {/* Hello downer */}
        </div>
      </div>

      <div className="header">
        <div className="container">
          <div className="mainTitle">
            <p className="mainTitleBig">Order your food</p>
            <p className="mainTitleBig">Contact Us</p>
            <p className="mainTitleSmall">We are waiting for you</p>
          </div>
        </div>
      </div>

      <div
        className="containerApp"
        ref={myElementRef}
        style={{
          backgroundImage: 'url("/images/body_image.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      ></div>

      
    </div>
  );
};

export default Header;
