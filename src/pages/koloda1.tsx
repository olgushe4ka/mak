import ImageDescriptionComponent from "../components/image-with-description/image-with-description";
import { cards1 } from "../utils/data";
import styles from "./pages-styles.module.css";
import { useState } from "react";

function Koloda1() {
  const randomIndex = Math.floor(Math.random() * cards1.length);

  const [currentCard, setCurrentCard] = useState(cards1[randomIndex]);

  const handleImageChange = () => {
    const randomIndex = Math.floor(Math.random() * cards1.length);
    setCurrentCard(cards1[randomIndex]);
  };

  return (
    <div >
      <ImageDescriptionComponent
        photo={currentCard.photo}
        description={currentCard.description}
        onChangeImage={handleImageChange}
      />
    </div>
  );
}

export default Koloda1;