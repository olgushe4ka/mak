import SliderMain from "../components/slider/slider";
import styles from "./mainPage-styles.module.css";

function MainPage() {
  return (
    <div className={styles.app}>
      <div className={`${styles.main}`}>
        <div className={styles.imageContainer}>
          <img src={require("../images/makcard.jpg")} alt="logo" />{" "}
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
