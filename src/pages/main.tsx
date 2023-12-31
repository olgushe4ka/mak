import styles from "./mainPage-styles.module.css";
import a from "../images/makcard2.jpg";

function MainPage() {
  return (
    <div className={styles.app}>
      <div className={`${styles.main}`}>
        <div className={styles.imageContainer}>
          <img
            //  src="src/images/makcard2.jpg"
            src="https://thumb.cloud.mail.ru/weblink/thumb/xw1/Z2vr/voGTfsieS"
            //   src={b}
            alt="лого8"
          />{" "}
        </div>
        <p className={`${styles.aboutusText}`}>
          {" "}
          <h2>
            Раскройте свои глубины с Метафорическими Ассоциативными Картами
            (МАК-картами)
          </h2>
          Метафорические ассоциативные карты, известные также как МАК-карты,
          представляют собой мощный инструмент, который нашел широкое применение
          в сфере психологии, коучинга и психотерапии. Эти карты состоят из
          разнообразных изображений, включая фотографии людей, животных,
          природы, и абстрактные рисунки. Не впадайте в заблуждение: МАК-карты
          никак не связаны с эзотерическими практиками или гаданием. Они
          представляют собой инструмент для разгадывания психологических
          головоломок и облегчения процесса самопознания. <br /> <br /> <br />
          <br />
        </p>
      </div>
    </div>
  );
}

export default MainPage;
