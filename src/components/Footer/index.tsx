import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./footer.module.scss";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons/faSquareFacebook";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <h3 className={styles.footer_title}>Stay Connected</h3>
        <div className={styles.contact_details}>
          <div className={styles.email}>
            <span>Mail me at</span>
            <span>ReenaMehta@gmail.com</span>
          </div>
          <div className={styles.social_icons}>
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faSquareFacebook} />
            <FontAwesomeIcon icon={faYoutube} />
          </div>
        </div>
        <ul className={styles.legal_details}>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
