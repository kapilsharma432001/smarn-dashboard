export type MemoryCategory = 
    | "personal"
    | "work"
    | "learning"
    | "idea"
    | "task"
    | "reflection"
    | "unknown";

export type MemoryStatus = "active" | "archived" | "deleted";

export type ImportanceScore = 1 | 2 | 3 | 4 | 5;

export type Memory = {
    id: string;
    title: string;
    content: string;
    category: MemoryCategory;
    status: MemoryStatus;
    tags: string[];
    importanceScore: ImportanceScore;
    createdAt: string;
    updatedAt: string;
}