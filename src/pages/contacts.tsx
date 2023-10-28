import styles from "./pages-styles.module.css";
import {
  FaInstagram,
  FaWhatsapp,
  FaTelegram,
  FaPhone,
  FaMailBulk,
} from "react-icons/fa";

function Contacnts() {
  return (
    <>
      <div className={`${styles.contactpage} `}>
        {" "}
        <div>
          <h2 className={styles.contactpageH2}>Контакты</h2>
          <div className={styles.contactpageLocation}>
            <strong>город Казань</strong>
          </div>

          <div>
            <strong>Телефон:</strong>
            <a className={styles.contactpageContacts} href="tel:+79033883601">
              &nbsp; +7 903 388 36 01
            </a>
          </div>
          <br />
          <br />
          <div>
            <strong>Свяжитесь с нами:</strong>
            <p>
              <a className={styles.contactpageContacts} href="tel:+79033883601">
                <FaPhone /> Позвонить
              </a>
            </p>
            <p>
              <a
                className={styles.contactpageContacts}
                href="mailto:ljinterior@mail.ru"
              >
                <FaMailBulk /> E-mail
              </a>
            </p>
            <p>
              <a
                className={styles.contactpageContacts}
                href="https://www.instagram.com/ljinterior/"
              >
                <FaInstagram /> Instagram
              </a>
              <br /> <br />
              <a
                className={styles.contactpageContacts}
                href="https://wa.me/79033883601?text=Я%20хочу%20в%20узнать%20про%20дизайн%20интерьера"
              >
                <FaWhatsapp /> WhatsApp
              </a>
              <br /> <br />
              <a
                className={styles.contactpageContacts}
                href="https://t.me/LJinterior"
              >
                <FaTelegram /> Telegram
              </a>
            </p>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default Contacnts;
