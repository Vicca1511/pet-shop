import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class RegisterOnPerformedDto {
  @ApiProperty()
  @IsString()
  servicePerformedId: string;
  @ApiProperty()
  @IsString()
  ownerId: string;
}
