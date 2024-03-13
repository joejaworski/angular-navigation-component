import { Role } from "./models/role";

/**
 * List of Roles that woule be stored in the DB
 */
export const ROLES: Role[] = [
    {
        id: 1,
        name: 'Administrator'
    },
    {
        id: 2,
        name: 'Full Control'
    },
    {
        id: 3,
        name: 'Download'
    },
    {
        id: 4,
        name: 'Help Desk'
    },
    {
        id: 5,
        name: 'Read'
    },
];
