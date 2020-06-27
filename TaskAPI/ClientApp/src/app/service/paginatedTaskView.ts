import { TaskItem } from "./task.service";

export interface PaginatedTaskView {
    currentPage: number;
    totalItems: number;
    itemsPerPage: number;
    totalPages: number;
    items: TaskItem[];
}
