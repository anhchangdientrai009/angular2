export interface Comment {
    postId: number;
    id: number;
    name: string;
    body: string;
}

export class Post {
    public id: number; 
    public userId: number;
    public title: string;
    public body: string;
    public comments: Comment[];
}