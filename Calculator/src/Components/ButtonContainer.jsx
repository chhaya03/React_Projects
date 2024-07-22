import styles from "./ButtonContainer.module.css";

function ButtonContainer() {
  let btnArray = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.btncontain}>
      {btnArray.map((buttonNames) => (
        <button className={styles.btn}>{buttonNames}</button>
      ))}
    </div>
  );
}

export default ButtonContainer;
