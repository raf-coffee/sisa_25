import { Box, useMantineTheme, Container, Title } from "@mantine/core";
import Task2 from "./components/Task2/Task2";
import Task3 from "./components/Task3/Task3";
import Task4 from "./components/Task4/Task4";
import Task5 from "./components/Task5/Task5";
import Task6 from "./components/Task6/Task6";
import Task7 from "./components/Task7/Task7";
import Task8 from "./components/Task8/Task8";
import Task9 from "./components/Task9/Task9";
import Task10 from "./components/Task10/Task10";
import Task11 from "./components/Task11/Task11";
import Task12 from "./components/Task12/Task12";
import Task13 from "./components/Task13/Task13";
import Task14 from "./components/Task14/Task14";
import Task15 from "./components/Task15/Task15";
import Task16 from "./components/Task16/Task16";
import Config from "./components/Config/Config";

function App() {
  const theme = useMantineTheme();

  return (
    <Box bg={theme.colors.gray[8]} c={theme.colors.gray[4]}>
      <title>Мануал 2025</title>
      <Container size={"sm"} pt={"lg"} pb={"lg"}>
        {/* Настройки */}
        <Config />

        {/* Модуль 1 */}
        <Title order={1} style={{ textAlign: "center" }}>
          Модуль 1
        </Title>
        <Task2 />
        <Task3 />
        <Task4 />
        <Task5 />
        <Task6 />
        <Task7 />
        <Task8 />
        <Task9 />
        <Task10 />
        <Task11 />

        {/* Модуль 2 */}
        <Title order={1} style={{ textAlign: "center" }}>
          Модуль 2
        </Title>
        <Task12 />
        <Task13 />
        <Task14 />
        <Task15 />
        <Task16 />
      </Container>
    </Box>
  );
}

export default App;
