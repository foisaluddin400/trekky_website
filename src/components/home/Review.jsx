import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import profile from "../../assets/Home/re.jpg";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { MdStar } from "react-icons/md";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

// import img1 from "../../assets/home/user1.png";
// import img2 from "../../assets/home/user2.png";
// import img3 from "../../assets/home/user3.png";

const Review = () => {
  const category = [
    {
      // img: img1,
      title: "Guy Hawkins",
      location: "Financial Advisor",
      review:
        "“Super smooth experience listing my business — found a serious buyer in just two weeks!”",
      img: profile,
    },
    {
      // img: img2,
      title: "Theresa Webb",
      location: "Chief Executive Officer.",
      review:
        "“Highly recommend BFS! It made the complex process of selling my business feel effortless.”",
      img: profile,
    },
    {
      // img: img3,
      title: "Arlene McCoy",
      location: "Certified Financial Planner",
      review:
        "“The platform is easy to use, professional, and helped me close a great deal fast.”",
      img: profile,
    },
    {
      // img: img1,
      title: "Earings",
      location: "New York, USA",
      review:
        "I was looking for the perfect engagement ring, and this website exceeded all my expectations! The craftsmanship is stunning, and the diamond sparkles beautifully. My fiancée absolutely loves it, and I couldn’t be happier with my purchase!",
      img: profile,
    },
    {
      // img: img2,
      title: "Necklaces",
      location: "New York, USA",
      review:
        "I was looking for the perfect engagement ring, and this website exceeded all my expectations! The craftsmanship is stunning, and the diamond sparkles beautifully. My fiancée absolutely loves it, and I couldn’t be happier with my purchase!",
      img: profile,
    },
    {
      // img: img3,
      title: "Rings",
      location: "New York, USA",
      review:
        "I was looking for the perfect engagement ring, and this website exceeded all my expectations! The craftsmanship is stunning, and the diamond sparkles beautifully. My fiancée absolutely loves it, and I couldn’t be happier with my purchase!",
      img: profile,
    },
  ];

  const splideRef = useRef(null);

  const handlePrevClick = () => {
    if (splideRef.current) {
      splideRef.current.splide.go("<");
    }
  };

  const handleNextClick = () => {
    if (splideRef.current) {
      splideRef.current.splide.go(">");
    }
  };

  return (
    <div className="container m-auto mt-11">
      <div>
        <h1 className="text-[#F9B038] text-2xl">Customer Testimonials</h1>
        <p className="text-[#F9B038]">
          "Don’t just take our word for it—hear directly from our users! Our
          customers love how RV LIFE Maintenance helps them stay organized and
          keep their RVs running smoothly. Check out their experiences below.
        </p>
      </div>
      <div className="mb-16 mt-6 bg-[#F9B038] p-11">
        <div className="">
         <div>
             <div className=" w-full">
            <Splide
              ref={splideRef}
              options={{
                type: "loop",
                perPage: 3,
                gap: "1rem",
                arrows: false,
                pagination: false,
                breakpoints: {
                  1724: { perPage: 3 },
                  968: { perPage: 2 },
                  640: { perPage: 1 },
                },
              }}
              aria-label="Category Slide"
              className="w-full"
            >
              {category.map((item, index) => (
                <SplideSlide key={index}>
                  <div className="shadow-lg bg-[#FFFFFF]  p-4 py-8">
                    <div className=" flex pb-3 text-yellow-500">
                      <MdStar />
                      <MdStar />
                      <MdStar />
                      <MdStar />
                      <MdStar />
                      <p className="-mt-1 pl-2">(4.5)</p>
                    </div>

                    <p className="text-sm mt-1">{item.review}</p>
                    <div className="flex items-center gap-4 mt-5">
                      <div className="">
                        <img
                          className="rounded-full w-[70px] object-cover"
                          src={item.img}
                          alt={item.title}
                        />
                      </div>
                      <div>
                        <h1 className=" ">{item.title}</h1>
                        <h2 className=" ">{item.location}</h2>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>

          <div className="flex gap-3 justify-center ">
            <div
              className=" bg-white p-2 rounded-full text-[#F9B038]"
              onClick={handlePrevClick}
            >
              <div className="rounded-full text-2xl  cursor-pointer">
                <HiArrowNarrowLeft />
              </div>
            </div>

            <div
              className=" bg-white p-2 rounded-full text-[#F9B038] "
              onClick={handleNextClick}
            >
              <div className="rounded-full text-2xl  cursor-pointer">
                <HiArrowNarrowRight />
              </div>
            </div>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
