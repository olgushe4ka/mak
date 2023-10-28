import styles from "./pages-styles.module.css";

function Price() {
  return (
    <>
      <div className={`${styles.main} `}>
        <div>
          <div className={styles.pricePage}>
            <h2 className={styles.pricePageTitle}>ПОЛНЫЙ ДИЗАЙН-ПРОЕКТ</h2>
            <div className={styles.pricePageStepBox}>
              <p className={styles.pricePageNumber}>01</p>{" "}
              <h3 className={styles.pricePageStepBoxDescription}>
                СОЗДАНИЕ ТЗ, ОБМЕР
              </h3>
              <ul className={styles.pricePageStepBoxUl}>
                <li className={styles.pricePageStepBoxLi}>
                  Анкетирование, просмотр референсов, переработка анкеты в ТЗ
                </li>
                <li className={styles.pricePageStepBoxLi}>
                  Замеры помещения и сбор информации, обмерный план
                </li>
              </ul>
            </div>
            <div className={styles.pricePageStepBox}>
              <p className={styles.pricePageNumber}>02</p>{" "}
              <h3 className={styles.pricePageStepBoxDescription}>
                ПРОЕКТИРОВАНИЕ ПРОСТРАНСТВА, КОЛЛАЖИ
              </h3>
              <ul className={styles.pricePageStepBoxUl}>
                <li className={styles.pricePageStepBoxLi}>
                  Разработка планировки на плоскости
                </li>
                <li className={styles.pricePageStepBoxLi}>
                  Разработка концептуальных коллажей помещений
                </li>
              </ul>
            </div>
            <div className={styles.pricePageStepBox}>
              <p className={styles.pricePageNumber}>03</p>{" "}
              <h3 className={styles.pricePageStepBoxDescription}>
                ВИЗУАЛИЗАЦИИ
              </h3>
              <ul className={styles.pricePageStepBoxUl}>
                <li className={styles.pricePageStepBoxLi}>
                  Визуализации каждого помещения
                </li>
              </ul>
            </div>
            <div className={styles.pricePageStepBox}>
              <p className={styles.pricePageNumber}>04</p>{" "}
              <h3 className={styles.pricePageStepBoxDescription}>
                СХЕМЫ РЕАЛИЗАЦИИ, КОМПЛЕКТАЦИЯ
              </h3>
              <ul className={styles.pricePageStepBoxUl}>
                <li className={styles.pricePageStepBoxLi}>
                  Полный комплект чертежей для реализации проекта + чертежи
                  мебели
                </li>
                <li className={styles.pricePageStepBoxLi}>
                  Разработка файла комплектации (сводные ведомости)
                </li>
              </ul>
            </div>
            <div className={styles.pricePagePriceBox}>
              <p>Стоимость </p>{" "}
              <p className={styles.pricePagePriceBoxAmmount}> 2000 руб</p>{" "}
              <p>/кв.м.</p>
            </div>
          </div>

          <div className={styles.pricePage}>
            <h2 className={styles.pricePageTitle}>
              КОНЦЕПТУАЛЬНЫЙ ДИЗАЙН-ПРОЕКТ
            </h2>
            <div className={styles.pricePageStepBox}>
              <p className={styles.pricePageNumber}>01</p>{" "}
              <h3 className={styles.pricePageStepBoxDescription}>
                СОЗДАНИЕ ТЗ, ОБМЕР
              </h3>
              <ul className={styles.pricePageStepBoxUl}>
                <li className={styles.pricePageStepBoxLi}>
                  Анкетирование, просмотр референсов, переработка анкеты в ТЗ
                </li>
                <li className={styles.pricePageStepBoxLi}>
                  Замеры помещения и сбор информации, обмерный план
                </li>
              </ul>
            </div>
            <div className={styles.pricePageStepBox}>
              <p className={styles.pricePageNumber}>02</p>{" "}
              <h3 className={styles.pricePageStepBoxDescription}>
                ПРОЕКТИРОВАНИЕ ПРОСТРАНСТВА
              </h3>
              <ul className={styles.pricePageStepBoxUl}>
                <li className={styles.pricePageStepBoxLi}>
                  Разработка планировки на плоскости
                </li>
              </ul>
            </div>
            <div className={styles.pricePageStepBox}>
              <p className={styles.pricePageNumber}>03</p>{" "}
              <h3 className={styles.pricePageStepBoxDescription}>КОЛЛАЖИ</h3>
              <ul className={styles.pricePageStepBoxUl}>
                <li className={styles.pricePageStepBoxLi}>
                  Разработка концептуальных коллажей
                </li>
              </ul>
            </div>
            <div className={styles.pricePageStepBox}>
              <p className={styles.pricePageNumber}>04</p>{" "}
              <h3 className={styles.pricePageStepBoxDescription}>
                СХЕМЫ РЕАЛИЗАЦИИ
              </h3>
              <ul className={styles.pricePageStepBoxUl}>
                <li className={styles.pricePageStepBoxLi}>
                  Полный комплект чертежей для реализации проекта
                </li>
              </ul>
            </div>
            <div className={styles.pricePagePriceBox}>
              <p>Стоимость </p>{" "}
              <p className={styles.pricePagePriceBoxAmmount}> 1600 руб</p>{" "}
              <p>/кв.м.</p>
            </div>
          </div>

          <div className={styles.pricePage}>
            <h2 className={styles.pricePageTitle}>
              РАЗРАБОТКА ДИЗАЙН-ПРОЕКТА ОТДЕЛЬНЫХ ПОМЕЩЕНИЙ:
            </h2>
            <p>(Разрабатывается полностью дистанционно)</p>
            <div
              className={`${styles.pricePageStepBox} ${styles.pricePageStepBoxPomesheniya}`}
            >
              <h3 className={styles.pricePageStepBoxDescription}>
                ПОЛНЫЙ ДИЗАЙН-ПРОЕКТ
              </h3>
              <ul className={styles.pricePageStepBoxUl}>
                <li className={styles.pricePageStepBoxLi}>
                  Создание ТЗ / Обмерный план
                </li>
                <li className={styles.pricePageStepBoxLi}>
                  Проектирование пространства
                </li>
                <li className={styles.pricePageStepBoxLi}>Коллажи</li>
                <li className={styles.pricePageStepBoxLi}>Визуализации</li>
                <li className={styles.pricePageStepBoxLi}>
                  Полный пакет строительных чертежей
                </li>
                <li className={styles.pricePageStepBoxLi}>Чертежи мебели</li>
                <li className={styles.pricePageStepBoxLi}>Комплектация</li>
              </ul>
            </div>

            <div className={styles.leftside}>
              <div
                className={`${styles.pricePagePriceBox} ${styles.pricePagePriceBox2} `}
              >
                <p> Стоимость отдельного помещения площадью: </p>{" "}
              </div>
              <div
                className={`${styles.pricePagePriceBox} ${styles.pricePagePriceBox2} `}
              >
                <p>до 5 кв.м.</p>{" "}
                <p className={styles.pricePagePriceBoxAmmount}> 25 000 руб</p>{" "}
              </div>
              <div
                className={`${styles.pricePagePriceBox} ${styles.pricePagePriceBox2} `}
              >
                <p>от 5 - 15 кв.м.</p>{" "}
                <p className={styles.pricePagePriceBoxAmmount}> 40 000 руб</p>{" "}
              </div>
              <div
                className={`${styles.pricePagePriceBox} ${styles.pricePagePriceBox2} `}
              >
                <p>от 15 - 30 кв.м.</p>{" "}
                <p className={styles.pricePagePriceBoxAmmount}> 60 000 руб</p>{" "}
              </div>
              <div
                className={`${styles.pricePagePriceBox} ${styles.pricePagePriceBox2} `}
              >
                <p>от 30 кв.м.</p>{" "}
                <p className={styles.pricePagePriceBoxAmmount}>
                  {" "}
                  2 000 руб / м2
                </p>{" "}
              </div>
            </div>

            <div className={` ${styles.lineUp}`}></div>
            <div
              className={`${styles.pricePageStepBox} ${styles.pricePageStepBoxPomesheniya} `}
            >
              <h3 className={styles.pricePageStepBoxDescription}>
                КОНЦЕПТУАЛЬНЫЙ ДИЗАЙН-ПРОЕКТ
              </h3>
              <ul className={styles.pricePageStepBoxUl}>
                <li className={styles.pricePageStepBoxLi}>
                  Создание ТЗ / Обмерный план
                </li>
                <li className={styles.pricePageStepBoxLi}>
                  Проектирование пространства
                </li>
                <li className={styles.pricePageStepBoxLi}>Коллажи</li>
                <li className={styles.pricePageStepBoxLi}>
                  Полный пакет строительных чертежей
                </li>
              </ul>
            </div>

            <div className={styles.leftside}>
              <div
                className={`${styles.pricePagePriceBox} ${styles.pricePagePriceBox2} `}
              >
                <p> Стоимость отдельного помещения площадью: </p>{" "}
              </div>
              <div
                className={`${styles.pricePagePriceBox} ${styles.pricePagePriceBox2} `}
              >
                <p>до 5 кв.м.</p>{" "}
                <p className={styles.pricePagePriceBoxAmmount}> 20 000 руб</p>{" "}
              </div>
              <div
                className={`${styles.pricePagePriceBox} ${styles.pricePagePriceBox2} `}
              >
                <p>от 5 - 15 кв.м.</p>{" "}
                <p className={styles.pricePagePriceBoxAmmount}> 30 000 руб</p>{" "}
              </div>
              <div
                className={`${styles.pricePagePriceBox} ${styles.pricePagePriceBox2} `}
              >
                <p>от 15 - 30 кв.м.</p>{" "}
                <p className={styles.pricePagePriceBoxAmmount}> 40 000 руб</p>{" "}
              </div>
              <div
                className={`${styles.pricePagePriceBox} ${styles.pricePagePriceBox2} `}
              >
                <p>от 30 кв.м.</p>{" "}
                <p className={styles.pricePagePriceBoxAmmount}>
                  {" "}
                  1 600 руб / м2
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Price;
