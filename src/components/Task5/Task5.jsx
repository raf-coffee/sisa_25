import Task from "../Task/Task";
import Item from "../Item/Item";
import SubTask from "../SubTask/SubTask";
import { useSelector } from "react-redux";

export default function Task5() {
  const netWorkConfig = useSelector((state) => state.netWorkConfig);
  return (
    <Task title={"Задание 5. Настройка SSH"}>
      {/* HQ-SRV */}
      <SubTask machine={"HQ-SRV"}>
        <Item
          content={`echo "Port ${netWorkConfig.ssh_port}" >> /etc/openssh/sshd_config && echo "AllowUsers ${netWorkConfig.ssh_user}" >> /etc/openssh/sshd_config && echo "MaxAuthTries ${netWorkConfig.max_auth}" >> /etc/openssh/sshd_config && echo "Banner /etc/ban" >> /etc/openssh/sshd_config echo "Authorized access only!" >> /etc/ban`}
        />
        <Item content="systemctl restart sshd" />
        <Item content="systemctl enable --now sshd" />
        <Item
          content={`ssh ${netWorkConfig.ssh_user}@${
            netWorkConfig.hqSRV_row1.split("/")[0]
          } -p ${netWorkConfig.ssh_port}"`}
        />
        <Item content={`${netWorkConfig.ssh_user_password}`} />
        <Item content="Скриншот в Задание 5" />
        <Item content="exit" />
      </SubTask>

      {/* BR-SRV */}
      <SubTask machine={"BR-SRV"}>
        <Item
          content={`echo "Port ${netWorkConfig.ssh_port}" >> /etc/openssh/sshd_config && echo "AllowUsers ${netWorkConfig.ssh_user}" >> /etc/openssh/sshd_config && echo "MaxAuthTries ${netWorkConfig.max_auth}" >> /etc/openssh/sshd_config && echo "Banner /etc/ban" >> /etc/openssh/sshd_config echo "Authorized access only!" >> /etc/ban`}
        />
        <Item content="systemctl restart sshd" />
        <Item content="systemctl enable --now sshd" />
        <Item
          content={`ssh ${netWorkConfig.ssh_user}@${
            netWorkConfig.brSRV_row1.split("/")[0]
          } -p ${netWorkConfig.ssh_port}"`}
        />
        <Item content={`${netWorkConfig.ssh_user_password}`} />
        <Item content="Скриншот в Задание 5" />
        <Item content="exit" />
      </SubTask>
    </Task>
  );
}
