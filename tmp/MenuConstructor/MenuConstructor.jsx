import { MenuIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./styles.module.css";

function MenuConstructor() {
  return (
    <span className={`${styles.wrapper}  ml-2`}>
      <MenuIcon type="primary" />
      <span className="text text_type_main-default ml-2 mr-5">
        Лента заказов
      </span>
    </span>
  );
}

export default MenuConstructor;
