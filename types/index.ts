export type CreateUserParams = {
    id: string;
    clerkId: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    photo: string;
};

export type UpdateUserParams = {
    firstName: string;
    lastName: string;
    username: string;
    photo: string;
};
