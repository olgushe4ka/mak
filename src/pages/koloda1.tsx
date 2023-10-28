import ImageDescriptionComponent from "../components/image-with-description/image-with-description";
import { cards1 } from "../utils/data";
import styles from "./pages-styles.module.css";
import { useState } from "react";

function Koloda1() {
  const currentCardIndex = Math.floor(Math.random() * cards1.length);
  const [currentCard, setCurrentCard] = useState(cards1[currentCardIndex]);

  const handleImageChange = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * cards1.length);
    } while (randomIndex === currentCardIndex);

    setCurrentCard(cards1[randomIndex]);
  };

  return (
    <div>
      <ImageDescriptionComponent
        photo={currentCard.photo}
        description={currentCard.description}
        onChangeImage={handleImageChange}
      />
    </div>
  );
}

export default Koloda1;
