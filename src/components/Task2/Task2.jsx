import { Image } from "@mantine/core";
import Task from "../Task/Task";
import Item from "../Item/Item";
import SubTask from "../SubTask/SubTask";
import screen001 from "../../assets/screen001.png";
import img1 from "../../assets/task2-01.png";
import img3 from "../../assets/task2-03.png";
import img4 from "../../assets/task2-04.png";
import img5 from "../../assets/task2-05.png";
import img6 from "../../assets/task2-06.png";
import img7 from "../../assets/task2-07.png";
import img8 from "../../assets/task2-08.png";
import img9 from "../../assets/task2-09.png";
import img10 from "../../assets/task2-10.png";

export default function Task2() {
  return (
    <Task title={"Задание 2"}>
      {/* ISP */}
      <SubTask machine={"ISP"}>
        <Item content="apt-get update -y" />
        <Item content="ip -br a">
          <Image radius="md" w={"90%"} fit="contain" src={screen001} />
        </Item>
        <Item content="mkdir /etc/net/ifaces/ens19 /etc/net/ifaces/ens20" />
        <Item content="cp /etc/net/ifaces/ens18/options /etc/net/ifaces/ens19/options" />
        <Item content="cp /etc/net/ifaces/ens18/options /etc/net/ifaces/ens20/options" />
        <Item content='sed -i "s/dhcp/static/g" /etc/net/ifaces/ens19/options' />
        <Item content='sed -i "s/dhcp/static/g" /etc/net/ifaces/ens20/options' />
        <Item content='echo "172.16.4.1/28" >> /etc/net/ifaces/ens19/ipv4address' />
        <Item content='echo "172.16.5.1/28" >> /etc/net/ifaces/ens20/ipv4address' />
        <Item content="hostnamectl hostname ISP ; exec bash" />
        <Item content="systemctl restart network" />
        <Item content="ip -br a">
          <Image radius="md" w={"90%"} fit="contain" src={img1} />
        </Item>
        <Item content="apt-get install -y iptables" />
        <Item content="iptables -t nat -A POSTROUTING -j MASQUERADE -o ens18" />
        <Item content="iptables-save >> /etc/sysconfig/iptables" />
        <Item content="vim /etc/net/sysctl.conf" />
        <Item content="меняем в net.ipv4.ip_forward = 0 на 1 затем esc + shift z z" />
        <Item content="systemctl restart network" />
      </SubTask>

      {/* HQ-RTR */}
      <SubTask machine={"HQ-RTR"}>
        <Item content="Настраивай HQ-RTR и BR-RTR параллельно, до openvswitch" />
        <Item content="ip -br a">
          <Image radius="md" w={"90%"} fit="contain" src={img3} />
        </Item>
        <Item content="hostnamectl hostname HQ-RTR.au-team.irpo ; exec bash" />
        <Item content='sed -i "s/\bdhcp4\|dhcp\b/static/g" /etc/net/ifaces/ens18/options' />
        <Item content='echo "172.16.4.2/28" >> /etc/net/ifaces/ens18/ipv4address' />
        <Item content='echo "default via 172.16.4.1" >> /etc/net/ifaces/ens18/ipv4route' />
        <Item content='echo "nameserver 8.8.8.8" >> /etc/net/ifaces/ens18/resolv.conf' />
        <Item content="vim /etc/net/sysctl.conf" />
        <Item content="меняем в net.ipv4.ip_forward = 0 на 1 затем esc + shift z z" />
        <Item content="systemctl restart network" />
        <Item content="ping 172.16.4.1" />
        <Item content="ping 8.8.8.8" />
        <Item content="сделать скрин с именем машины и пингами в задание 1" />
        <Item content="apt-get update -y" />
        <Item content="apt-get install -y NetworkManager-tui" />
        <Item content="systemctl enable --now NetworkManager" />
        <Item content="nmtui" />
        <Item content="Заходим в Edit a connection">
          <Image radius="md" w={"30%"} fit="contain" src={img4} />
        </Item>
        <Item content="Add > IP-Tunnel" />
        <Item content="Profile name: BR-RTR" />
        <Item content="Device: gre1" />
        <Item content="Mode: GRE" />
        <Item content="Parent: ens18" />
        <Item content="Local IP: 172.16.4.2" />
        <Item content="Remote IP: 172.16.5.2" />
        <Item content="IPv4 CONFIGURATION: Manual" />
        <Item content="Addresses: 10.5.5.1/30" />
        <Item content="Проверяем и делаем скриншот настроек для Задания 6">
          <Image radius="md" w={"60%"} fit="contain" src={img5} />
        </Item>
        <Item content="Спускаемся вниз и жмём OK" />
        <Item content="Esc > Activate a connection > наш GRE > нажать два раза на Enter > Esc > ctrl-z" />
        <Item content="ip -br a">
          <Image radius="md" w={"90%"} fit="contain" src={img6} />
        </Item>
        <Item content="nmcli connection edit BR-RTR" />
        <Item content="set ip-tunnel.ttl 64" />
        <Item content="save" />
        <Item content="quit" />
        <Item content="reboot" />
        <Item content="iptables -t nat -A POSTROUTING -j MASQUERADE -o ens18" />
        <Item content="iptables-save >> /etc/sysconfig/iptables">
          <Image radius="md" w={"90%"} fit="contain" src={img10} />
        </Item>
        <Item content="Проверяем и делаем скриншот, что всё работает для Задания 8" />
        <Item content="systemctl restart network" />
        <Item content="systemctl restart NetworkManager" />
        <Item content="Далее идет настройка openvswitch см Задание 4, иди туда, продолжишь BR-RTR, BR-SRV и HQ-SRV позже" />
      </SubTask>

      {/* BR-RTR */}
      <SubTask machine={"BR-RTR"}>
        <Item content="hostnamectl hostname BR-RTR.au-team.irpo ; exec bash" />
        <Item content='sed -i "s/\bdhcp4\|dhcp\b/static/g" /etc/net/ifaces/ens18/options' />
        <Item content='echo "172.16.5.2/28" >> /etc/net/ifaces/ens18/ipv4address' />
        <Item content='echo "default via 172.16.5.1" >> /etc/net/ifaces/ens18/ipv4route' />
        <Item content='echo "nameserver 8.8.8.8" >> /etc/net/ifaces/ens18/resolv.conf' />
        <Item content="vim /etc/net/sysctl.conf" />
        <Item content="меняем в net.ipv4.ip_forward = 0 на 1 затем esc + shift z z" />
        <Item content="systemctl restart network" />
        <Item content="ping 172.16.5.1" />
        <Item content="ping 8.8.8.8" />
        <Item content="apt-get update -y" />
        <Item content="apt-get install -y NetworkManager-tui" />
        <Item content="systemctl enable --now NetworkManager" />
        <Item content="nmtui" />
        <Item content="Заходим в Edit a connection">
          <Image radius="md" w={"30%"} fit="contain" src={img4} />
        </Item>
        <Item content="Add > IP-Tunnel" />
        <Item content="Profile name: HQ-RTR" />
        <Item content="Device: gre1" />
        <Item content="Mode: GRE" />
        <Item content="Parent: ens18" />
        <Item content="Local IP: 172.16.5.2" />
        <Item content="Remote IP: 172.16.4.2" />
        <Item content="IPv4 CONFIGURATION: Manual" />
        <Item content="Addresses: 10.5.5.2/30" />
        <Item content="Проверяем и делаем скриншот настроек для Задания 6">
          <Image radius="md" w={"60%"} fit="contain" src={img7} />
        </Item>
        <Item content="Спускаемся вниз и жмём OK" />
        <Item content="Esc > Activate a connection > наш GRE > нажать два раза на Enter > Esc > ctrl-z" />
        <Item content="ip -br a">
          <Image radius="md" w={"90%"} fit="contain" src={img8} />
        </Item>
        <Item content="nmcli connection edit HQ-RTR" />
        <Item content="set ip-tunnel.ttl 64" />
        <Item content="save" />
        <Item content="quit" />
        <Item content="ping 10.5.5.1" />
        <Item content="сделать скриншот в Задание 6, что пинг идет через GRE">
          <Image radius="md" w={"90%"} fit="contain" src={img9} />
        </Item>
        <Item content="iptables -t nat -A POSTROUTING -j MASQUERADE -o ens18" />
        <Item content="iptables-save >> /etc/sysconfig/iptables">
          <Image radius="md" w={"90%"} fit="contain" src={img10} />
        </Item>
        <Item content="Проверяем и делаем скриншот, что все работает для Задания 8" />
        <Item content="systemctl restart network" />
        <Item content="systemctl restart NetworkManager" />
        <Item content="Делаем паузу для настройки openvswitch в Задании 4" />
        <Item content="После работы в Задании 4 идём дальше тут" />
        <Item content="mkdir /etc/net/ifaces/ens19" />
        <Item content="cp /etc/net/ifaces/ens18/options /etc/net/ifaces/ens19/options" />
        <Item content='echo "192.168.0.1/28" > /etc/net/ifaces/ens19/ipv4address' />
        <Item content="systemctl restart network" />
        <Item content="сделать скрин с именем машины и пингами в задание 1" />
      </SubTask>

      {/* BR-SRV */}
      <SubTask machine={"BR-SRV"}>
        <Item content="hostnamectl hostname BR-SRV.au-team.irpo ; exec bash" />
        <Item content='sed -i "s/\bdhcp4\|dhcp\b/static/g" /etc/net/ifaces/ens18/options' />
        <Item content='echo "192.168.0.2/28" > /etc/net/ifaces/ens18/ipv4address' />
        <Item content='echo "default via 192.168.0.1" > /etc/net/ifaces/ens18/ipv4route' />
        <Item content='echo "nameserver 8.8.8.8" > /etc/net/ifaces/ens18/resolv.conf' />
        <Item content="systemctl restart network" />
        <Item content="ping 192.168.0.1" />
        <Item content="ping 8.8.8.8" />
        <Item content="сделать скрин с именем машины и пингами в задание 1" />
      </SubTask>

      {/* HQ-SRV */}
      <SubTask machine={"HQ-SRV"}>
        <Item content="hostnamectl hostname HQ-SRV.au-team.irpo ; exec bash" />
        <Item content='sed -i "s/\bdhcp4\|dhcp\b/static/g" /etc/net/ifaces/ens18/options' />
        <Item content='echo "192.168.100.2/28" > /etc/net/ifaces/ens18/ipv4address' />
        <Item content='echo "default via 192.168.100.1" > /etc/net/ifaces/ens18/ipv4route' />
        <Item content='echo "nameserver 8.8.8.8" > /etc/net/ifaces/ens18/resolv.conf' />
        <Item content="vim /etc/net/sysctl.conf" />
        <Item content="меняем в net.ipv4.ip_forward = 0 на 1 затем esc + shift z z" />
        <Item content="systemctl restart network" />
        <Item content="ip -br a" />
        <Item content="ping 192.168.100.1" />
        <Item content="ping 8.8.8.8" />
        <Item content="сделать скрин с именем машины и пингами в задание 1" />
      </SubTask>

      {/* HQ-CLI */}
      <SubTask machine={"HQ-CLI"}>
        <Item content="hostnamectl hostname HQ-CLI.au-team.irpo ; exec bash" />
        <Item content="Перед тем как настраивать переходим к Заданию 9 и настраиваем DHCP" />
        <Item content="После настройки в Задании 9 продолжаем тут" />
        <Item content="su -" />
        <Item content="rm -f /etc/net/ifaces/ens18/ipv4address" />
        <Item content="systemctl restart network" />
        <Item content="systemctl restart NetworkManager" />
        <Item content="ip -br a" />
        <Item content="ping 192.168.200.1" />
        <Item content="сделать скрин с именем машины и пингами в задание 1" />
      </SubTask>
    </Task>
  );
}
