import { Image } from "@mantine/core";
import Task from "../Task/Task";
import Item from "../Item/Item";
import SubTask from "../SubTask/SubTask";

export default function Task11() {
  return (
    <Task title={"Задание 11. Установка часовых поясов"}>
      {/* ISP */}
      <SubTask machine={"ISP"}>
        <Item content="ISP получает время из интернета" />
        <Item content="timedatectl" />
        <Item content="Скриншот в Задание 11" />
      </SubTask>

      {/* HQ-RTR */}
      <SubTask machine={"HQ-RTR"}>
        <Item content="timedatectl set-timezone Europe/Moscow && timedatectl" />
        <Item content="Скриншот в Задание 11" />
      </SubTask>

      {/* BR-RTR */}
      <SubTask machine={"BR-RTR"}>
        <Item content="timedatectl set-timezone Europe/Moscow && timedatectl" />
        <Item content="Скриншот в Задание 11" />
      </SubTask>

      {/* HQ-SRV */}
      <SubTask machine={"HQ-SRV"}>
        <Item content="timedatectl set-timezone Europe/Moscow && timedatectl" />
        <Item content="Скриншот в Задание 11" />
      </SubTask>

      {/* BR-SRV */}
      <SubTask machine={"BR-SRV"}>
        <Item content="timedatectl set-timezone Europe/Moscow && timedatectl" />
        <Item content="Скриншот в Задание 11" />
      </SubTask>

      {/* HQ-CLI */}
      <SubTask machine={"HQ-CLI"}>
        <Item content="timedatectl set-timezone Europe/Moscow && timedatectl" />
        <Item content="Скриншот в Задание 11" />
      </SubTask>
    </Task>
  );
}
