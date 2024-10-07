import { useState } from "react";
import { todosT } from "./types/todo";
import layout from "./Layout";

function App() {
  const [todos, setTodos] = useState<todosT[]>([]);

  return (
    <Layout>
      <span>test</span>
    </Layout>
  );
}

export default App;
