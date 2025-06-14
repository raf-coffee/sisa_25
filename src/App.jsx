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

function App() {
  const theme = useMantineTheme();

  return (
    <Box bg={theme.colors.indigo[0]}>
      <title>Демо экзамен 2025</title>
      <Container size={"sm"}>
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
      </Container>
    </Box>
  );
}

export default App;
