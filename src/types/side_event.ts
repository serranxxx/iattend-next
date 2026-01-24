export type SideEventBody = {
    font: string;
    hour: string;
    image: string;
    title: {
        font: string;
        size: number;
        weight: number;
        opacity: number;
        line_height: number
    };
    address: SideAddress
}

export type SideEvent = {
    id: number;
    created_at: string;
    invitation_id: string;
    date: string;
    name: string;
    body: SideEventBody
}


export type SideAddress = {
    city: string;
    state: string;
    number: string;
    street: string;
    country: string;
    zipcode: string;
    neighborhood: string;
}

export type SideAddress2 = {
    address: {
        city: string;
        state: string;
        number: string;
        street: string;
        country: string;
        zipcode: string;
        neighborhood: string;
    }
}