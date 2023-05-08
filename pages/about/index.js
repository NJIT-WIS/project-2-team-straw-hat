import Image from "next/image";
import Layout from "../../components/layout";
import styles from "./about.module.css";

export default function About() {
  return (
    <Layout>
      <div class={styles.container}>
        <div class="row">
          <main class="col-md-9 ms-sm-auto col-lg-9 px-md-4">
            <h1 class="fw-bold border-bottom" id="title">
              About Us
            </h1>
            <section class="row">
              <p>
                MyWebClass.org is a progressive organization that aims to
                revolutionize education by integrating Agile and Lean principles
                into the classroom. The goal is to cultivate creativity,
                adaptability, collaboration, and a lifelong learning mindset
                among students, preparing them for the fast-paced, AI-driven
                world we live in today. The team at MyWebClass.org is passionate
                and experienced, committed to developing innovative approaches
                to education that are inclusive, accessible, and effective. The
                organization's ultimate aim is to create a better future for
                students and communities through education.
              </p>
            </section>
            <div className={styles.donateNowButton}>
                <p>If you support our cause please donate and subcribe to our newletter below in the footer section.</p>
              <span>Donate now</span>
            </div>
            <h1 class="fw-bold border-bottom" id="title">
              The Team
            </h1>
            <section class="row">
              <p>
                At MyWebClass.org, we have a team of dedicated and experienced
                individuals who are passionate about making a positive impact on
                the world. We firmly believe that education is the cornerstone
                of unlocking the potential of individuals and communities.
                That's why we continuously work hard to develop creative,
                accessible, and effective approaches to education that are
                inclusive for everyone. Our mission is to revolutionize
                education and build a better future for our students and the
                world. We invite you to join us on this journey to create a
                brighter tomorrow for generations to come.
              </p>
              <div className={styles.teamImagesContainer}>
              <div className={styles.teamImageContainer}>
                  <Image
                    priority
                    src={"https://njit-wis.github.io/project-2-team-straw-hat/keith.jpeg"}
                    height={240}
                    width={240}
                    className={styles.teamImage}
                    alt={"Hero Image"}
                  />
                  <h4>Keith Williams</h4>
                  <p>Instructor</p>
                </div>
                <div className={styles.teamImageContainer}>
                  <Image
                    priority
                    src={"https://njit-wis.github.io/project-2-team-straw-hat/pushti.jpg"}
                    height={240}
                    width={240}
                    className={styles.teamImage}
                    alt={"Hero Image"}
                  />
                  <h4>Pushti Shah</h4>
                  <p>Developer</p>
                </div>
                <div className={styles.teamImageContainer}>
                  <Image
                    priority
                    src={"https://njit-wis.github.io/project-2-team-straw-hat/preet.jpeg"}
                    height={240}
                    width={240}
                    object-fit="contain"
                    className={styles.teamImage}
                    alt={"Hero Image"}
                  />
                  <h4>Preet Patel</h4>
                  <p>Developer</p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </Layout>
  );
}
