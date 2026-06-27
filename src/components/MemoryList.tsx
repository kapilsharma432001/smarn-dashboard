import type { Memory } from "../types/memory";
import MemoryCard from "./MemoryCard";

type MemoryListProps = {
    memories: Memory[];
};

function MemoryList({ memories }: MemoryListProps){
    if (memories.length === 0){
        return <p>No memories found.</p>
    }
    return (
        <section>
            {
                memories.map((memory) => (
                    <MemoryCard key={memory.id} memory={memory}/>
                ))
            }
        </section>
    );
}

export default MemoryList;