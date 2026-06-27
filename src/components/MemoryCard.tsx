import type { Memory } from "../types/memory";

// This says: MemoryCard just receive one prop called memory.
// That memory just follow the Memory type.
type MemoryCardProps = {
    memory: Memory;
};

function MemoryCard({ memory }: MemoryCardProps) {
    return (
        <article>
            <h2>{memory.title}</h2>
            <h3>{memory.id}</h3>
            <p>{memory.content}</p>
            <p>Category: {memory.category}</p>
            <p>Status: {memory.status}</p>
            <p>Importance: {memory.importanceScore}/5</p>
            <p>Tags: {memory.tags.join(", ")}</p>
        </article>
    );
}

export default MemoryCard;