import MemoryCard from "./components/MemoryCard";
import type { Memory } from "./types/memory";

function App() {
  const memory: Memory = {
    id: "mem_1",
    title: "Learn React Props",
    content: "Props let parent components pass data to child components.",
    category: "learning",
    status: "active",
    tags: ["react", "props", "typescript"],
    importanceScore: 5,
    createdAt: "2026-06-27T10:00:00Z",
    updatedAt: "2026-06-27T10:00:00Z",
  };
  return (
    <main>
      <h1>SMARN Dashboard</h1>
      <p>A second-brain memory dashboard built with React and TypeScript.</p>  
      <MemoryCard memory={memory} />
    </main>
    );
}

export default App;
