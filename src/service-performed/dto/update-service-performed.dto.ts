import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { CreateServicePerformedDto } from "./create-service-performed.dto";


export class UpdateServicePerformedDto extends CreateServicePerformedDto   {
 
  id: string;
  ownerIds: string[];

}
