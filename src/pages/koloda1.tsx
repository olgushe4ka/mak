import ImageDescriptionComponent from "../components/image-with-description/image-with-description";
import { getCookie, setCookie } from "../utils/cookie";
import { cards1 } from "../utils/data";
import styles from "./pages-styles.module.css";
import { useState } from "react";

function Koloda1() {
  // Устанавливаем и проверяем пароль

  const myPassword = "password";
  const expirationInMilliseconds = 24 * 60 * 60 * 1000;

  const [password, setPassword] = useState("");

  const isAuthenticatedCookie = getCookie("authenticated") === "true";
  const [isAuthenticated, setIsAuthenticated] = useState(isAuthenticatedCookie);

  const handleLogin = () => {
    if (password === myPassword) {
      setCookie("authenticated", "true", expirationInMilliseconds);
      setIsAuthenticated(true);
    }
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Предотвращаем стандартное поведение отправки формы
    handleLogin(); // Вызываем функцию аутентификации
  };

  // Колода1
  const currentCardIndex = Math.floor(Math.random() * cards1.length);
  const [currentCard, setCurrentCard] = useState(cards1[0]);
  const handleImageChange = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * cards1.length);
    } while (randomIndex === currentCardIndex);

    setCurrentCard(cards1[randomIndex]);
  };

  // Колода2
  const currentCardIndex2 = Math.floor(Math.random() * cards1.length);
  const [currentCard2, setCurrentCard2] = useState(cards1[0]);

  const handleImageChange2 = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * cards1.length);
    } while (randomIndex === currentCardIndex2);

    setCurrentCard2(cards1[randomIndex]);
  };

  return (
    <div>
      {isAuthenticated ? (
        <>
          <h2 className={styles.kolodatext}>Колода1</h2>
          <ImageDescriptionComponent
            photo={currentCard.photo}
            description={currentCard.description}
            onChangeImage={handleImageChange}
          />
          <h2 className={styles.kolodatext}>Колода2</h2>
          <ImageDescriptionComponent
            photo={currentCard2.photo}
            description={currentCard2.description}
            onChangeImage={handleImageChange2}
          />
        </>
      ) : (
        <form onSubmit={handleFormSubmit} className={styles.inputBox}>
          <input
            type="password"
            placeholder="Введите пароль"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit">Войти</button>
        </form>
      )}
    </div>
  );
}

export default Koloda1;