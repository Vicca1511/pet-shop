import { IOwnerEntity } from "src/owner/entities/owner.entity";
import { Treatment } from "../entities/treatment.entity";

export class CreateTreatmentDto {
    name: string;
    treatment: string;
    material: string;
    professional: IOwnerEntity[];
    ownnerPet: IOwnerEntity[];
    servicePerformed: Treatment[];

}
