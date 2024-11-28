import { Injectable } from '@nestjs/common';
import { first, last } from 'rxjs';
import { CustomerService } from 'src/customer/customer.service';

@Injectable()
export class CustomerClientService {
    constructor(
        private readonly customerPrisma:CustomerService
    ) {}

    async getCustomerClientById(customerId:number):Promise<any>{
        const customer= await this.customerPrisma.getCustomerById(Number(customerId));
        return {
            first_name:customer.first_name,
            last_name:customer.last_name,
            phone_number:customer.phone_number,
            username:customer.username,
            email:customer.email,
        }
    }

    async updateCustomerClientById(customerId:number,data:any):Promise<any>{
        const customer=await this.customerPrisma.updateCustomerById(Number(customerId),data.body);
        return {
            message:'Customer successfully updated'
        }
    }

}
