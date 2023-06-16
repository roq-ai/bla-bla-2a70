import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface InquiryInterface {
  id?: string;
  content: string;
  end_customer_id: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface InquiryGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  end_customer_id?: string;
  company_id?: string;
}
