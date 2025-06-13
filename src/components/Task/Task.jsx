import { Stack, Title } from "@mantine/core";

export default function Task({ title, children }) {
  return (
    <Stack
      style={{
        paddingTop: "28px",
        paddingBottom: "28px",
      }}
    >
      <Title order={2}>{title}</Title>
      {children}
    </Stack>
  );
}
