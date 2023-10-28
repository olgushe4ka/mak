import styles from "./image-with-description.module.css";
import image from "../../images/cards1/cards1 (1).jpeg";

function ImageDescriptionComponent({
  photo,
  description,
  onChangeImage,
}: {
  photo: string;
  description: string;
  onChangeImage: () => void;
}) {
  console.log(photo);
  console.log(`${photo}`);

  return (
    <div className={styles.imageDescriptionContainer}>
      <div className={styles.imageContainer}>
        <img src={require(`../../${photo}`)} alt="Image" onClick={onChangeImage} />
      </div>
      <div className={styles.descriptionContainer}>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ImageDescriptionComponent;
