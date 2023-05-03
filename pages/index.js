import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Styles from "../styles/Home.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Slide from "../components/Home/slide";

export default function Home({ allPostsData }) {
  var slidesData = [
    {
      imageURI:
        "https://cdn.kastatic.org/images/lohp/hero_student_collage_compressed_no_whitespace.png",
      text: "We’re a nonprofit with the mission to provide a free, world-class education for anyone, anywhere.",
      title: "For every student, every classroom. Real results.",
      imageOnRight: true,
    },
    {
      imageURI:
        "https://cdn.kastatic.org/images/lohp/graph_collage@2x.png",
      text: "Welcome to MyWebClass! Here, you can learn anything your heart desires. Our online platform is designed to help you explore and expand your knowledge in a wide range of subjects. Whether you are a student, a professional, or just someone who wants to learn new things, we have something for you.",
      title: "Learn Anything with Our Comprehensive Resources",
      imageOnRight: false,
    },
    {
      imageURI:
        "https://cdn.kastatic.org/images/lohp/faces_collage@2x.png",
      text: "At MyWebClass, we believe that every child deserves the opportunity to learn and reach their full potential. That is why we have created a range of courses and resources specifically designed to help children of all ages and abilities develop their skills and knowledge in a fun and engaging way.",
      title: "Empowering Every Child to Succeed: Providing Top-Quality Education for All",
      imageOnRight: true,
    },
  ];

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={Styles.home}>
        <Swiper
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
            <SwiperSlide key={index}>
              <Slide item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section> */}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
