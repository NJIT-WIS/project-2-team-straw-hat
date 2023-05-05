import Date from "../../components/date"
import Layout from "../../components/layout"
import Link from "next/link";
import { getSortedPostsData } from "../../lib/posts";
import styles from "./blogs.module.css"

export default function Blogs({ allPostsData }) {
    return (<Layout>
        <div className={styles.container}>
            <section className={styles.bloglistcontainer}>
                <h2 className={styles.headingLg}>Blogs</h2>
                <ul className={styles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={styles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                            <small className={styles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    </Layout>)
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}
