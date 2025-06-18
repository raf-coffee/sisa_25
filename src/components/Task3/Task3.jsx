import Task from "../Task/Task";
import Item from "../Item/Item";
import SubTask from "../SubTask/SubTask";

export default function Task3() {
  return (
    <Task title={"Задание 3. Создание пользователей"}>
      {/* HQ-SRV */}
      <SubTask machine={"HQ-SRV"}>
        <Item content="adduser --uid 1010 sshuser && usermod -aG wheel sshuser" />
        <Item content='echo "WHEEL_USERS ALL=(ALL:ALL) ALL" >> /etc/sudoers && echo "WHEEL_USERS ALL=(ALL:ALL) NOPASSWD: ALL" >> /etc/sudoers' />
        <Item content="visudo -c" />
        <Item content="passwd sshuser" />
        <Item content="P@$$word" />
        <Item content="id sshuser" />
        <Item content="su - sshuser" />
        <Item content="sudo apt-get update" />
        <Item content="Скриншот в Рисунок 8" />
        <Item content="Чтобы вернуться к root - ctrl d" />
      </SubTask>

      {/* BR-SRV */}
      <SubTask machine={"BR-SRV"}>
        <Item content="adduser --uid 1010 sshuser && usermod -aG wheel sshuser" />
        <Item content='echo "WHEEL_USERS ALL=(ALL:ALL) ALL" >> /etc/sudoers && echo "WHEEL_USERS ALL=(ALL:ALL) NOPASSWD: ALL" >> /etc/sudoers' />
        <Item content="visudo -c" />
        <Item content="passwd sshuser" />
        <Item content="P@$$word" />
        <Item content="id sshuser" />
        <Item content="su - sshuser" />
        <Item content="sudo apt-get update" />
        <Item content="Скриншот в Рисунок 9" />
        <Item content="Чтобы вернуться к root - ctrl d" />
      </SubTask>

      {/* HQ-RTR */}
      <SubTask machine={"HQ-RTR"}>
        <Item content="adduser net_admin && usermod -aG wheel net_admin" />
        <Item content='echo "WHEEL_USERS ALL = (ALL:ALL) ALL" >> /etc/sudoers && echo "WHEEL_USERS ALL = (ALL:ALL) NOPASSWD: ALL" >> /etc/sudoers' />
        <Item content="visudo -c" />
        <Item content="passwd net_admin" />
        <Item content="P@ssw0rd" />
        <Item content="id net_admin" />
        <Item content="su - net_admin" />
        <Item content="sudo apt-get update" />
        <Item content="Скриншот в Рисунок 10" />
        <Item content="Чтобы вернуться к root - ctrl d" />
      </SubTask>

      {/* BR-RTR */}
      <SubTask machine={"BR-RTR"}>
        <Item content="adduser net_admin && usermod -aG wheel net_admin" />
        <Item content='echo "WHEEL_USERS ALL = (ALL:ALL) ALL" >> /etc/sudoers && echo "WHEEL_USERS ALL = (ALL:ALL) NOPASSWD: ALL" >> /etc/sudoers' />
        <Item content="visudo -c" />
        <Item content="passwd net_admin" />
        <Item content="P@ssw0rd" />
        <Item content="id net_admin" />
        <Item content="su - net_admin" />
        <Item content="sudo apt-get update" />
        <Item content="Скриншот в Рисунок 11" />
        <Item content="Чтобы вернуться к root - ctrl d" />
      </SubTask>
    </Task>
  );
}
