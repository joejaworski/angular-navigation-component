import { Roles } from "./models/role";
import { User } from "./models/user";
import { ROLES } from "./mock-roles";

/**
 * List of Users that would be stored in DB
 */
export const USERS: User[] = [
    {
        id: 1,
        name: 'Joe A.',
        role: ROLES[0]
    },
    {
        id: 2,
        name: 'Joe FC',
        role: ROLES[1]
    },
    {
        id: 3,
        name: 'Joe D.',
        role: ROLES[2]
    },
    {
        id: 4,
        name: 'Joe HD',
        role: ROLES[3]
    },
    {
        id: 5,
        name: 'Joe R.',
        role: ROLES[4]
    },
];
