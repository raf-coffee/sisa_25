import Task from "../Task/Task";
import Item from "../Item/Item";
import SubTask from "../SubTask/SubTask";

export default function Task8() {
  return (
    <Task title={"Задание 8"}>
      <SubTask machine={"HQ-RTR"}>
        <Item content="В рамках задания 2 уже настроили iptables и скрины должны быть в отчете" />
      </SubTask>
      <SubTask machine={"BR-RTR"}>
        <Item content="В рамках задания 2 уже настроили iptables и скрины должны быть в отчете" />
      </SubTask>
    </Task>
  );
}
