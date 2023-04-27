import Styles from "./slide.module.css";
import Image from "next/image";

export default function Slide({ item }) {
  return (
    <div
      className={`${Styles.slide} ${item.imageOnRight ? Styles.slide_rev : ""}`}
    >
      <div className={Styles.left}>
        <Image
          priority
          src={item.imageURI}
          height={108}
          width={108}
          alt={"Hero Image"}
        />
      </div>
      <div className={Styles.right}>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
    </div>
  );
}
