import { useState } from "react";
import { todosT } from "./types/todo";
import Layout from "./Layout";
import InputBar from "./components/InputBar";

function App() {
  const [todos, setTodos] = useState<todosT[]>([]);
  const [filter, setFilter] = useState<"all" | "uncompleted">("all");

  return (
    <Layout>
      <InputBar todos={todos} setTodos={setTodos} />
    </Layout>
  );
}

export default App;
