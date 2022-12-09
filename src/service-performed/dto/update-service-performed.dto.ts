import { PartialType } from '@nestjs/swagger';
import { CreateServicePerformedDto } from './create-service-performed.dto';

export class UpdateServicePerformedDto extends PartialType(CreateServicePerformedDto) {}
