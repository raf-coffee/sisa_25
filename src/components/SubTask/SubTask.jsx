import { Paper, Stack, Text, useMantineTheme } from "@mantine/core";

export default function SubTask({ machine, children }) {
  const theme = useMantineTheme();

  return (
    <Paper withBorder radius="md" p="lg" bg={theme.colors.gray[9]}>
      <Stack>
        <Text>
          На машине{" "}
          <Text span fw={"bold"}>
            {machine}
          </Text>
          :
        </Text>
        {children}
      </Stack>
    </Paper>
  );
}
