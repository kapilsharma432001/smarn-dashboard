function MemoryCard() {
    const memory = {
        id: "mem_1",
        title: "Learn React Components",
        content: "Components help us split UI into reusable pieces.",
        category: "learning",
        status: "active",
    };
    return (
        <article>
            <h2>{memory.title}</h2>
            <p>{memory.content}</p>
            <p>Category: {memory.category}</p>
            <p>Status: {memory.status}</p>
        </article>
    )
}

export default MemoryCard;