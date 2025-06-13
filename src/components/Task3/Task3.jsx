import Task from "../Task/Task";
import Item from "../Item/Item";
import SubTask from "../SubTask/SubTask";
import { Text, Image } from "@mantine/core";
import img1 from "../../assets/task3-01.png";
import img2 from "../../assets/task3-02.png";

export default function Task3() {
  return (
    <Task title={"Задание 3"}>
      {/* HQ-SRV */}
      <SubTask machine={"HQ-SRV"}>
        <Item content="adduser sshuser" />
        <Item content="passwd sshuser" />
        <Item content="вписать пароль P@ssw0rd" />
        <Item content="usermod -u 1010 sshuser" />
        <Item content="visudo /etc/sudoers" />
        <Item content="Раскомментировать строки как на слайде и всё">
          <Image radius="md" w="auto" fit="contain" src={img1} />
        </Item>
        <Item content="vim /etc/group" />
        <Item content="вписать пользователя sshuser в группу wheel и сохранить файл">
          <Image radius="md" w="auto" fit="contain" src={img2} />
        </Item>
        <Item content="сделать скрин экрана в отчет" />
      </SubTask>

      {/* BR-SRV */}
      <SubTask machine={"BR-SRV"}>
        <Item content="adduser sshuser" />
        <Item content="passwd sshuser" />
        <Item content="вписать пароль P@$$word" />
        <Item content="usermod -u 1010 sshuser" />
        <Item content="visudo /etc/sudoers" />
        <Item content="Раскомментировать строки как на слайде и всё">
          <Image radius="md" w="auto" fit="contain" src={img1} />
        </Item>
        <Item content="vim /etc/group" />
        <Item content="вписать пользователя sshuser в группу wheel и сохранить файл">
          <Image radius="md" w="auto" fit="contain" src={img2} />
        </Item>
        <Item content="сделать скрин экрана в отчет" />
      </SubTask>

      {/* HQ-RTR */}
      <SubTask machine={"HQ-RTR"}>
        <Item content="adduser net_admin" />
        <Item content="passwd net_admin" />
        <Item content="вписать пароль P@ssw0rd" />
        <Item content="visudo /etc/sudoers" />
        <Item content="Раскомментировать строки как на слайде и всё">
          <Image radius="md" w="auto" fit="contain" src={img1} />
        </Item>
        <Item content="vim /etc/group" />
        <Item content="вписать пользователя net_admin в группу wheel и сохранить файл" />
        <Item content="сделать скрин экрана в отчет" />
      </SubTask>

      {/* BR-RTR */}
      <SubTask machine={"BR-RTR"}>
        <Item content="adduser net_admin" />
        <Item content="passwd net_admin" />
        <Item content="вписать пароль P@ssw0rd" />
        <Item content="visudo /etc/sudoers" />
        <Item content="Раскомментировать строки как на слайде и всё">
          <Image radius="md" w="auto" fit="contain" src={img1} />
        </Item>
        <Item content="vim /etc/group" />
        <Item content="вписать пользователя net_admin в группу wheel и сохранить файл" />
        <Item content="сделать скрин экрана в отчет" />
      </SubTask>
    </Task>
  );
}
