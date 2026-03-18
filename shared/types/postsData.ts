export type Posts = Postx[]

export interface Postx {
    PostId: string;
    TitleData: string | null;
    PublishData: Date | string;
    ShorMessage: string | null;
    Message: string | null;
}
