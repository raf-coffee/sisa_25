import { Image } from "@mantine/core";
import Task from "../Task/Task";
import Item from "../Item/Item";
import SubTask from "../SubTask/SubTask";

export default function Task6() {
  return (
    <Task title={"Задание 6"}>
      <SubTask machine={"HQ-RTR"}>
        <Item content="В рамках задания 2 уже настроили GRE и скрины должны быть в отчете" />
        <Item content="ping 10.5.5.2" />
      </SubTask>
      <SubTask machine={"BR-RTR"}>
        <Item content="В рамках задания 2 уже настроили GRE и скрины должны быть в отчете" />
        <Item content="ping 10.5.5.1" />
      </SubTask>
    </Task>
  );
}
