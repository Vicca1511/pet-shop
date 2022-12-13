import { ApiProperty } from "@nestjs/swagger";

export class UpdateServicePerformedDto {
  
  id: string;
  ownerIds: string[];
  static ownerId: any;
}
