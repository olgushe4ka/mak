import styles from "./price-block.module.css";

function PriceBlock({
  title,
  steps,
  prices,
}: {
  title: string;
  steps: Array<{
    number: string;
    description: string;
    items: string[];
  }>;
  prices: { amount: string; unit?: string };
}) {
  return (
    <div className={styles.pricePage}>
      <h2 className={styles.pricePageTitle}>{title}</h2>
      {steps.map((step, index) => (
        <div key={index} className={styles.pricePageStepBox}>
          <p className={styles.pricePageNumber}>{step.number}</p>
          <h3 className={styles.pricePageStepBoxDescription}>
            {step.description}
          </h3>
          <ul className={styles.pricePageStepBoxUl}>
            {step.items.map((item, itemIndex) => (
              <li key={itemIndex} className={styles.pricePageStepBoxLi}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className={styles.pricePagePriceBox}>
        <p>Стоимость</p>
        <p className={styles.pricePagePriceBoxAmmount}>{prices.amount}</p>
        <p>{prices.unit}</p>
      </div>
    </div>
  );
}

export default PriceBlock;
