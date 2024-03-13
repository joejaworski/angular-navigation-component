import { Links } from "./mock-links";
import { NavigationLayout } from "./models/navigation-layout";
import { Roles } from "./models/role";

/**
 * Define a Navigation Layout for each Role
 * Reuse Links
 * Links define Role/Permission data
 * Layouts define Nesting (Headers) and Order
 */
const ADMIN_LAYOUT: NavigationLayout = {
    id: 1,
    roleId: Roles.Administrator,
    nodes: [
        {            
            id: 1,
            display: 'DASHBOARD',
            order: 0,
            linkId: Links.Dashboard,
            link: null,
            nodes: []
        },
        {            
            id: 3,
            display: 'USER MANAGEMENT',
            order: 1,
            linkId: null,
            link: null,
            nodes: [
                {
                    id: 4,
                    display: null,
                    order: 1,
                    linkId: Links.PendingAccess,
                    link: null,
                    nodes: []
                },
                {
                    id: 5,
                    display: null,
                    order: 2,
                    linkId: Links.PermissionGroups,
                    link: null,
                    nodes: []
                },
                {
                    id: 6,
                    display: null,
                    order: 3,
                    linkId: Links.UserManagement,
                    link: null,
                    nodes: []
                },
                {
                    id: 7,
                    display: null,
                    order: 4,
                    linkId: Links.UserRoster,
                    link: null,
                    nodes: []
                },
            ]
        },
        {            
            id: 7,
            display: 'APPLICATION MANAGEMENT',
            order: 2,
            linkId: null,
            link: null,
            nodes: [
                {
                    id: 8,
                    display: null,
                    order: 1,
                    linkId: Links.Applications,
                    link: null,
                    nodes: []
                },
                {
                    id: 9,
                    display: null,
                    order: 2,
                    linkId: Links.UploadApplication,
                    link: null,
                    nodes: []
                },
            ]
        },
        {            
            id: 10,
            display: 'FRAMEWORK MANAGEMENT',
            order: 3,
            linkId: null,
            link: null,
            nodes: [
                {
                    id: 11,
                    display: null,
                    order: 1,
                    linkId: Links.Frameworks,
                    link: null,
                    nodes: []
                },
                {
                    id: 12,
                    display: null,
                    order: 2,
                    linkId: Links.UploadFramework,
                    link: null,
                    nodes: []
                },
            ]
        },
        {            
            id: 13,
            display: 'DOCUMENT LIBRARY',
            order: 4,
            linkId: null,
            link: null,
            nodes: [
                {
                    id: 14,
                    display: null,
                    order: 1,
                    linkId: Links.MyDocuments,
                    link: null,
                    nodes: []
                },
                {
                    id: 15,
                    display: null,
                    order: 2,
                    linkId: Links.Library,
                    link: null,
                    nodes: []
                },
            ]
        },
        {            
            id: 16,
            display: 'INTERNAL HELP DESK',
            order: 5,
            linkId: null,
            link: null,
            nodes: [
                {
                    id: 17,
                    display: null,
                    order: 1,
                    linkId: Links.Tickets,
                    link: null,
                    nodes: []
                },
            ]
        },
    ]
};

const FC_LAYOUT: NavigationLayout = {
    id: 2,
    roleId: Roles.FullControl,
    nodes: [
        {            
            id: 1,
            display: 'DASHBOARD',
            order: 0,
            linkId: Links.Dashboard,
            link: null,
            nodes: []
        },
        {            
            id: 3,
            display: 'USER MANAGEMENT',
            order: 1,
            linkId: null,
            link: null,
            nodes: [
                {
                    id: 4,
                    display: null,
                    order: 1,
                    linkId: Links.PermissionGroups,
                    link: null,
                    nodes: []
                },
                {
                    id: 5,
                    display: null,
                    order: 2,
                    linkId: Links.UserManagement,
                    link: null,
                    nodes: []
                },
                {
                    id: 6,
                    display: null,
                    order: 3,
                    linkId: Links.UserRoster,
                    link: null,
                    nodes: []
                },
            ]
        },
        {            
            id: 7,
            display: 'APPLICATION MANAGEMENT',
            order: 2,
            linkId: null,
            link: null,
            nodes: [
                {
                    id: 8,
                    display: null,
                    order: 1,
                    linkId: Links.Applications,
                    link: null,
                    nodes: []
                },
            ]
        },
        {            
            id: 9,
            display: 'FRAMEWORK MANAGEMENT',
            order: 3,
            linkId: null,
            link: null,
            nodes: [
                {
                    id: 10,
                    display: null,
                    order: 1,
                    linkId: Links.Frameworks,
                    link: null,
                    nodes: []
                },
            ]
        },
        {            
            id: 11,
            display: 'DOCUMENT LIBRARY',
            order: 4,
            linkId: null,
            link: null,
            nodes: [
                {
                    id: 12,
                    display: null,
                    order: 1,
                    linkId: Links.MyDocuments,
                    link: null,
                    nodes: []
                },
                {
                    id: 13,
                    display: null,
                    order: 2,
                    linkId: Links.Library,
                    link: null,
                    nodes: []
                },
            ]
        },
        {            
            id: 14,
            display: 'INTERNAL HELP DESK',
            order: 5,
            linkId: null,
            link: null,
            nodes: [
                {
                    id: 15,
                    display: null,
                    order: 1,
                    linkId: Links.Tickets,
                    link: null,
                    nodes: []
                },
            ]
        },
    ]    
};

const DOWNLOAD_LAYOUT: NavigationLayout = {
    id: 3,
    roleId: Roles.Download,
    nodes: [
        {            
            id: 1,
            display: 'DASHBOARD',
            order: 1,
            linkId: Links.Dashboard,
            link: null,
            nodes: []
        },
        {            
            id: 2,
            display: 'APPLICATIONS',
            order: 2,
            linkId: Links.Applications,
            link: null,
            nodes: []
        },
        {            
            id: 3,
            display: 'FRAMEWORKS',
            order: 3,
            linkId: Links.Frameworks,
            link: null,
            nodes: []
        },
        {            
            id: 4,
            display: 'MY DOCUMENTS',
            order: 4,
            linkId: Links.MyDocuments,
            link: null,
            nodes: []
        },
        {            
            id: 5,
            display: 'LIBRARY',
            order: 5,
            linkId: Links.Library,
            link: null,
            nodes: []
        },
        {            
            id: 6,
            display: 'USER ROSTER',
            order: 6,
            linkId: Links.UserRoster,
            link: null,
            nodes: []
        },
    ]
};

const HELPDESK_LAYOUT: NavigationLayout = {
    id: 4,
    roleId: Roles.HelpDesk,
    nodes: [
        {            
            id: 1,
            display: 'DASHBOARD',
            order: 1,
            linkId: Links.Dashboard,
            link: null,
            nodes: []
        },
        {            
            id: 2,
            display: 'PENDING ACTION ITEMS',
            order: 2,
            linkId: null,
            link: null,
            nodes: [
                {
                    id: 3,
                    display: "PENDING USERS",
                    order: 1,
                    linkId: Links.PendingAccess,
                    link: null,
                    nodes: [],
                },
                {
                    id: 4,
                    display: null,
                    order: 2,
                    linkId: Links.PendingApplications,
                    link: null,
                    nodes: []
                },
                {
                    id: 5,
                    display: null,
                    order: 3,
                    linkId: Links.PendingFramworks,
                    link: null,
                    nodes: []
                },
            ]
        },
        {            
            id: 6,
            display: 'DIGITAL ASSETS',
            order: 3,
            linkId: null,
            link: null,
            nodes: [
                {
                    id: 7,
                    display: null,
                    order: 1,
                    linkId: Links.Applications,
                    link: null,
                    nodes: []
                },
                {
                    id: 8,
                    display: null,
                    order: 2,
                    linkId: Links.Frameworks,
                    link: null,
                    nodes: []
                },
                {
                    id: 9,
                    display: "DOCUMENT LIBRARY",
                    order: 2,
                    linkId: Links.Library,
                    link: null,
                    nodes: []
                },
            ]
        },
        {            
            id: 10,
            display: 'COMPANIES, PO, USERS',
            order: 4,
            linkId: null,
            link: null,
            nodes: [
                {
                    id: 11,
                    display: null,
                    order: 1,
                    linkId: Links.UserManagement,
                    link: null,
                    nodes: []
                },
                {
                    id: 12,
                    display: null,
                    order: 2,
                    linkId: Links.ComapnyPo,
                    link: null,
                    nodes: []
                },
                {
                    id: 13,
                    display: null,
                    order: 3,
                    linkId: Links.UserRoster,
                    link: null,
                    nodes: []
                },
            ]
        },
        {            
            id: 14,
            display: 'HELP DESK',
            order: 5,
            linkId: null,
            link: null,
            nodes: [
                {
                    id: 15,
                    display: null,
                    order: 1,
                    linkId: Links.Tickets,
                    link: null,
                    nodes: []
                },
            ]
        },
    ]    
};

const READ_LAYOUT: NavigationLayout = {
    id: 5,
    roleId: Roles.Read,
    nodes: [
        {            
            id: 1,
            display: 'DASHBOARD',
            order: 1,
            linkId: Links.Dashboard,
            link: null,
            nodes: []
        },
        {            
            id: 2,
            display: 'APPLICATIONS',
            order: 2,
            linkId: Links.Applications,
            link: null,
            nodes: []
        },
        {            
            id: 3,
            display: 'FRAMEWORKS',
            order: 3,
            linkId: Links.Frameworks,
            link: null,
            nodes: []
        },
        {            
            id: 4,
            display: 'LIBRARY',
            order: 4,
            linkId: Links.Library,
            link: null,
            nodes: []
        },
        {            
            id: 5,
            display: 'USER ROSTER',
            order: 5,
            linkId: Links.UserRoster,
            link: null,
            nodes: []
        },        
    ]    
};

// Provide all the Layouts in one mock data set
export const NAVIGATION_LAYOUTS: NavigationLayout[] = [
    ADMIN_LAYOUT,
    FC_LAYOUT,
    DOWNLOAD_LAYOUT,
    HELPDESK_LAYOUT,
    READ_LAYOUT
];

// An empty layout
export const DEFAULT_LAYOUT: NavigationLayout = {
    id: 0,
    roleId: 0,
    nodes: []
}