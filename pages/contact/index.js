import styles from "./contact.module.css";
import Layout from "../../components/layout";
import Image from "next/image";

export default function Contact() {
  return (
    <Layout>
      <div className={styles.container}>
        <form>
          <label for="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />

          <label for="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label for="country">Country</label>
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>

          <label for="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style={{ height: "200px",width:"300px" }}
          ></textarea>

          <input type="submit" value="Submit" style={{ marginTop: "10px" }} />
        </form>
        <div className={styles.right}>
          <Image
            priority
            src={"https://cdn.kastatic.org/images/lohp/hero_student_collage_compressed_no_whitespace.png"}
            height={300}
            width={400}
            alt={"Hero Image"}
          />
          <p>Lorem Ipsum</p>
        </div>
      </div>
    </Layout>
  );
}
