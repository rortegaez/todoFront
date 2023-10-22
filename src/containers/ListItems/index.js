import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import styles from "./listItems.module.css";

const config = require('../../config.js')

const ListItems = () => {
  const [taskList, setTaskList] = useState([]);
  //dentro del parentesis del useState ponemos unos corches, porque vamos a guardar el array

  useEffect(() => {
    fetch(`${config.REACT_APP_URL}/tareas`)
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
      {taskList.map((task, index) => (
        <Card taskData={task} key={index} />
      ))}
    </div>
  );
};

export default ListItems;
