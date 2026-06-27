import MemoryList from "./components/MemoryList";
import type { Memory } from "./types/memory";

function App() {
  const memories: Memory[] = [
    {
      id: "mem_1",
      title: "Learn React Props",
      content: "Props let parent components pass data to child components.",
      category: "learning",
      status: "active",
      tags: ["react", "props", "typescript"],
      importanceScore: 5,
      createdAt: "2026-06-27T10:00:00Z",
      updatedAt: "2026-06-27T10:00:00Z",
    },
    {
      id: "mem_2",
      title: "Understand List Rendering",
      content: "React can render arrays using map.",
      category: "learning",
      status: "active",
      tags: ["react", "lists"],
      importanceScore: 4,
      createdAt: "2026-06-27T11:00:00Z",
      updatedAt: "2026-06-27T11:00:00Z",
    },
    {
      id: "mem_3",
      title: "Backend to Frontend Thinking",
      content: "Frontend apps react to user actions and state changes.",
      category: "reflection",
      status: "archived",
      tags: ["frontend", "mental-model"],
      importanceScore: 3,
      createdAt: "2026-06-27T12:00:00Z",
      updatedAt: "2026-06-27T12:00:00Z",
    },
  ];
  return (
    <main>
      <h1>SMARN Dashboard</h1>
      <p>A second-brain memory dashboard built with React and TypeScript.</p>  
      <MemoryList memories={memories}/>
    </main>
    );
}

export default App;
