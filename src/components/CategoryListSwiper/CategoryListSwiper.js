import CategoryItem from "./CategoryItem/CategoryItem";
import "./CategoryListSwiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

function CategoryListSwiper({ categories }) {
  const categoryItems = categories.map((category) => (
    <SwiperSlide key={category.categoryId}>
      <CategoryItem key={category.categoryId} category={category} />
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        effect={"coverflow"}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {categoryItems}
      </Swiper>
    </>
  );
}

export default CategoryListSwiper;
