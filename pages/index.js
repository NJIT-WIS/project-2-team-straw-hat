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
      text: "In a recent study, students were over twice as likely to meet grade-level standards with Khan Academy. Districts across the country are partnering with us to ensure all their students succeed.",
      title: "Khan Academy boosts student learning",
      imageOnRight: false,
    },
    {
      imageURI:
        "https://cdn.kastatic.org/images/lohp/faces_collage@2x.png",
      text: "We empower teachers to support their entire classroom. 90% of US teachers who have used Khan Academy have found us effective.      ",
      title: "“I’m finally able to truly differentiate my classroom. This has been priceless for my students’ engagement.”",
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
            <SwiperSlide>
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
