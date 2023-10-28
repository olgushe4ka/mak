import styles from "./mainPage-styles.module.css";

function MainPage() {
  return (
    <div className={styles.app}>
      <div className={`${styles.main}`}>
        <div className={styles.imageContainer}>
          <img
            src={"https://s120vlx.storage.yandex.net/rdisk/bed3c6012d13dcbc4b1ae4a57d37954faf9c53784c7445ecbaeedee787722045/653d6aac/83T559gpby_WQZIEdFh8bq5vnTqMwkhxcSySME0eD6xFosJNQU59sO7s1BusaZmphUmpbukMgpHuF373z2PxwQ==?uid=704432166&filename=makcard.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=704432166&fsize=22156&hid=356e8915f3b03b7249d63b6829e2866b&media_type=image&tknv=v2&etag=dd1a13c8b08312f7512e240c0c037097&rtoken=3ydI352D4Col&force_default=yes&ycrid=na-0bcce13669dea29c34aed17d57e1dc0a-downloader4f&ts=608cc64ef0300&s=e374d5b1cbb51d8023c4aca7e321a2ce9326c6eeb9fc61add5e5b7d45ec6cf66&pb=U2FsdGVkX1-apTQ_0eceJ6N7qkUFFiC4enXqyo-4_LbMPvdjssThYcIRDwKAA5DjECRKP9RSGwG3UaRq2ex7jVyfXjkbPHqUNsKJ_2GsDT0"}
            alt="logo"
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
