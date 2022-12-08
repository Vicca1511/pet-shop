import { ownerDto } from './dto/ownerImput.dto';
import { IOwnerEntity } from '../owner.entity';
import { randomUUID } from 'crypto';
import { partialOwnerDto } from './dto/partialOwner.dto';
import { Injectable } from '@nestjs/common';
import { OwnerRepository } from 'src/owner/owner.repository';
import { Exceptions } from 'src/utils/exceptions/exceptionsHelper';
import { Exception } from 'src/utils/exceptions/exceptions';

@Injectable()
export class ownerService {
  constructor(private readonly OwnerRepository: OwnerRepository) {}

  async createOwner(owner: ownerDto): Promise<IOwnerEntity> {
    const ownerEntity = { ...owner, id: randomUUID() };
    if (owner.password.length < 4) {
      throw new Exception(
        Exceptions.InvalidData,
        'Invalid password , must have more than 4 characters',
      );
    }
    const ownerCreated = await this.OwnerRepository.createOwner(ownerEntity);
    return ownerCreated;
  }
  async updateOwner(ownerDta: partialOwnerDto): Promise<IOwnerEntity> {
    const updatedOwner = await this.OwnerRepository.updateOwner(ownerDta);
    return updatedOwner;
  }

  async getAllOwners(): Promise<IOwnerEntity[]> {
    return this.OwnerRepository.getAllOwners();
  }

  async getOwnerById(ownerId: string): Promise<IOwnerEntity> {
    const IsRealOwner = this.OwnerRepository.findUserById(ownerId);
    if (!IsRealOwner) {
      throw new Error('User not found');
    }
    return IsRealOwner;
  }

  async deleteOwnerById(ownerId: string): Promise<boolean> {
    try {
      const IsRealOwner = await this.OwnerRepository.deleteOwner(ownerId);
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
