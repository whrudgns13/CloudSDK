import { Controller, Get, HttpException } from '@nestjs/common';
import { BusinessPartner } from '../../services/business-partner-service';
import { BusinessPartnerService } from './business-partner.service';

@Controller('business-partner')
export class BusinessPartnerController {
    constructor(private businessPartnerService: BusinessPartnerService) {}

    // @Get()
    // getBusinessPartner(){
    //     return this.businessPartnerService.getBusinessPartner();
    // }

    @Get()
    async getBusinessPartners() : Promise<BusinessPartner[]>{
        return await this.businessPartnerService
        .getAllBusinessPartners()
        .catch(error=>{
            throw new HttpException(
                `Fail to get Business Partner - ${error.message}`,
                500
            )
        });
    }
}
