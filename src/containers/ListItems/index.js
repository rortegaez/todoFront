import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import styles from "./listItems.module.css";

const ListItems = () => {
  const [taskList, setTaskList] = useState([]);
  //dentro del parentesis del useState ponemos unos corches, porque vamos a guardar el array

  useEffect(() => {
    fetch("http://localhost:3000/task/")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return setTaskList(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.containerListItems}>
      {taskList.map((task) => (
        <Card taskData={task} />
      ))}
    </div>
  );
};

export default ListItems;
