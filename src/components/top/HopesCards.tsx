import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const HopesCard = (props:any) => {
  const [perPage, setPerPage] = useState<number>(10);
  const [perMove, setPerMove] = useState<number>(10);
  const [gap, setGap] = useState<number>(15);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setPerPage(10);
        setPerMove(10);
        setGap(12);
      } else if (window.innerWidth >= 768) {
        setPerPage(8);
        setPerMove(8);
        setGap(10);
      } else {
        setPerPage(5);
        setPerMove(5);
        setGap(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const options = {
    perPage,
    perMove,
    gap,
    type: "loop",
    pagination: false,
    arrows: true,
    rewind: true,
    classes: {
      arrow: "splide__arrow custom-arrow",
    },
  };

  return (
    <Splide options={options}>
      {props.hopes.map((hope:any) => (
        <SplideSlide key={hope.id}>
          <a href={hope.link} target="_blank" rel="noreferrer">
            <img src={hope.url} alt={hope.photographer} />
          </a>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default HopesCard;
