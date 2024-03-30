interface Block {
    _key: string;
    markDefs?: any[]; // Define markDefs type if needed
    children?: Block[]; // Define children type if needed
    _type: string;
    style: string;
    listItem?: string;
    level?: number;
}


export interface ProductProps{
    position: string;
    price: number;
    quantity: number;
    ratings: number;
    rowprice: number;
    description:String;
    brand:String;
    image: {
        asset: {
            _ref: string;
            _type: string;
        };
        _type: string;
    };
    slug: {
        current: string;
        _type: string;
    };
    category: {
        _ref: string;
        _type: string;
        _key: string;
    }[];
    isnew:boolean;
    body: Block[];
    title: string;
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;

}