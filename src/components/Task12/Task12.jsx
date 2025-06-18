import { Image } from "@mantine/core";
import Task from "../Task/Task";
import Item from "../Item/Item";
import SubTask from "../SubTask/SubTask";
import img1 from "../../assets/task12-01.jpg";
import img4 from "../../assets/task12-04.jpg";

export default function Task12() {
  return (
    <Task title={"Задание 2. Настройка файлового хранилища"}>
      {/* HQ-SRV */}
      <SubTask machine={"HQ-SRV"}>
        <Item content="lsblk">
          <Image radius="md" w={"90%"} fit="contain" src={img1} />
        </Item>
        <Item content="apt-get install -y mdadm" />
        <Item content="mdadm --create --verbose /dev/md0 --level=5 --raid-devices=3 /dev/sdc /dev/sdd /dev/sde" />
        <Item content="mdadm --detail --scan | sudo tee a /etc/mdadm.conf" />
        <Item content="mkfs.ext4 /dev/md0" />
        <Item content="mkdir -p /raid5" />
        <Item content="blkid /dev/md0 >> /etc/fstab" />
        <Item content="vim /etc/fstab" />
        <Item content="Нижнюю строку приводим к виду:">
          <Image radius="md" w={"90%"} fit="contain" src={img4} />
        </Item>
        <Item content="mount -a" />
        <Item content="Скриншот в Задание 2-2" />
        <Item content="apt-get install -y nfs-server" />
        <Item content="mkdir /raid5/nfs" />
        <Item content='echo "/raid5/nfs 192.168.200.2(rw,sync,no_subtree_check)" >> /etc/exports' />
        <Item content="exportfs -a" />
        <Item content="systemctl restart nfs-server" />
        <Item content="Скриншот в Задание 2-2" />
      </SubTask>

      {/* HQ-CLI */}
      <SubTask machine={"HQ-CLI"}>
        <Item content="su -" />
        <Item content="mkdir -p /mnt/nfs" />
        <Item content='echo "192.168.100.2:/raid5/nfs /mnt/nfs nfs defaults 0 0" >> /etc/fstab' />
        <Item content="Нижнюю строку приводим к виду:">
          <Image radius="md" w={"90%"} fit="contain" src={img4} />
        </Item>
        <Item content="mount -a" />
        <Item content="Скриншот в Задание 2-2" />
      </SubTask>
    </Task>
  );
}
