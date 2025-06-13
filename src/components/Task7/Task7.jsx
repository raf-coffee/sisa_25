import { Image } from "@mantine/core";
import Task from "../Task/Task";
import Item from "../Item/Item";
import SubTask from "../SubTask/SubTask";
import img1 from "../../assets/task7-01.png";
import img2 from "../../assets/task7-02.png";

export default function Task7() {
  return (
    <Task title={"Задание 7"}>
      {/* HQ-RTR */}
      <SubTask machine={"HQ-RTR"}>
        <Item content="apt-get install -y frr" />
        <Item content='sed -i "s/ospfd=no/ospfd=yes/g" /etc/frr/daemons' />
        <Item content="systemctl restart frr" />
        <Item content="systemctl enable --now frr" />
        <Item content="vtysh" />
        <Item content="conf t" />
        <Item content="ip forwarding" />
        <Item content="router ospf" />
        <Item content="network 10.5.5.0/30 area 0" />
        <Item content="network 192.168.100.0/28 area 0" />
        <Item content="network 192.168.200.0/28 area 0" />
        <Item content="network 192.168.99.0/28 area 0" />
        <Item content="passive-interface default" />
        <Item content="ex" />
        <Item content="int gre1" />
        <Item content="no ip ospf passive" />
        <Item content="ex" />
        <Item content="ex" />
        <Item content="wr" />
        <Item content="ex" />
        <Item content="пойти настраивать BR-RTR и затем переходить к следующему" />
        <Item content="systemctl restart frr" />
        <Item content="ping 10.5.5.2" />
        <Item content="ip r">
          <Image radius="md" w={"90%"} fit="contain" src={img1} />
        </Item>
        <Item content="Скриншот в отчет в задание 7" />
      </SubTask>

      {/* BR-RTR */}
      <SubTask machine={"BR-RTR"}>
        <Item content="apt-get install -y frr" />
        <Item content='sed -i "s/ospfd=no/ospfd=yes/g" /etc/frr/daemons' />
        <Item content="systemctl restart frr" />
        <Item content="systemctl enable --now frr" />
        <Item content="vtysh" />
        <Item content="conf t" />
        <Item content="ip forwarding" />
        <Item content="router ospf" />
        <Item content="network 10.5.5.0/30 area 0" />
        <Item content="network 192.168.0.0/28 area 0" />
        <Item content="passive-interface default" />
        <Item content="ex" />
        <Item content="int gre1" />
        <Item content="no ip ospf passive" />
        <Item content="ex" />
        <Item content="ex" />
        <Item content="wr" />
        <Item content="ex" />
        <Item content="systemctl restart frr" />
        <Item content="ping 10.5.5.1" />
        <Item content="ip r">
          <Image radius="md" w={"90%"} fit="contain" src={img2} />
        </Item>
        <Item content="ping 192.168.100.2" />
        <Item content="Скриншот в отчет в задание 7" />
      </SubTask>

      {/* HQ-SRV */}
      <SubTask machine={"HQ-SRV"}>
        <Item content="ping ya.ru" />
        <Item content="Если пинга нет, то на машинах с RTR перезаписать iptables (команды ниже)" />
        <Item content="iptables -t nat -A POSTROUTING -j MASQUERADE -o ens18" />
        <Item content="iptables-save >> /etc/sysconfig/iptables" />
        <Item content="ping ya.ru" />
        <Item content="Скриншот в отчет в задание 7" />
      </SubTask>

      {/* BR-SRV */}
      <SubTask machine={"BR-SRV"}>
        <Item content="ping 192.168.100.2" />
        <Item content="ping ya.ru" />
        <Item content="Если пинга нет, то на машинах с RTR перезаписать iptables (команды ниже)" />
        <Item content="iptables -t nat -A POSTROUTING -j MASQUERADE -o ens18" />
        <Item content="iptables-save >> /etc/sysconfig/iptables" />
        <Item content="ping 192.168.100.2" />
        <Item content="ping ya.ru" />
        <Item content="Скриншот в отчет в задание 7" />
      </SubTask>
    </Task>
  );
}
