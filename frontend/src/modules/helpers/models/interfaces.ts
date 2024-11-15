
export interface User {
    username: string;
    id: number;
    email: string;
}

export interface Home {
    id: number;
    street_address: string;
    state: string;
    zip: string;
    sqft: number;
    beds: number;
    baths: number;
    list_price: number;
}

export interface HomesResponse {
    data: Home[];
    total?: number;
    page: string;
    pageSize: number;
}

