import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Slider from "react-slick";
import Cards from "./card";
import { useState, useEffect } from "react";

function Freebook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getbook = async () => {
      try {
        const res = await axios.get("https://libraryhub-jywl.onrender.com/book");
        
        const data = res.data.filter((data) => data.categry === "Free");
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getbook();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1280, 
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl mx-auto md:px-20 px-4 py-10">
      {/* Header */}
      <div className="mb-6 text-left">
        <h1 className="font-bold text-2xl mb-2 pb-2 text-pink-500">
          Free Accessible Courses
        </h1>
        <p className="text-base ">
          Discover your next favorite book, explore new genres, and join our
          community of readers. Dive into a curated collection of books,
          journals, and educational tools.
        </p>
      </div>

      {/* Slider */}
      <div className="slider-container">
        <Slider {...settings}>
          {book.map((item) => (
            <div key={item.id} className="px-3"> {/* adds spacing between cards */}
              <Cards item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
