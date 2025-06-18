import Task from "../Task/Task";
import Item from "../Item/Item";
import SubTask from "../SubTask/SubTask";

export default function Task13() {
  return (
    <Task title={"Задание 3. Настройка сетевого времени"}>
      {/* HQ-RTR */}
      <SubTask machine={"HQ-RTR"}>
        <Item content="apt-get install -y chrony" />
        <Item content='echo "server 192.168.100.1 iburst" >> /etc/chrony.conf && echo "local stratum 5" >> /etc/chrony.conf && echo "allow 192.168.100.0/28" >> /etc/chrony.conf && echo "allow 192.168.200.0/28" >> /etc/chrony.conf && echo "allow 192.168.0.0/28" >> /etc/chrony.conf && echo "allow 10.5.5.0/30" >> /etc/chrony.conf' />
        <Item content="systemctl restart chronyd" />
        <Item content="chronyc tracking" />
        <Item content="Скриншот в Рисунок 48" />
      </SubTask>

      {/* HQ-SRV */}
      <SubTask machine={"HQ-SRV"}>
        <Item content="apt-get install -y chrony" />
        <Item content='sed -i "s/pool pool.ntp.org iburst/#pool pool.ntp.org iburst/g" /etc/chrony.conf' />
        <Item content='echo "server 192.168.100.1 iburst" >> /etc/chrony.conf' />
        <Item content="systemctl restart chronyd" />
        <Item content="chronyc tracking" />
        <Item content="Скриншот в Рисунок 49" />
      </SubTask>

      {/* HQ-CLI */}
      <SubTask machine={"HQ-CLI"}>
        <Item content="su -" />
        <Item content="apt-get update" />
        <Item content="apt-get install -y chrony" />
        <Item content='sed -i "s/pool pool.ntp.org iburst/#pool pool.ntp.org iburst/g" /etc/chrony.conf' />
        <Item content='echo "server 192.168.100.1 iburst" >> /etc/chrony.conf' />
        <Item content="systemctl restart chronyd" />
        <Item content="chronyc tracking" />
        <Item content="Скриншот в Рисунок 50" />
      </SubTask>

      {/* BR-RTR */}
      <SubTask machine={"BR-RTR"}>
        <Item content="apt-get install -y chrony" />
        <Item content='sed -i "s/pool pool.ntp.org iburst/#pool pool.ntp.org iburst/g" /etc/chrony.conf' />
        <Item content='echo "server 192.168.100.1 iburst" >> /etc/chrony.conf' />
        <Item content="systemctl restart chronyd" />
        <Item content="chronyc tracking" />
        <Item content="Скриншот в Рисунок 51" />
      </SubTask>

      {/* BR-SRV */}
      <SubTask machine={"BR-SRV"}>
        <Item content="apt-get update" />
        <Item content="apt-get install -y chrony" />
        <Item content='sed -i "s/pool pool.ntp.org iburst/#pool pool.ntp.org iburst/g" /etc/chrony.conf' />
        <Item content='echo "server 192.168.100.1 iburst" >> /etc/chrony.conf' />
        <Item content="systemctl restart chronyd" />
        <Item content="chronyc tracking" />
        <Item content="Скриншот в Рисунок 52" />
      </SubTask>
    </Task>
  );
}
