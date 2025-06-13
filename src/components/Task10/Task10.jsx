import { Image } from "@mantine/core";
import Task from "../Task/Task";
import Item from "../Item/Item";
import SubTask from "../SubTask/SubTask";
import img1 from "../../assets/task10-01.png";
import img2 from "../../assets/task10-02.png";
import img3 from "../../assets/task10-03.png";
import img4 from "../../assets/task10-04.png";
import img5 from "../../assets/task10-05.png";
import img6 from "../../assets/task10-06.png";
import img7 from "../../assets/task10-07.png";

export default function Task10() {
  return (
    <Task title={"Задание 10"}>
      {/* HQ-SRV */}
      <SubTask machine={"HQ-SRV"}>
        <Item content="apt-get update -y" />
        <Item content="apt-get install -y bind" />
        <Item content="vim /var/lib/bind/etc/options.conf" />
        <Item content="Приводим к виду:">
          <Image radius="md" w={"90%"} fit="contain" src={img1} />
        </Item>
        <Item content="Затем там же и после правки esc + shit z z:">
          <Image radius="md" w={"90%"} fit="contain" src={img2} />
        </Item>
        <Item content="vim /var/lib/bind/etc/rfc1912.conf" />
        <Item content="Приводим к виду (Но назвать файлы 100.168.192.in-addr.arpa и 200.168.192.in-addr.arpa):">
          <Image radius="md" w={"40%"} fit="contain" src={img3} />
        </Item>
        <Item content="cd /var/lib/bind/etc/zone" />
        <Item content="cp empty au-team.db" />
        <Item content="vim au-team.db" />
        <Item content="Приводим к виду:">
          <Image radius="md" w={"90%"} fit="contain" src={img4} />
        </Item>
        <Item content="сделать скриншот в отчет в Задание 10" />
        <Item content="cp au-team.db 100.168.192.in-addr.arpa" />
        <Item content="cp au-team.db 200.168.192.in-addr.arpa" />
        <Item content="vim 100.168.192.in-addr.arpa" />
        <Item content="Приводим к виду:">
          <Image radius="md" w={"90%"} fit="contain" src={img5} />
        </Item>
        <Item content="сделать скриншот в отчет в Задание 10" />
        <Item content="vim 200.168.192.in-addr.arpa" />
        <Item content="Приводим к виду:">
          <Image radius="md" w={"90%"} fit="contain" src={img6} />
        </Item>
        <Item content="сделать скриншот в отчет в Задание 10" />
        <Item content="cd /var/lib/bind/etc/" />
        <Item content="rndc-confgen > /var/lib/bind/etc/rndc.key" />
        <Item content="sed -i '6,$d' rndc.key" />
        <Item content="chgrp -R named zone/" />
        <Item content="named-checkconf" />
        <Item content="named-checkconf -z">
          <Image radius="md" w={"90%"} fit="contain" src={img7} />
        </Item>
        <Item content="Если ошибка File not found, то ls zone и удалить rm -f названия с ~" />
        <Item content="systemctl enable --now bind" />
        <Item content="cd" />
        <Item content='echo "nameserver 192.168.100.2" > /etc/net/ifaces/ens18/resolv.conf' />
        <Item content='echo "domain au-team.irpo" >> /etc/net/ifaces/ens18/resolv.conf' />
        <Item content="systemctl restart network" />
        <Item content="reboot" />
        <Item content="ping ya.ru" />
        <Item content="ping br-srv" />
        <Item content="сделать скриншот в отчет в Задание 10 с успешным пингом" />
        <Item content="Если где-то что-то далее будет на работать, то смотреть iptables" />
      </SubTask>

      {/* HQ-RTR */}
      <SubTask machine={"HQ-RTR"}>
        <Item content='echo "nameserver 192.168.100.2" > /etc/net/ifaces/ens18/resolv.conf' />
        <Item content='echo "domain au-team.irpo" >> /etc/net/ifaces/ens18/resolv.conf' />
        <Item content="systemctl restart network" />
        <Item content="ping ya.ru" />
        <Item content="ping br-srv" />
      </SubTask>

      {/* BR-RTR */}
      <SubTask machine={"BR-RTR"}>
        <Item content='echo "nameserver 192.168.100.2" > /etc/net/ifaces/ens18/resolv.conf' />
        <Item content='echo "domain au-team.irpo" >> /etc/net/ifaces/ens18/resolv.conf' />
        <Item content="systemctl restart network" />
        <Item content="ping ya.ru" />
        <Item content="ping hq-srv" />
      </SubTask>

      {/* BR-SRV */}
      <SubTask machine={"BR-SRV"}>
        <Item content='echo "nameserver 192.168.100.2" > /etc/net/ifaces/ens18/resolv.conf' />
        <Item content='echo "domain au-team.irpo" >> /etc/net/ifaces/ens18/resolv.conf' />
        <Item content="systemctl restart network" />
        <Item content="ping ya.ru" />
        <Item content="ping hq-srv" />
      </SubTask>

      {/* HQ-CLI */}
      <SubTask machine={"HQ-CLI"}>
        <Item content="ping ya.ru" />
        <Item content="ping br-srv" />
      </SubTask>
    </Task>
  );
}
