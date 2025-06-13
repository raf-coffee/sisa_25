import { Image } from "@mantine/core";
import Task from "../Task/Task";
import Item from "../Item/Item";
import SubTask from "../SubTask/SubTask";
import img1 from "../../assets/task9-01.png";
import img2 from "../../assets/task9-02.png";
import img3 from "../../assets/task9-03.png";
import img4 from "../../assets/task2-11.png";

export default function Task9() {
  return (
    <Task title={"Задание 9"}>
      {/* HQ-RTR */}
      <SubTask machine={"HQ-RTR"}>
        <Item content="apt-get install -y dhcp-server" />
        <Item content='sed -i "s/DHCPDARGS=/DHCPDARGS=vlan200/g" /etc/sysconfig/dhcpd' />
        <Item content="cp /etc/dhcp/dhcpd.conf.example /etc/dhcp/dhcpd.conf" />
        <Item content="vim /etc/dhcp/dhcpd.conf" />
        <Item content="в option domain-name так же в ковычках: au-team.irpo" />
        <Item content="в option domain-name-servers: 192.168.100.2;" />
        <Item content="в ddns-update-style приводим к такому виду: ddns-update-style interim;" />
        <Item content="через строку от него: update-static-leases on;" />
        <Item content="должно быть так:">
          <Image radius="md" w={"90%"} fit="contain" src={img1} />
        </Item>
        <Item content="далее в новой строке пишем следующее:">
          <Image radius="md" w={"50%"} fit="contain" src={img2} />
        </Item>
        <Item content="Делаем скриншот в отчет, что сделаны настройки" />
        <Item content="далее переходим к строке пишем следующее:">
          <Image radius="md" w={"50%"} fit="contain" src={img3} />
        </Item>
        <Item content="далее в host fantasia, смотрим какой MAC-адрес у HQ-CLI, и вместо 10 в конце ставим 2:">
          <Image radius="md" w={"50%"} fit="contain" src={img4} />
        </Item>
        <Item content="esc + shift z z" />
        <Item content="Делаем ещё один скриншот в отчет, что сделаны настройки" />
        <Item content="systemctl restart dhcpd" />
        <Item content="systemctl enable --now dhcpd" />
        <Item content="Возвращаемся в Задание 2, в HQ-CLI и настриваем дальше" />
      </SubTask>
    </Task>
  );
}
