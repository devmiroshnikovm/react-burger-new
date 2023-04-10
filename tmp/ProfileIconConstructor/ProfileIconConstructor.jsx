import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./styles.module.css";

function ProfileIconConstructor() {
  return (
    <span className={styles.wrapper}>
      <ProfileIcon type="primary" />
      <span className="text text_type_main-default ml-2">Личный кабинет</span>
    </span>
  );
}

export default ProfileIconConstructor;
