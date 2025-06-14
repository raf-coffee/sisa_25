import Task from "../Task/Task";
import Item from "../Item/Item";
import SubTask from "../SubTask/SubTask";

export default function Task12() {
  return (
    <Task title={"Задание 9. Установка Яндекс Браузера"}>
      {/* HQ-CLI */}
      <SubTask machine={"HQ-CLI"}>
        <Item content="su -" />
        <Item content="apt-get install -y yandex-browser-stable" />
        <Item content="Скриншот в Рисунок 55" />
      </SubTask>
    </Task>
  );
}
