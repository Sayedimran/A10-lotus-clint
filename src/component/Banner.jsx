const Banner = () => {
  return (
    <div className="carousel w-full rounded-b-lg">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.postimg.cc/2y5R2JNR/football-background-grass-with-shoes.jpg"
          className="w-full lg:h-[600px]"
          alt="Football Background"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.postimg.cc/KzS8pm0X/top-view-composition-with-neatly-arranged-organized-sport-items.jpg"
          className="w-full lg:h-[600px]"
          alt="Sports Items"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.postimg.cc/G90KH8Q7/front-view-surprised-young-female-with-basket-after-sport-shopping.jpg"
          className="w-full lg:h-[600px]"
          alt="Shopping Image"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
