export interface Customer {
    id: string;
    name: string;
    company: string;
    email: string;
    phone: string;
    address: string;
    taxId: string;
    status: string;
    notes: string;
}

export type Comment = {
    id: string;
    from: string;
    message: string;
    dateTime: Date;
}

export type Email = {
    id: string;
    to: string;
    subject: string;
    body: string;
    dateTime: Date;
};
