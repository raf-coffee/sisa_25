import Task from "../Task/Task";
import Item from "../Item/Item";
import SubTask from "../SubTask/SubTask";
import { useSelector } from "react-redux";

export default function Task3() {
  const netWorkConfig = useSelector((state) => state.netWorkConfig);

  return (
    <Task title={"Задание 3. Создание пользователей"}>
      {/* HQ-SRV */}
      <SubTask machine={"HQ-SRV"}>
        <Item
          content={`adduser --uid ${netWorkConfig.user1_id} ${netWorkConfig.user1_name} && usermod -aG wheel ${netWorkConfig.user1_name}`}
        />
        <Item content='echo "WHEEL_USERS ALL=(ALL:ALL) ALL" >> /etc/sudoers && echo "WHEEL_USERS ALL=(ALL:ALL) NOPASSWD: ALL" >> /etc/sudoers' />
        <Item content="visudo -c" />
        <Item content={`passwd ${netWorkConfig.user1_name}`} />
        <Item content={`${netWorkConfig.user1_password}`} />
        <Item content={`id ${netWorkConfig.user1_name}`} />
        <Item content={`su - ${netWorkConfig.user1_name}`} />
        <Item content="sudo apt-get update" />
        <Item content="Скриншот в Задание 3" />
        <Item content="Чтобы вернуться к root - ctrl d" />
      </SubTask>

      {/* BR-SRV */}
      <SubTask machine={"BR-SRV"}>
        <Item
          content={`adduser --uid ${netWorkConfig.user1_id} ${netWorkConfig.user1_name} && usermod -aG wheel ${netWorkConfig.user1_name}`}
        />
        <Item content='echo "WHEEL_USERS ALL=(ALL:ALL) ALL" >> /etc/sudoers && echo "WHEEL_USERS ALL=(ALL:ALL) NOPASSWD: ALL" >> /etc/sudoers' />
        <Item content="visudo -c" />
        <Item content={`passwd ${netWorkConfig.user1_name}`} />
        <Item content={`${netWorkConfig.user1_password}`} />
        <Item content={`id ${netWorkConfig.user1_name}`} />
        <Item content={`su - ${netWorkConfig.user1_name}`} />
        <Item content="sudo apt-get update" />
        <Item content="Скриншот в Задание 3" />
        <Item content="Чтобы вернуться к root - ctrl d" />
      </SubTask>

      {/* HQ-RTR */}
      <SubTask machine={"HQ-RTR"}>
        <Item
          content={`adduser ${netWorkConfig.user2_name} && usermod -aG wheel ${netWorkConfig.user2_name}`}
        />
        <Item content='echo "WHEEL_USERS ALL=(ALL:ALL) ALL" >> /etc/sudoers && echo "WHEEL_USERS ALL=(ALL:ALL) NOPASSWD: ALL" >> /etc/sudoers' />
        <Item content="visudo -c" />
        <Item content={`passwd ${netWorkConfig.user2_name}`} />
        <Item content={`${netWorkConfig.user2_password}`} />
        <Item content={`id ${netWorkConfig.user2_name}`} />
        <Item content={`su - ${netWorkConfig.user2_name}`} />
        <Item content="sudo apt-get update" />
        <Item content="Скриншот в Задание 3" />
        <Item content="Чтобы вернуться к root - ctrl d" />
      </SubTask>

      {/* BR-RTR */}
      <SubTask machine={"BR-RTR"}>
        <Item
          content={`adduser ${netWorkConfig.user2_name} && usermod -aG wheel ${netWorkConfig.user2_name}`}
        />
        <Item content='echo "WHEEL_USERS ALL=(ALL:ALL) ALL" >> /etc/sudoers && echo "WHEEL_USERS ALL=(ALL:ALL) NOPASSWD: ALL" >> /etc/sudoers' />
        <Item content="visudo -c" />
        <Item content={`passwd ${netWorkConfig.user2_name}`} />
        <Item content={`${netWorkConfig.user2_password}`} />
        <Item content={`id ${netWorkConfig.user2_name}`} />
        <Item content={`su - ${netWorkConfig.user2_name}`} />
        <Item content="sudo apt-get update" />
        <Item content="Скриншот в Задание 3" />
        <Item content="Чтобы вернуться к root - ctrl d" />
      </SubTask>
    </Task>
  );
}
