export interface Role {
    id?: number;
    name: string;
}

export enum Roles {
    Administrator = 1,
    FullControl = 2,
    Download = 3,
    HelpDesk = 4,
    Read = 5,
}