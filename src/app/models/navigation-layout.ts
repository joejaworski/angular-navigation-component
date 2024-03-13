export interface Link {
    id: number;
    display: string;
    url: string | null;
    roles: number[];
    icon: string;
}

export interface NavigationNode {
    id: number
    display: string | null;
    order: number;
    linkId: number | null;
    link: Link | null;
    nodes: NavigationNode[];
}

export interface NavigationLayout {
    id: number;
    roleId: number;
    nodes: NavigationNode[];
}