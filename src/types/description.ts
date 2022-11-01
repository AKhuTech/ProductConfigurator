export type TVariant = {
    name: string;
    image: string;
    description: string[];
};

export type TDescription = {
    name: string;
    description: string[];
    variants: TVariant[];
    tecspecs?: {[key: string]: string}[];
    contacts: string[];
    validity: string;
    payment: string;
    delivery: string;
    warranty: string;
    comment: string;
};

export type TDescriptionArray = {
    name: string;
    description: string[];
    variants: TVariant[];
    tecspecs?: {[key: string]: string}[];

}