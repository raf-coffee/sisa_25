import { Paper, Stack, Text } from "@mantine/core";

export default function SubTask({ machine, children }) {
  return (
    <Paper withBorder radius="md" p="lg">
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
