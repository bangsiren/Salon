import React from "react";
import Image from "next/image";
import styles from './Products.module.css'
import firstImg from '../../assets/images/firstProducts.jpeg'
import sectionImg from '../../assets/images/secondProducts.png';
import thirdImg from '../../assets/images/thirdProducts.jpg'
import fouth from '../../assets/images/fouthImg.png';
import fifth from '../../assets/images/img7.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const data = [
  {
    id: 1,
    title: "Bakala ",
    info: "This is looking  good grap",
    img: thirdImg,
  },

  {
    id: 2,
    title: "Bakala ",
    info: "This is looking  good grap",
    img: sectionImg,
  },
  {
    id: 3,
    title: "Bakala ",
    info: "This is looking  good grap",
    img: thirdImg,
  },
  {
    id: 4,
    title: "Bakala ",
    info: "This is looking  good grap",
    img: fouth,
  },
  {
    id: 4,
    title: "Bakala ",
    info: "This is looking  good grap ",
    img: sectionImg,
  }

];
function Products({ img, title, info, price }) {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const carouselParams = {
    additionalTransfrom: 0,
    arrows: true,
    autoPlaySpeed: 1000,
    centerMode: false,
    className: "",
    containerClass: "carousel-container",
    dotListClass: "name",
    draggable: true,
    focusOnSelect: true,
    infinite: false,
    itemClass: "",
    minimumTouchDrag: 50,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    sliderClass: "",
    slidesToSlide: 1,
    swipeable: true,
    showDots: true,
    ssr: true,
    keyBoardControl: true,
    customTransition: "all .9s",
    transitionDuration: 500,
  };

  return (

    <Carousel {...carouselParams}>

      {
        data.map((item) => (
          <div className={styles.menuCart} key={item.sliderClass}>
            <div className={styles.prouctImgBox}> <Image src={item.img} /> </div>
            <h3 className={styles.menuCartTitle}>{item.title}</h3>
            <p className={styles.menuCartDescription}>{item.info}</p>
            <div className={styles.ourMenuCartBtnBox}>
              <button className={styles.addToCardBtn}>Get suggested Time</button>
            </div>
          </div>
        ))
      }
    </Carousel>

  );
}

export default Products; 