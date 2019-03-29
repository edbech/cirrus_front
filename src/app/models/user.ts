export interface IUser{

    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email:string;
    aboutMe:string;
    token? :string;
    score: number;
    securityquestion: string;
    securityanswer: string;
    avatar: string;
    retired: number;


}