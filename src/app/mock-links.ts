import { Link } from "./models/navigation-layout";
import { Roles } from "./models/role";

// Helper Enum for LinkIds
export enum Links {
    Dashboard = 1,
    PendingAccess = 11,
    PermissionGroups = 12,
    UserManagement = 13,
    UserRoster = 14,
    ComapnyPo = 15,
    Applications = 20,
    UploadApplication = 21,
    PendingApplications = 22,
    Frameworks = 30,
    UploadFramework = 31,
    PendingFramworks = 32,
    MyDocuments = 40,
    Library = 41,
    Tickets = 50,
};

/**
 * Defines each Link one time, allowing Links to ne reused between Role/Layouts
 * Link data would be stored in Database
 */
export const LINKS: Link[] = [
    {
        id: 1,
        display: 'DASHBOARD',
        url: '/dashboard',
        roles: [Roles.Administrator, Roles.Download, Roles.FullControl, Roles.HelpDesk, Roles.Read],
        icon: 'space_dashboard',
    },
    {
        id: 11,
        display: 'PENDING ACCESS',
        url: '/users/pending',
        roles: [Roles.Administrator, Roles.HelpDesk],
        icon: 'person_add_alt',
    },
    {
        id: 12,
        display: 'PERMISSION GROUPS',
        url: '/permissions',
        roles: [Roles.Administrator, Roles.FullControl],
        icon: 'work_history',
    },
    {
        id: 13,
        display: 'USER MANAGEMENT',
        url: '/users',
        roles: [Roles.Administrator, Roles.FullControl, Roles.HelpDesk],
        icon: 'switch_account',
    },
    {
        id: 14,
        display: 'USER ROSTER',
        url: '/users/roster',
        roles: [Roles.Administrator, Roles.Download, Roles.FullControl, Roles.HelpDesk, Roles.Read],
        icon: 'switch_account',
    },
    {
        id: 15,
        display: 'COMPANY / PO',
        url: '/companypo',
        roles: [Roles.HelpDesk],
        icon: 'switch_account',
    },
    {
        id: 20,
        display: 'APPLICATIONS',
        url: '/applications',
        roles: [Roles.Administrator, Roles.Download, Roles.FullControl, Roles.HelpDesk, Roles.Read],
        icon: 'web_asset',
    },
    {
        id: 21,
        display: 'UPLOAD APPLICATION',
        url: '/applications/upload',
        roles: [Roles.Administrator],
        icon: 'note_add',
    },
    {
        id: 22,
        display: 'PENDING APPLICATION',
        url: '/applications/pending',
        roles: [Roles.HelpDesk],
        icon: 'web_asset',
    },
    {
        id: 30,
        display: 'FRAMEWORKS',
        url: '/frameworks',
        roles: [Roles.Administrator, Roles.Download, Roles.FullControl, Roles.HelpDesk, Roles.Read],
        icon: 'integration_instructions',
    },
    {
        id: 31,
        display: 'UPLOAD FRAMEWORK',
        url: '/frameworks/upload',
        roles: [Roles.Administrator],
        icon: 'note_add',
    },
    {
        id: 32,
        display: 'PENDING FRAMEWORKS',
        url: '/frameworks/pending',
        roles: [Roles.HelpDesk],
        icon: 'integration_instructions',
    },
    {
        id: 40,
        display: 'MY DOCUMENTS',
        url: '/documents/my',
        roles: [Roles.Administrator, Roles.Download, Roles.FullControl],
        icon: 'description',
    },
    {
        id: 41,
        display: 'LIBRARY',
        url: '/documents',
        roles: [Roles.Administrator, Roles.Download, Roles.FullControl, Roles.HelpDesk, Roles.Read],
        icon: 'auto_stories',
    },
    {
        id: 50,
        display: 'TICKETS',
        url: '/helpdesk/tickets',
        roles: [Roles.Administrator, Roles.FullControl, Roles.HelpDesk],
        icon: 'checklist_rtl',
    },
];

