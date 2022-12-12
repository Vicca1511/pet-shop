import { PartialType } from '@nestjs/mapped-types';
import { ownerDto } from './ownerImput.dto';

export class partialOwnerDto extends PartialType(ownerDto) {
  id: string;
}
