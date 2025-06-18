import Task from "../Task/Task";
import Item from "../Item/Item";
import SubTask from "../SubTask/SubTask";

export default function Task14() {
  return (
    <Task title={"Задание 4. Настройка ansible"}>
      {/* BR-SRV */}
      <SubTask machine={"BR-SRV"}>
        <Item content="apt-get install -y ansible" />
        <Item content='echo "[all]" >> /etc/ansible/hosts && echo "hq-srv ansible_host=192.168.100.2 ansible_connection=local" >> /etc/ansible/hosts && echo "hq-cli ansible_host=192.168.200.2 ansible_connection=local" >> /etc/ansible/hosts && echo "hq-rtr ansible_host=192.168.100.1 ansible_connection=local" >> /etc/ansible/hosts && echo "br-rtr ansible_host=192.168.0.1 ansible_connection=local" >> /etc/ansible/hosts' />
        <Item content="ansible all -m ping" />
        <Item content="Скриншот в Задание 2-4" />
      </SubTask>
    </Task>
  );
}
