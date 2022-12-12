import { IOwnerEntity } from 'src/owner/entities/owner.entity';
import { CreateServicePerformedDto } from '../dto/create-service-performed.dto';

export class ServicePerformed extends CreateServicePerformedDto {
  id: string;
  ownerPet: IOwnerEntity[];
  startDate: Date;
  endDate: Date;
  moment: string;
}
