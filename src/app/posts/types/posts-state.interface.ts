import { PostInterface } from "./post.interface";

// this is one state to manage
export interface PostsStateInterface {
    isLoading: boolean;
    posts: PostInterface[];
    error: string | null;
}
