import { Image } from "@mantine/core";
import Task from "../Task/Task";
import Item from "../Item/Item";
import SubTask from "../SubTask/SubTask";
import img1 from "../../assets/task5-01.png";

export default function Task5() {
  return (
    <Task title={"Задание 5"}>
      <SubTask machine={"HQ-SRV"}>
        <Item content="vim /etc/openssh/sshd_config" />
        <Item content="в конфиге добавляем или разкоментируем строки:">
          <Image src={img1} radius="md" w="auto" fit="contain" />
        </Item>
        <Item content='echo "Authorized access only!" >> /etc/ban' />
      </SubTask>
      <SubTask machine={"BR-SRV"}>
        <Item content="vim /etc/openssh/sshd_config" />
        <Item content="в конфиге добавляем или разкоментируем строки:">
          <Image src={img1} radius="md" w="auto" fit="contain" />
        </Item>
        <Item content='echo "Authorized access only!" >> /etc/ban' />
      </SubTask>
    </Task>
  );
}
