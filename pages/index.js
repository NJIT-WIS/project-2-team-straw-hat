import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Styles from "../styles/Home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Slide from "../components/Home/slide";
import Modal from "react-modal";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      zIndex: 10,
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      zIndex: 10,
      width: "400px",
    },
  };
  var slidesData = [
    {
      imageURI:
        "https://cdn.kastatic.org/images/lohp/hero_student_collage_compressed_no_whitespace.png",
      text: "We're a nonprofit with the mission to provide a free, world-class education for anyone, anywhere.",
      title: "For every student, every classroom. Real results.",
      imageOnRight: true,
    },
    {
      imageURI: "https://cdn.kastatic.org/images/lohp/graph_collage@2x.png",
      text: "Welcome to MyWebClass! Here, you can learn anything your heart desires. Our online platform is designed to help you explore and expand your knowledge in a wide range of subjects. Whether you are a student, a professional, or just someone who wants to learn new things, we have something for you.",
      title: "Learn Anything with Our Comprehensive Resources",
      imageOnRight: false,
    },
    {
      imageURI: "https://cdn.kastatic.org/images/lohp/faces_collage@2x.png",
      text: "At MyWebClass, we believe that every child deserves the opportunity to learn and reach their full potential. That is why we have created a range of courses and resources specifically designed to help children of all ages and abilities develop their skills and knowledge in a fun and engaging way.",
      title:
        "Empowering Every Child to Succeed: Providing Top-Quality Education for All",
      imageOnRight: true,
    },
  ];

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={Styles.home}>
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          style={customStyles}
        >
          <h1>This website collects cookies</h1>
          <p>
            Cookies help us display personalized product recommendations and
            ensure you have great shopping experience
          </p>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </Modal>
        <Swiper
          style={{ zIndex: 1 }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          spaceBetween={0}
          centeredSlides={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {slidesData.map((item, index) => (
            <SwiperSlide>
              <Slide item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Layout>
  );
}
