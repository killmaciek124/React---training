import styles from "./Button.module.css";

const Button = (props) => {
  // tutaj dac type submit
  return <button className={styles["button"]}>Add User!</button>;
};

export default Button;
