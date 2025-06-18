import { Image } from "@mantine/core";
import Task from "../Task/Task";
import Item from "../Item/Item";
import SubTask from "../SubTask/SubTask";
import img3 from "../../assets/task2-03.webp";
import { useSelector } from "react-redux";

export default function Task4() {
  const netWorkConfig = useSelector((state) => state.netWorkConfig);

  return (
    <Task title={"Задание 4. Настройка openvswitch"}>
      {/* HQ-RTR */}
      <SubTask machine={"HQ-RTR"}>
        <Item content="apt-get install -y openvswitch" />
        <Item content="systemctl enable --now openvswitch" />
        <Item content="ovs-vsctl add-br HQ-SW" />
        <Item content="ovs-vsctl add-port HQ-SW ens19" />
        <Item content="ovs-vsctl add-port HQ-SW vlan100 tag=100 -- set interface vlan100 type=internal" />
        <Item content="ovs-vsctl add-port HQ-SW vlan200 tag=200 -- set interface vlan200 type=internal" />
        <Item content="ovs-vsctl add-port HQ-SW vlan999 tag=999 -- set interface vlan999 type=internal" />
        <Item content="mkdir /etc/net/ifaces/vlan100 /etc/net/ifaces/vlan200 /etc/net/ifaces/vlan999" />
        <Item content="cp /etc/net/ifaces/ens18/options /etc/net/ifaces/vlan100/options && cp /etc/net/ifaces/ens18/options /etc/net/ifaces/vlan200/options && cp /etc/net/ifaces/ens18/options /etc/net/ifaces/vlan999/options" />
        <Item
          content={`echo "${netWorkConfig.hqRTR_row3}" > /etc/net/ifaces/vlan100/ipv4address && echo "${netWorkConfig.hqRTR_row4}" > /etc/net/ifaces/vlan200/ipv4address && echo "${netWorkConfig.hqRTR_row2}" > /etc/net/ifaces/vlan999/ipv4address`}
        />
        <Item content="systemctl restart network" />
        <Item content="ovs-vsctl show" />
        <Item content="ip -br a">
          <Image radius="md" w={"90%"} fit="contain" src={img3} />
        </Item>
        <Item content="Скриншот в Задание 4" />
        <Item content="Возвращаемся в Задание 2, в BR-RTR и настриваем дальше" />
      </SubTask>
    </Task>
  );
}
