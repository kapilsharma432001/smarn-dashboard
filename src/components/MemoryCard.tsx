import type { Memory } from "../types/memory";

function MemoryCard() {
    const memory: Memory = {
        id: "mem_1",
        title: "Learn React Components",
        content: "Components help us split UI into reusable pieces.",
        category: "learning",
        status: "active",
        tags: ["react", "components"],
        importanceScore: 4,
        createdAt: "2026-06-27T10:00:00Z",
        updatedAt: "2026-06-27T10:00:00Z",
    };
    return (
        <article>
            <h2>{memory.title}</h2>
            <p>{memory.content}</p>
            <p>Category: {memory.category}</p>
            <p>Status: {memory.status}</p>
            <p>Importance: {memory.importanceScore}/5</p>
            <p>Tags: {memory.tags.join(", ")}</p>
        </article>
    )
}

export default MemoryCard;