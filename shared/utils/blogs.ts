import type { Posts } from "../types/postsData"

export const getPosts = async () => {
    return await fetch("https://nxus-api-blog.nxus-dev.workers.dev/api/getPost/all")
        .then(res => res.json())
        .then((data: Posts) => data);
}

export const formatDate = (date: string | Date | undefined) => {
    if (!date) return;
    return new Intl.DateTimeFormat("es-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    }).format(new Date(date))
}
