export type Posts = Post[]

export interface Post {
    PostId: string;
    TitleData: string | null;
    PublishData: Date | string;
    ShorMessage: string | null;
    Message: string | null;
}
