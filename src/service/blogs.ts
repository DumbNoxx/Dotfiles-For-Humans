import type { Posts } from "@/models/postsData";
import { ref } from "vue";

export const PostsData = ref<Posts | null>(null);
fetch("https://nxus-api-blog.nxus-dev.workers.dev/api/getPost/all")
    .then(res => res.json())
    .then((data: Posts) => {
        PostsData.value = data;
    });;

export const formatDate = (date: string | Date | undefined) => {
    if (!date) return;
    return new Intl.DateTimeFormat("us-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    }).format(new Date(date))
}