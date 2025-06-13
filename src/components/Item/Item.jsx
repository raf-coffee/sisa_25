import React, { useState } from "react";
import {
  Group,
  Text,
  CopyButton,
  ActionIcon,
  Tooltip,
  Checkbox,
  Paper,
  useMantineTheme,
} from "@mantine/core";
import { IconCopy, IconCheck } from "@tabler/icons-react";

const Item = ({ content, children }) => {
  const theme = useMantineTheme();
  const [completed, setCompleted] = useState(false);

  const textColor = completed ? theme.colors.gray[5] : theme.colors.dark[5];

  return (
    <Paper
      shadow={completed ? "xs" : "sm"}
      radius="lg"
      withBorder
      p="xs"
      style={{
        backgroundColor: completed ? theme.colors.gray[3] : "white",
        transition: "all 300ms ease",
      }}
    >
      <Group spacing="sm">
        <Text
          style={{
            flex: 1,
            color: textColor,
            textDecoration: completed ? "line-through" : "none",
            transition: "all 300ms ease",
          }}
        >
          {content}
        </Text>
        <CopyButton value={content}>
          {({ copied, copy }) => (
            <Tooltip label={copied ? "Скопировано" : "Скопировать"} withArrow>
              <ActionIcon
                color={copied ? "teal" : "gray"}
                variant="subtle"
                onClick={copy}
              >
                {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
              </ActionIcon>
            </Tooltip>
          )}
        </CopyButton>
        <Tooltip label={completed ? "Отменить" : "Выполнить"} withArrow>
          <Checkbox
            size="md"
            checked={completed}
            onChange={(e) => setCompleted(e.currentTarget.checked)}
            color="green"
          />
        </Tooltip>
      </Group>
      {children}
    </Paper>
  );
};

export default Item;
