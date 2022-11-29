import { ownerDto } from './dto/ownerImput.dto';
import { IOwnerEntity } from '../owner.entity';
import { randomUUID } from 'crypto';
import { partialOwnerDto } from './dto/partialOwner.dto';
import { Injectable } from '@nestjs/common';
import { OwnerRepository } from 'src/owner/owner.repository';

@Injectable()
export class ownerService {
  constructor(private readonly ownerrepository: OwnerRepository) {}

  async createOwner(owner: ownerDto): Promise<IOwnerEntity> {
    const ownerEntity = { ...owner, id: randomUUID() };
    const ownerCreated = await this.ownerrepository.createOwner(ownerEntity);
    return ownerCreated;
  }

  async updateOwner(ownerDta: partialOwnerDto): Promise<IOwnerEntity> {
    const updatedOwner = await this.ownerrepository.updateOwner(ownerDta);
    return updatedOwner;
  }

  async getAllOwners(): Promise<IOwnerEntity[]> {
    return this.ownerrepository.findAllOwners();
  }

  async getOwnerById(ownerId: string): Promise<IOwnerEntity> {
    const IsRealOwner = this.ownerrepository.findUserById(ownerId);
    if (!IsRealOwner) {
      throw new Error('User not found');
    }
    return IsRealOwner;
  }

  async deleteOwnerById(ownerId: string): Promise<boolean> {
    try {
      const IsRealOwner = this.ownerrepository.deleteOwner(ownerId);
      if (IsRealOwner) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
