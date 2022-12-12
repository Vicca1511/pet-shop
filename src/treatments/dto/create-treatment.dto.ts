import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { IOwnerEntity } from 'src/owner/entities/owner.entity';
import { Treatment } from '../entities/treatment.entity';

export class CreateTreatmentDto {
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsString()
  treatment: string;
  @ApiProperty()
  @IsString()
  ownnerPet: IOwnerEntity[];
}
