import { languages } from "../constants";
import styles from "../style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Clients = () => {
  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className="mx-6 my-4">
      <Slider {...settings}>
        {languages.map((client) => (
          <div key={client.id} className={`mx-auto sm:min-w-[110px] min-w-[100px] m-5`}>
            <img src={client.logo} alt="languages_logo" className="mx-auto sm:w-[80px] w-[50px] object-contain icon-gray" />
            <p className={`iconnames text-center ${styles.flexCenter}`}>{client.name}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Clients;
