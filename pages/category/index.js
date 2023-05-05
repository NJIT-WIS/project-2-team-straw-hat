import styles from "./category.module.css";
import Layout from "../../components/layout";
import Link from "next/link";

export default function Category() {
  var categories = [
    { name: "Technology", url: "https://nextjs.org/" },
    { name: "Art", url: "https://www.getty.edu/education/" },
    { name: "Business", url: "https://www.coursera.org/learn/negotiation-skills" },
    { name: "Food", url: "https://www.nutrition.gov/" },
    { name: "Finance", url: "https://online.hbs.edu/subjects/finance-accounting/?c1=GAW_SE_NW&source=US_T_FIN_ACC&cr2=search__-__nw__-__us__-__finance__AMP__accounting&kw=finance_online_course_brd&cr5=601706078857&cr7=c&hsa_cam=12707360282&hsa_grp=130075179009&hsa_mt=b&hsa_src=g&hsa_ad=601706078857&hsa_acc={792-723-8641}&hsa_net=adwords&hsa_kw=finance%20online%20course&hsa_tgt=kwd-319463501&hsa_ver=3&gad=1&gclid=Cj0KCQjw0tKiBhC6ARIsAAOXutnI5UbcUGt9CrzjY6wOmdhphbfcO4XXqvCy6IfJuM3VfcBWdl372loaAo7BEALw_wcB" }
  ];
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Categories</h1>
        <div className={styles.CategoryContainer}>
          {categories.map((item, index) => {
            return (
              <Link href={item.url} key={index}>
                <div className={styles.CategoryItem}>
                  <h4>{item.name}</h4>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
