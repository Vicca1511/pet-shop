import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Exception } from 'src/utils/exceptions/exceptions';
import { Exceptions } from 'src/utils/exceptions/exceptionsHelper';
import { IOwnerEntity } from './entities/owner.entity';
import { partialOwnerDto } from './entities/services/dto/partialOwner.dto';

@Injectable()
export class OwnerRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createOwner(user: IOwnerEntity): Promise<IOwnerEntity> {
    const CreatedOwner = await this.prisma.user.create({ data: user });
    return CreatedOwner;
  }

  async updateOwner(user: partialOwnerDto): Promise<IOwnerEntity> {
    const UpdatedOwner = await this.prisma.user.update({
      where: { id: user.id },
      data: user,
    });
    return UpdatedOwner;
  }

  async deleteOwner(id: string): Promise<IOwnerEntity> {
    const deletedOwner = await this.prisma.user.delete({
      where: { id: id },
    });
    return deletedOwner;
  }
 
  async getAllOwners(): Promise<IOwnerEntity[]> {
    try {
      const allOwners = await this.prisma.user.findMany();
      return allOwners;
    } catch (err) {
     throw new Exception ( Exceptions.DataBaseException, '${err.message}')
    }
  }

  async findUserById(id: string): Promise<IOwnerEntity> {
    const foundOwner = await this.prisma.user.findUniqueOrThrow({
      where: { id: id },
    });

    return foundOwner;
  }
}
