import style from "../carousel.module.css";
import { useEffect, useRef, useState } from "react";
function Carousel({ props }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideRef = useRef(null);

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }
  const moveRight = () => {
    if (currentSlide >= 8) {
      const sp = async () => {
        slideRef.current.style.transition = "0ms";
        slideRef.current.style.transform = `translateX(-80vw)`;
      };
      setCurrentSlide(1);
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };
  const moveLeft = () => {
    if (currentSlide === 1) setCurrentSlide(9);
    //0으로 넘기고 transition 0s로 9로 넘김
    else setCurrentSlide((prev) => prev - 1);
  };
  useEffect(() => {
    if (currentSlide < 9) {
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(${-87 * currentSlide}vw)`;
    }
    console.log(currentSlide);
  }, [currentSlide]);

  const loop = useInterval(moveRight, 2000);

  return (
    <div className={style.swiperContainer}>
      <div ref={slideRef} className={style.swiperInner}>
        {props.map((item, idx) => (
          <div className={style.item} key={idx} index={idx}>
            <div>
              <img src={item[0]} alt="" />
            </div>
            <div className={style.subInfo}>
              <h2>{item[1]}</h2>
              <h3>{item[2]}</h3>
              <hr />
              <a href="/">
                <span>
                  바로가기{" "}
                  <svg width="14" height="14" viewBox="0 0 18 18">
                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Carousel;
