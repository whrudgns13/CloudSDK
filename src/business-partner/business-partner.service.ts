import { Injectable } from '@nestjs/common';
import {
    businessPartnerService,
    BusinessPartner
  } from '../../services/business-partner-service';

@Injectable()
export class BusinessPartnerService {
    getBusinessPartner(){
        return 'You will implement this in a minute.'
    }
    async getAllBusinessPartners() : Promise<BusinessPartner[]>{
        const { businessPartnerApi } = businessPartnerService();
        return await businessPartnerApi.requestBuilder().getAll().execute({
            url : "http://localhost:3000"
        })
    }
}