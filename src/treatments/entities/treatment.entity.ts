import { IOwnerEntity } from 'src/owner/entities/owner.entity';
import { CreateTreatmentDto } from '../dto/create-treatment.dto';

export class Treatment extends CreateTreatmentDto {
  id: string;
  ownnerPet: IOwnerEntity[];
  servicePerformed: Treatment[];
}
