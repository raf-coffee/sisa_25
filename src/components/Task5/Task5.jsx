import Task from "../Task/Task";
import Item from "../Item/Item";
import SubTask from "../SubTask/SubTask";

export default function Task5() {
  return (
    <Task title={"Задание 5. Настройка SSH"}>
      {/* HQ-SRV */}
      <SubTask machine={"HQ-SRV"}>
        <Item content='echo "Port 2024" >> /etc/openssh/sshd_config' />
        <Item content='echo "AllowUsers sshuser" >> /etc/openssh/sshd_config' />
        <Item content='echo "MaxAuthTries 2" >> /etc/openssh/sshd_config' />
        <Item content='echo "Banner /etc/ban" >> /etc/openssh/sshd_config' />
        <Item content='echo "Authorized access only!" >> /etc/ban' />
        <Item content="systemctl restart sshd" />
        <Item content="systemctl enable --now sshd" />
        <Item content="ssh sshuser@192.168.100.2 -p 2024" />
        <Item content="P@$$word" />
        <Item content="Скриншот в Рисунок 13" />
        <Item content="exit" />
      </SubTask>

      {/* BR-SRV */}
      <SubTask machine={"BR-SRV"}>
        <Item content='echo "Port 2024" >> /etc/openssh/sshd_config' />
        <Item content='echo "AllowUsers sshuser" >> /etc/openssh/sshd_config' />
        <Item content='echo "MaxAuthTries 2" >> /etc/openssh/sshd_config' />
        <Item content='echo "Banner /etc/ban" >> /etc/openssh/sshd_config' />
        <Item content='echo "Authorized access only!" >> /etc/ban' />
        <Item content="systemctl restart sshd" />
        <Item content="systemctl enable --now sshd" />
        <Item content="ssh sshuser@192.168.0.2 -p 2024" />
        <Item content="P@$$word" />
        <Item content="Скриншот в Рисунок 14" />
        <Item content="exit" />
      </SubTask>
    </Task>
  );
}
