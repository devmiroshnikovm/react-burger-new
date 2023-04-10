/* 
это реализация по v1
*/

import styles from "./styles.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function ElementItem(props) {
  const { elements } = props;

  return (
    <div className={`${styles.scrollContainer} custom-scroll`}>
      <p className="text text_type_main-medium">Булки</p>
      <ul className={styles.container}>
        {elements.map((element) => {
          if (element.type === "bun") {
            return (
              <li className={styles.element} key={element._id}>
                <img
                  src={element.image}
                  alt={element.name}
                  className="pt-6"
                ></img>
                <div className={styles.priceIconWrapper}>
                  <span
                    className={`${styles.price} text text_type_main-default`}
                  >
                    {element.price}
                  </span>
                  <CurrencyIcon />
                </div>
                <p className={`${styles.label}text text_type_main-default`}>
                  {element.name}
                </p>
              </li>
            );
          }
        })}
      </ul>
      <p className="text text_type_main-medium">Соусы</p>
      <ul className={styles.container}>
        {elements.map((element) => {
          if (element.type === "sauce") {
            return (
              <li className={styles.element} key={element._id}>
                <img
                  src={element.image}
                  alt={element.name}
                  className="pt-6"
                ></img>
                <div className={styles.priceIconWrapper}>
                  <span
                    className={`${styles.price} text text_type_main-default`}
                  >
                    {element.price}
                  </span>
                  <CurrencyIcon />
                </div>
                <p className={`${styles.label}text text_type_main-default`}>
                  {element.name}
                </p>
              </li>
            );
          }
        })}
      </ul>
      <p className="text text_type_main-medium">Начинки</p>
      <ul className={styles.container}>
        {elements.map((element) => {
          if (element.type === "main") {
            return (
              <li className={styles.element} key={element._id}>
                <img
                  src={element.image}
                  alt={element.name}
                  className="pt-6"
                ></img>
                <div className={styles.priceIconWrapper}>
                  <span
                    className={`${styles.price} text text_type_main-default`}
                  >
                    {element.price}
                  </span>
                  <CurrencyIcon />
                </div>
                <p className={`${styles.label}text text_type_main-default`}>
                  {element.name}
                </p>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default ElementItem;

//все элементы в React поддерживают пропс key. Указывать это свойство нужно у первого элемента разметки внутри цикла

/* 
return (
  <ul className={styles.container}>
    {props.data.map((element) => (
      
      <li className={styles.element} key={element._id}>
        <img src={element.image} alt={element.name} className="pt-6"></img>
        <div className={styles.priceIconWrapper}>
          <span
            className={`${styles.price} text text_type_main-default`}
          >
            {element.price}
          </span>
          <CurrencyIcon />
        </div>
        <p
          className={`${styles.label}text text_type_main-default`}
        >
          {element.name}
        </p>
      </li>
    ))}
  </ul>
); */
