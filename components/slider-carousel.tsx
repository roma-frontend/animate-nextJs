import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const sliderImageUrl = [
  {
    url: "/mercedes.webp",
  },
  {
    url: "/bmw.webp",
  },

  {
    url: "/toyota.webp",
  },

  {
    url: "/kia.webp",
  },
];

const Slider = () => {
  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        swipeable={true}
        showDots={true}
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass="container-with-dots"
        draggable={false}
        focusOnSelect={false}
        infinite={true}
        pauseOnHover
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 319,
            },
            items: 1,
          },
        }}
        slidesToSlide={1}
        className="group"
      >
        {sliderImageUrl.map((url, index) => {
          return (
            <div className="w-full" key={index}>
              <Image
                src={url.url}
                priority
                alt="product image"
                width={400}
                height={400}
                className="object-cover h-[400px] mb-[.5rem] transition-all ease-linear group-hover:mb-[1.5rem] group-hover:scale-[1.1]"
              />
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default Slider;
