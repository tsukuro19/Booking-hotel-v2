export class HotelDTO{
    id:number;
    name_hotel: string;
    address: string;
    phone_number: string;
    city: string;
    country: string;
    room_quantity: number;
    description: string;
    imageUrls: Express.Multer.File[];
}