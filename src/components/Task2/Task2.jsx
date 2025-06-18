import { Image } from "@mantine/core";
import Task from "../Task/Task";
import Item from "../Item/Item";
import SubTask from "../SubTask/SubTask";
import img3 from "../../assets/task2-03.webp";
import img6 from "../../assets/task2-06.webp";
import img8 from "../../assets/task2-08.webp";
import img10 from "../../assets/task2-10.webp";
import { useSelector } from "react-redux";

export default function Task2() {
  const netWorkConfig = useSelector((state) => state.netWorkConfig);
  const isp = netWorkConfig.isp_row2.split("/")[0];
  const isp2 = netWorkConfig.isp_row3.split("/")[0];
  const hqRTR = netWorkConfig.hqRTR_row1.split("/")[0];
  const hqRTR2 = netWorkConfig.hqRTR_row5.split("/")[0];
  const hqRTR3 = netWorkConfig.hqRTR_row3.split("/")[0];
  const hqRTR4 = netWorkConfig.hqRTR_row4.split("/")[0];
  const brRTR = netWorkConfig.brRTR_row1.split("/")[0];
  const brRTR2 = netWorkConfig.brRTR_row2.split("/")[0];

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
        <Item
          content={`echo "${netWorkConfig.isp_row2}" >> /etc/net/ifaces/ens19/ipv4address && echo "${netWorkConfig.isp_row3}" >> /etc/net/ifaces/${netWorkConfig.ens20}/ipv4address`}
        />
        <Item content='sed -i "s/net.ipv4.ip_forward = 0/net.ipv4.ip_forward = 1/g" /etc/net/sysctl.conf' />
        <Item content="hostnamectl hostname ISP ; exec bash" />
        <Item content="systemctl restart network" />
        <Item content="apt-get install -y iptables" />
        <Item content="iptables-save >> /etc/sysconfig/iptables && iptables-save" />
        <Item content="ip -br a" />
        <Item content="Скриншот в Задание 1, Задание 2 и Задание 8" />
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
        <Item
          content={`echo "${netWorkConfig.hqRTR_row1}" >> /etc/net/ifaces/ens18/ipv4address && echo "default via ${isp}" >> /etc/net/ifaces/ens18/ipv4route && echo "nameserver 8.8.8.8" >> /etc/net/ifaces/ens18/resolv.conf`}
        />
        <Item content='sed -i "s/net.ipv4.ip_forward = 0/net.ipv4.ip_forward = 1/g" /etc/net/sysctl.conf' />
        <Item content="systemctl restart network" />
        <Item content={`ping ${isp}`} />
        <Item content="ping 8.8.8.8" />
        <Item content="Скриншот в Задание 1" />
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
        <Item content={`Local IP: ${hqRTR}`} />
        <Item content={`Remote IP: ${brRTR}`} />
        <Item content="IPv4 CONFIGURATION: Manual" />
        <Item content={`Addresses: ${netWorkConfig.hqRTR_row5}`} />
        <Item content="Проверяем и делаем скриншот настроек в Задание 6" />
        <Item content="Спускаемся вниз и жмём OK" />
        <Item content="Esc > Activate a connection > наш GRE > нажать два раза на Enter > Esc > ctrl-z" />
        <Item content="ip -br a">
          <Image radius="md" w={"90%"} fit="contain" src={img6} />
        </Item>
        <Item content="Скриншот в Задание 6" />
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
        <Item content="Скриншот в Задание 8" />
        <Item content="systemctl restart network" />
        <Item content="systemctl restart NetworkManager" />
        <Item content="Далее идет настройка openvswitch см Задание 4, иди туда, продолжишь BR-RTR, BR-SRV и HQ-SRV позже" />
      </SubTask>

      {/* BR-RTR */}
      <SubTask machine={"BR-RTR"}>
        <Item content="hostnamectl hostname BR-RTR.au-team.irpo ; exec bash" />
        <Item content='sed -i "s/\bdhcp4\|dhcp\b/static/g" /etc/net/ifaces/ens18/options' />
        <Item
          content={`echo "${netWorkConfig.brRTR_row1}" >> /etc/net/ifaces/ens18/ipv4address && echo "default via ${isp2}" >> /etc/net/ifaces/ens18/ipv4route && echo "nameserver 8.8.8.8" >> /etc/net/ifaces/ens18/resolv.conf`}
        />
        <Item content='sed -i "s/net.ipv4.ip_forward = 0/net.ipv4.ip_forward = 1/g" /etc/net/sysctl.conf' />
        <Item content="systemctl restart network" />
        <Item content={`ping ${isp2}`} />
        <Item content="ping 8.8.8.8" />
        <Item content="Скриншот в Задание 1" />
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
        <Item content={`Local IP: ${brRTR}`} />
        <Item content={`Remote IP: ${hqRTR}`} />
        <Item content="IPv4 CONFIGURATION: Manual" />
        <Item content={`Addresses: ${netWorkConfig.brRTR_row3}`} />
        <Item content="Проверяем и делаем скриншот настроек в Задание 6" />
        <Item content="Спускаемся вниз и жмём OK" />
        <Item content="Esc > Activate a connection > наш GRE > нажать два раза на Enter > Esc > ctrl-z" />
        <Item content="ip -br a">
          <Image radius="md" w={"90%"} fit="contain" src={img8} />
        </Item>
        <Item content="nmcli connection edit HQ-RTR" />
        <Item content="set ip-tunnel.ttl 64" />
        <Item content="save" />
        <Item content="quit" />
        <Item content={`ping ${hqRTR2}`} />
        <Item content="Скриншот в Задание 6" />
        <Item content="apt-get install iptables" />
        <Item content="iptables -t nat -A POSTROUTING -j MASQUERADE -o ens18 && iptables-save >> /etc/sysconfig/iptables && iptables-save" />
        <Item content="ping 8.8.8.8" />
        <Item content="Скриншот в Задание 8" />
        <Item content="systemctl restart network" />
        <Item content="systemctl restart NetworkManager" />
        <Item content="Делаем паузу для настройки openvswitch в Задании 4" />
        <Item content="После работы в Задании 4 идём дальше тут" />
        <Item content="mkdir /etc/net/ifaces/ens19 && cp /etc/net/ifaces/ens18/options /etc/net/ifaces/ens19/options" />
        <Item
          content={`echo "${netWorkConfig.brRTR_row2}" > /etc/net/ifaces/ens19/ipv4address`}
        />
        <Item content="systemctl restart network" />
      </SubTask>

      {/* BR-SRV */}
      <SubTask machine={"BR-SRV"}>
        <Item content="hostnamectl hostname BR-SRV.au-team.irpo ; exec bash" />
        <Item content='sed -i "s/\bdhcp4\|dhcp\b/static/g" /etc/net/ifaces/ens18/options' />
        <Item
          content={`echo "${netWorkConfig.brSRV_row1}" > /etc/net/ifaces/ens18/ipv4address && echo "default via ${brRTR2}" > /etc/net/ifaces/ens18/ipv4route && echo "nameserver 8.8.8.8" > /etc/net/ifaces/ens18/resolv.conf`}
        />
        <Item content="systemctl restart network" />
        <Item content={`ping ${brRTR2}`} />
        <Item content="ping 8.8.8.8" />
        <Item content="ip -br a" />
        <Item content="Скриншот в Задание 1 и в Задание 8" />
      </SubTask>

      {/* HQ-SRV */}
      <SubTask machine={"HQ-SRV"}>
        <Item content="hostnamectl hostname HQ-SRV.au-team.irpo ; exec bash" />
        <Item content='sed -i "s/\bdhcp4\|dhcp\b/static/g" /etc/net/ifaces/ens18/options' />
        <Item
          content={`echo "${netWorkConfig.hqSRV_row1}" > /etc/net/ifaces/ens18/ipv4address && echo "default via ${hqRTR3}" > /etc/net/ifaces/ens18/ipv4route && echo "nameserver 8.8.8.8" > /etc/net/ifaces/ens18/resolv.conf`}
        />
        <Item content='sed -i "s/net.ipv4.ip_forward = 0/net.ipv4.ip_forward = 1/g" /etc/net/sysctl.conf' />
        <Item content="systemctl restart network" />
        <Item content={`ping ${hqRTR3}`} />
        <Item content="ping 8.8.8.8" />
        <Item content="ip -br a" />
        <Item content="Скриншот в Задание 1 и в Задание 8" />
      </SubTask>

      {/* HQ-CLI */}
      <SubTask machine={"HQ-CLI"}>
        <Item content="hostnamectl hostname HQ-CLI.au-team.irpo ; exec bash" />
        <Item content="Перед тем как настраивать переходим к Заданию 9 и настраиваем DHCP" />
        <Item content="После настройки в Задании 9 продолжаем тут" />
        <Item content="su -" />
        <Item content={`rm -f /etc/net/ifaces/ens18/ipv4address`} />
        <Item content="systemctl restart network" />
        <Item content="systemctl restart NetworkManager" />
        <Item content={`ping ${hqRTR4}`} />
        <Item content="ip -br a" />
        <Item content="Скриншот в Задание 1, Задание 8 и в Задание 9" />
      </SubTask>
    </Task>
  );
}
