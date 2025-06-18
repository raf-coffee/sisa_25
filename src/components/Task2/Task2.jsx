import { Image } from "@mantine/core";
import Task from "../Task/Task";
import Item from "../Item/Item";
import SubTask from "../SubTask/SubTask";
import img3 from "../../assets/task2-03.webp";
import img4 from "../../assets/task2-04.webp";
import img6 from "../../assets/task2-06.webp";
import img7 from "../../assets/task2-07.webp";
import img8 from "../../assets/task2-08.webp";
import img10 from "../../assets/task2-10.webp";

export default function Task2() {
  return (
    <Task title={"Задание 1 и 2. Базовая настройка устройств"}>
      {/* ISP */}
      <SubTask machine={"ISP"}>
        <Item content="apt-get update -y" />
        <Item content="ip -br a" />
        <Item content="mkdir /etc/net/ifaces/ens19 /etc/net/ifaces/ens20" />
        <Item content="cp /etc/net/ifaces/ens18/options /etc/net/ifaces/ens19/options && cp /etc/net/ifaces/ens18/options /etc/net/ifaces/ens20/options" />
        <Item content='sed -i "s/dhcp/static/g" /etc/net/ifaces/ens19/options' />
        <Item content='sed -i "s/dhcp/static/g" /etc/net/ifaces/ens20/options' />
        <Item content='echo "172.16.4.1/28" >> /etc/net/ifaces/ens19/ipv4address && echo "172.16.5.1/28" >> /etc/net/ifaces/ens20/ipv4address' />
        <Item content='sed -i "s/net.ipv4.ip_forward = 0/net.ipv4.ip_forward = 1/g" /etc/net/sysctl.conf' />
        <Item content="hostnamectl hostname ISP ; exec bash" />
        <Item content="systemctl restart network" />
        <Item content="apt-get install -y iptables" />
        <Item content="iptables-save >> /etc/sysconfig/iptables && iptables-save" />
        <Item content="ip -br a" />
        <Item content="Скриншот в Рисунок 1, Рисунок 7 и Рисунок 23" />
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
        <Item content='echo "172.16.4.2/28" >> /etc/net/ifaces/ens18/ipv4address && echo "default via 172.16.4.1" >> /etc/net/ifaces/ens18/ipv4route && echo "nameserver 8.8.8.8" >> /etc/net/ifaces/ens18/resolv.conf' />
        <Item content='sed -i "s/net.ipv4.ip_forward = 0/net.ipv4.ip_forward = 1/g" /etc/net/sysctl.conf' />
        <Item content="systemctl restart network" />
        <Item content="ping 172.16.4.1" />
        <Item content="ping 8.8.8.8" />
        <Item content="Скриншот в Рисунок 2" />
        <Item content="apt-get update -y" />
        <Item content="apt-get install -y NetworkManager-tui" />
        <Item content="systemctl enable --now NetworkManager" />
        <Item content="nmtui" />
        <Item content="Заходим в Edit a connection" />
        <Item content="Add > IP-Tunnel" />
        <Item content="Profile name: BR-RTR" />
        <Item content="Device: gre1" />
        <Item content="Mode: GRE" />
        <Item content="Parent: ens18" />
        <Item content="Local IP: 172.16.4.2" />
        <Item content="Remote IP: 172.16.5.2" />
        <Item content="IPv4 CONFIGURATION: Manual" />
        <Item content="Addresses: 10.5.5.1/30" />
        <Item content="Проверяем и делаем скриншот настроек в Рисунок 15" />
        <Item content="Спускаемся вниз и жмём OK" />
        <Item content="Esc > Activate a connection > наш GRE > нажать два раза на Enter > Esc > ctrl-z" />
        <Item content="ip -br a">
          <Image radius="md" w={"90%"} fit="contain" src={img6} />
        </Item>
        <Item content="Скриншот в Рисунок 16" />
        <Item content="nmcli connection edit BR-RTR" />
        <Item content="set ip-tunnel.ttl 64" />
        <Item content="save" />
        <Item content="quit" />
        <Item content="reboot" />
        <Item content="apt-get install iptables" />
        <Item content="iptables -t nat -A POSTROUTING -j MASQUERADE -o ens18 && iptables-save >> /etc/sysconfig/iptables && iptables-save">
          <Image radius="md" w={"90%"} fit="contain" src={img10} />
        </Item>
        <Item content="ping 8.8.8.8" />
        <Item content="Скриншот в Рисунок 24" />
        <Item content="systemctl restart network" />
        <Item content="systemctl restart NetworkManager" />
        <Item content="Далее идет настройка openvswitch см Задание 4, иди туда, продолжишь BR-RTR, BR-SRV и HQ-SRV позже" />
      </SubTask>

      {/* BR-RTR */}
      <SubTask machine={"BR-RTR"}>
        <Item content="hostnamectl hostname BR-RTR.au-team.irpo ; exec bash" />
        <Item content='sed -i "s/\bdhcp4\|dhcp\b/static/g" /etc/net/ifaces/ens18/options' />
        <Item content='echo "172.16.5.2/28" >> /etc/net/ifaces/ens18/ipv4address && echo "default via 172.16.5.1" >> /etc/net/ifaces/ens18/ipv4route && echo "nameserver 8.8.8.8" >> /etc/net/ifaces/ens18/resolv.conf' />
        <Item content='sed -i "s/net.ipv4.ip_forward = 0/net.ipv4.ip_forward = 1/g" /etc/net/sysctl.conf' />
        <Item content="systemctl restart network" />
        <Item content="ping 172.16.5.1" />
        <Item content="ping 8.8.8.8" />
        <Item content="Скриншот в Рисунок 5" />
        <Item content="apt-get update -y" />
        <Item content="apt-get install -y NetworkManager-tui" />
        <Item content="systemctl enable --now NetworkManager" />
        <Item content="nmtui" />
        <Item content="Заходим в Edit a connection" />
        <Item content="Add > IP-Tunnel" />
        <Item content="Profile name: HQ-RTR" />
        <Item content="Device: gre1" />
        <Item content="Mode: GRE" />
        <Item content="Parent: ens18" />
        <Item content="Local IP: 172.16.5.2" />
        <Item content="Remote IP: 172.16.4.2" />
        <Item content="IPv4 CONFIGURATION: Manual" />
        <Item content="Addresses: 10.5.5.2/30" />
        <Item content="Проверяем и делаем скриншот настроек в Рисунок 17" />
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
        <Item content="Скриншот в Рисунок 18" />
        <Item content="apt-get install iptables" />
        <Item content="iptables -t nat -A POSTROUTING -j MASQUERADE -o ens18 && iptables-save >> /etc/sysconfig/iptables && iptables-save" />
        <Item content="ping 8.8.8.8" />
        <Item content="Скриншот в Рисунок 25" />
        <Item content="systemctl restart network" />
        <Item content="systemctl restart NetworkManager" />
        <Item content="Делаем паузу для настройки openvswitch в Задании 4" />
        <Item content="После работы в Задании 4 идём дальше тут" />
        <Item content="mkdir /etc/net/ifaces/ens19 && cp /etc/net/ifaces/ens18/options /etc/net/ifaces/ens19/options" />
        <Item content='echo "192.168.0.1/28" > /etc/net/ifaces/ens19/ipv4address' />
        <Item content="systemctl restart network" />
      </SubTask>

      {/* BR-SRV */}
      <SubTask machine={"BR-SRV"}>
        <Item content="hostnamectl hostname BR-SRV.au-team.irpo ; exec bash" />
        <Item content='sed -i "s/\bdhcp4\|dhcp\b/static/g" /etc/net/ifaces/ens18/options' />
        <Item content='echo "192.168.0.2/28" > /etc/net/ifaces/ens18/ipv4address && echo "default via 192.168.0.1" > /etc/net/ifaces/ens18/ipv4route && echo "nameserver 8.8.8.8" > /etc/net/ifaces/ens18/resolv.conf' />
        <Item content="systemctl restart network" />
        <Item content="ping 192.168.0.1" />
        <Item content="ping 8.8.8.8" />
        <Item content="ip -br a" />
        <Item content="Скриншот в Рисунок 6 и в Рисунок 27" />
      </SubTask>

      {/* HQ-SRV */}
      <SubTask machine={"HQ-SRV"}>
        <Item content="hostnamectl hostname HQ-SRV.au-team.irpo ; exec bash" />
        <Item content='sed -i "s/\bdhcp4\|dhcp\b/static/g" /etc/net/ifaces/ens18/options' />
        <Item content='echo "192.168.100.2/28" > /etc/net/ifaces/ens18/ipv4address && echo "default via 192.168.100.1" > /etc/net/ifaces/ens18/ipv4route && echo "nameserver 8.8.8.8" > /etc/net/ifaces/ens18/resolv.conf' />
        <Item content='sed -i "s/net.ipv4.ip_forward = 0/net.ipv4.ip_forward = 1/g" /etc/net/sysctl.conf' />
        <Item content="systemctl restart network" />
        <Item content="ping 192.168.100.1" />
        <Item content="ping 8.8.8.8" />
        <Item content="ip -br a" />
        <Item content="Скриншот в Рисунок 3 и в Рисунок 26" />
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
        <Item content="ping 192.168.200.1" />
        <Item content="ip -br a" />
        <Item content="Скриншот в Рисунок 4, Рисунок 28 и в Рисунок 30" />
      </SubTask>
    </Task>
  );
}
