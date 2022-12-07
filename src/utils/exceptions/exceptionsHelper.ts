import {
  BadRequestException,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { IException } from './IException';

export enum Exceptions {
  InvalidData,
  DataBaseException,
  NotFoundData,
  UnauthorizedException,
}

export function handleException({ exception, message }: IException) {
  if (exception === Exceptions.DataBaseException) {
    throw new InternalServerErrorException(
      message ? message : 'Error in DataBase',
    );
  }

  if (exception === Exceptions.InvalidData) {
    throw new BadRequestException(message ? message : 'Invalid Data');
  }

  if (exception === Exceptions.UnauthorizedException) {
    throw new UnauthorizedException(
      message ? message : 'You need authorization to this action',
    );
  }
}
