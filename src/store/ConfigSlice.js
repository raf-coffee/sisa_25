import { createSlice } from "@reduxjs/toolkit";

const initialConfig = {
  /* ISP */
  isp_row1: "DHCP",
  isp_row2: "172.16.4.1/28",
  isp_row3: "172.16.5.1/28",

  /* HQ-RTR */
  hqRTR_row1: "172.16.4.2/28",
  hqRTR_row2: "192.168.99.1/29",
  hqRTR_row3: "192.168.100.1/28",
  hqRTR_row4: "192.168.200.1/28",
  hqRTR_row5: "10.5.5.1/30",

  /* BR-RTR */
  brRTR_row1: "172.16.5.2/28",
  brRTR_row2: "192.168.0.1/28",
  brRTR_row3: "10.5.5.2/30",

  /* HQ-SRV  */
  hqSRV_row1: "192.168.100.2/28",

  /* HQ-CLI */
  hqCLI_row1: "192.168.200.2/28",

  /* BR-SRV  */
  brSRV_row1: "192.168.0.2/28",

  /* интерфейсы  */
  ens18: "ens18",
  ens19: "ens19",
  ens20: "ens20",

  /* Задание 3  */
  user1_name: "sshuser",
  user1_password: "P@$$word",
  user1_id: "1010",
  user2_name: "net_admin",
  user2_password: "P@ssw0rd",

  /* Задание 5 */
  ssh_port: "2025",
  ssh_user: "sshuser",
  ssh_user_password: "P@$$word",
  max_auth: 2,
};

const netWorkConfig = createSlice({
  name: "config",
  initialState: initialConfig,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    resetConfig: () => initialConfig,
  },
});

export const { updateField, resetConfig } = netWorkConfig.actions;
export default netWorkConfig.reducer;
