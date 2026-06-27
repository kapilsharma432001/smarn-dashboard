import { useState } from "react";
import MemoryList from "./components/MemoryList";
import type { Memory } from "./types/memory";

const initialMemories: Memory[] = [
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

function App() {
  const [memories, setMemories] = useState<Memory[]>(initialMemories);

  function handleAddSampleMemory(){
    const newMemory: Memory = {
      id: `mem_${Date.now()}`,
      title: "New temporary memory",
      content: "This memory was added using useState.",
      category: "idea",
      status: "active",
      tags: ["react", "state"],
      importanceScore: 3,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    setMemories((currentMemories) => [...currentMemories, newMemory]);
  }

  return (
    <main>
      <h1>SMARN Dashboard</h1>
      <p>A second-brain memory dashboard built with React and TypeScript.</p>  

      <button onClick={handleAddSampleMemory}>Add Sample Memory</button>
      <MemoryList memories={memories}/>
    </main>
    );
}

export default App;
