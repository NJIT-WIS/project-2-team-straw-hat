import styles from "./cookies.module.css";
import Layout from "../../components/layout";

export default function Cookies() {
  return (
    <Layout>
      <div className={styles.container}>
        <h2>What are cookies?</h2>
        <p>
          Cookies are small text files that are stored on your device when you
          browse the internet. They contain information about your visit to a
          website, such as your preferences, login details, and browsing
          history.
        </p>

        <h2>Why do we use cookies?</h2>
        <p>
          We use cookies to improve your experience on our website and to ensure
          that our website functions properly. Cookies help us remember your
          preferences and enable us to provide you with personalized content and
          services. For example, cookies help us remember your login details so
          that you don't have to enter them each time you visit our website.
        </p>

        <p>
          We also use cookies to analyze how our website is used and to
          understand how we can improve our services. We use Google Analytics, a
          popular web analytics service provided by Google, to collect
          information about how visitors use our website. This information is
          used to create reports and improve our website.
        </p>

        <h2>What types of cookies do we use?</h2>
        <p>
          We use both session cookies and persistent cookies. Session cookies
          are temporary cookies that are deleted when you close your browser.
          Persistent cookies remain on your device even after you close your
          browser and are used to remember your preferences when you return to
          our website.
        </p>

        <p>
          We also use first-party cookies, which are set by our website, and
          third-party cookies, which are set by third-party websites that
          provide services on our website, such as Google Analytics.
        </p>

        <h2>How can you manage cookies?</h2>
        <p>
          You have the right to accept or reject cookies, and to withdraw your
          consent at any time. Most web browsers allow you to manage cookies
          through their settings. You can choose to accept or reject cookies or
          to receive a notification when a cookie is placed on your device. You
          can also delete cookies that have already been placed on your device.
        </p>

        <p>
          However, please note that disabling cookies may affect your experience
          on our website and may prevent you from accessing certain features.
        </p>

        <h2>Your consent</h2>
        <p>
          By using our website, you consent to the use of cookies as described
          in this cookies page. If you do not consent to the use of cookies,
          please disable them through your browser settings or do not use our
          website.
        </p>

        <p>
          We hope that this cookies page has provided you with useful
          information. If you have any questions or concerns, please contact us
          at contact@njit.edu.
        </p>
      </div>
    </Layout>
  );
}
