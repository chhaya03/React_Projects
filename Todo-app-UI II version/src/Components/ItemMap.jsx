import Item from "./Item";
import styles from "./ItemMap.module.css";

const ItemMap = ({ todoitems }) => {
  return (
    <div className={styles.itemContainer}>
      {todoitems.map((items) => (
        <Item todoName={items.name} todoDate={items.dueDate}></Item>
      ))}
    </div>
  );
};

export default ItemMap;
