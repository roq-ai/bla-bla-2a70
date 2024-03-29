import { InquiryInterface } from 'interfaces/inquiry';
import { InvitationInterface } from 'interfaces/invitation';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  inquiry?: InquiryInterface[];
  invitation?: InvitationInterface[];
  user?: UserInterface;
  _count?: {
    inquiry?: number;
    invitation?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
