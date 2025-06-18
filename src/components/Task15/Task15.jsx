import Task from "../Task/Task";
import Item from "../Item/Item";
import SubTask from "../SubTask/SubTask";

export default function Task16() {
  return (
    <Task title={"Задание 6. Настройка статической трансляции портов"}>
      {/* HQ-RTR */}
      <SubTask machine={"HQ-RTR"}>
        <Item content="iptables -t nat -A PREROUTING -p tcp --dport 22 -j DNAT --to-destination 192.168.100.2:2024 && " />
        <Item content="iptables-save >> /etc/sysconfig/iptables" />
        <Item content="systemctl enable --now iptables" />
        <Item content="Скриншот в Рисунок 55" />
      </SubTask>

      {/* BR-RTR */}
      <SubTask machine={"BR-RTR"}>
        <Item content="iptables -t nat -A PREROUTING -p tcp --dport 80 -j DNAT --to-destination 192.168.0.2:8080" />
        <Item content="iptables -t nat -A PREROUTING -p tcp --dport 22 -j DNAT --to-destination 192.168.0.2:2024" />
        <Item content="iptables-save >> /etc/sysconfig/iptables" />
        <Item content="systemctl enable --now iptables" />
        <Item content="ssh sshuser@192.168.100.1" />
        <Item content="P@$$word" />
        <Item content="Скриншот в Рисунок 54" />
      </SubTask>
    </Task>
  );
}
