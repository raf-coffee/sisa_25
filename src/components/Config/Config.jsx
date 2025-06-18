import { Button, Table, useMantineTheme } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { resetConfig, updateField } from "../../store/ConfigSlice";

export default function Config() {
  const netWorkConfig = useSelector((state) => state.netWorkConfig);
  const dispatch = useDispatch();
  const theme = useMantineTheme();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ name, value }));
  };

  const handleReset = () => dispatch(resetConfig());

  return (
    <>
      <Table withColumnBorders withTableBorder withRowBorders>
        <Table.Thead>
          {/* ISP */}
          <Table.Tr>
            <Table.Th>Имя устройства</Table.Th>
            <Table.Th>IP-адрес</Table.Th>
            <Table.Th>Шлюз по умолчанию</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td rowSpan={3}>ISP</Table.Td>
            <Table.Td>
              <input
                type="text"
                name="isp_row1"
                value={netWorkConfig.isp_row1}
                onChange={handleChange}
              />
            </Table.Td>
            <Table.Td rowSpan={3}>{netWorkConfig.isp_row1}</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>
              <input
                type="text"
                name="isp_row2"
                value={netWorkConfig.isp_row2}
                onChange={handleChange}
              />
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>
              <input
                type="text"
                name="isp_row3"
                value={netWorkConfig.isp_row3}
                onChange={handleChange}
              />
            </Table.Td>
          </Table.Tr>

          {/* HQ-RTR */}
          <Table.Tr>
            <Table.Td rowSpan={5}>HQ-RTR</Table.Td>
            <Table.Td>
              {" "}
              <input
                type="text"
                name="hqRTR_row1"
                value={netWorkConfig.hqRTR_row1}
                onChange={handleChange}
              />
            </Table.Td>
            <Table.Td rowSpan={5}>
              {netWorkConfig.isp_row2.split("/")[0]}
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>
              <input
                type="text"
                name="hqRTR_row2"
                value={netWorkConfig.hqRTR_row2}
                onChange={handleChange}
              />
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>
              <input
                type="text"
                name="hqRTR_row3"
                value={netWorkConfig.hqRTR_row3}
                onChange={handleChange}
              />
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>
              <input
                type="text"
                name="hqRTR_row4"
                value={netWorkConfig.hqRTR_row4}
                onChange={handleChange}
              />
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>
              <input
                type="text"
                name="hqRTR_row5"
                value={netWorkConfig.hqRTR_row5}
                onChange={handleChange}
              />
            </Table.Td>
          </Table.Tr>

          {/* BR-RTR */}
          <Table.Tr>
            <Table.Td rowSpan={3}>BR-RTR</Table.Td>
            <Table.Td>
              <input
                type="text"
                name="brRTR_row1"
                value={netWorkConfig.brRTR_row1}
                onChange={handleChange}
              />
            </Table.Td>
            <Table.Td rowSpan={3}>
              {netWorkConfig.isp_row3.split("/")[0]}
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>
              <input
                type="text"
                name="brRTR_row2"
                value={netWorkConfig.brRTR_row2}
                onChange={handleChange}
              />
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>
              <input
                type="text"
                name="brRTR_row3"
                value={netWorkConfig.brRTR_row3}
                onChange={handleChange}
              />
            </Table.Td>
          </Table.Tr>

          {/* HQ-SRV */}
          <Table.Tr>
            <Table.Td>HQ-SRV</Table.Td>
            <Table.Td>
              <input
                type="text"
                name="hqSRV_row1"
                value={netWorkConfig.hqSRV_row1}
                onChange={handleChange}
              />
            </Table.Td>
            <Table.Td>{netWorkConfig.hqRTR_row3.split("/")[0]}</Table.Td>
          </Table.Tr>

          {/* HQ-CLI */}
          <Table.Tr>
            <Table.Td>HQ-CLI</Table.Td>
            <Table.Td>
              <input
                type="text"
                name="hqCLI_row1"
                value={netWorkConfig.hqCLI_row1}
                onChange={handleChange}
              />
            </Table.Td>
            <Table.Td>{netWorkConfig.hqRTR_row4.split("/")[0]}</Table.Td>
          </Table.Tr>

          {/* BR-SRV  */}
          <Table.Tr>
            <Table.Td>BR-SRV</Table.Td>
            <Table.Td>
              <input
                type="text"
                name="brSRV_row1"
                value={netWorkConfig.brSRV_row1}
                onChange={handleChange}
              />
            </Table.Td>
            <Table.Td>{netWorkConfig.brRTR_row2.split("/")[0]}</Table.Td>
          </Table.Tr>

          {/* Задание 3  */}
          <Table.Tr>
            <Table.Td fw={"bold"} colSpan={3}>
              Задание 3. Создание пользователей
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Пользователь 1</Table.Td>
            <Table.Td>
              <input
                type="text"
                name="user1_name"
                value={netWorkConfig.user1_name}
                onChange={handleChange}
              />
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Пароль Пользователя 1</Table.Td>
            <Table.Td>
              <input
                type="text"
                name="user1_password"
                value={netWorkConfig.user1_password}
                onChange={handleChange}
              />
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>ID Пользователя 1</Table.Td>
            <Table.Td>
              <input
                type="text"
                name="user1_id"
                value={netWorkConfig.user1_id}
                onChange={handleChange}
              />
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Пользователь 2</Table.Td>
            <Table.Td>
              <input
                type="text"
                name="user1_name"
                value={netWorkConfig.user1_name}
                onChange={handleChange}
              />
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Пароль Пользователя 2</Table.Td>
            <Table.Td>
              <input
                type="text"
                name="user1_password"
                value={netWorkConfig.user1_password}
                onChange={handleChange}
              />
            </Table.Td>
          </Table.Tr>

          {/* Задание 5  */}
          <Table.Tr>
            <Table.Td fw={"bold"} colSpan={3}>
              Задание 5. Настройка SSH
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Порт</Table.Td>
            <Table.Td>
              <input
                type="text"
                name="ssh_port"
                value={netWorkConfig.ssh_port}
                onChange={handleChange}
              />
            </Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
      <Button
        variant="filled"
        color="gray"
        onClick={handleReset}
        style={{
          margin: "14px auto",
          display: "block",
          border: `1px solid ${theme.colors.gray[7]}`,
        }}
      >
        Сбросить настройки
      </Button>
    </>
  );
}
