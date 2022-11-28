import { ownerDto } from './dto/ownerImput.dto';
import { IOwnerEntity } from '../owner.entity';
import { randomUUID } from 'crypto';
import { partialOwnerDto } from './dto/partialOwner.dto';

export class ownerService {
  createOwners(): IOwnerEntity[] | PromiseLike<IOwnerEntity[]> {
      throw new Error('Method not implemented.');
  }
  private owners: IOwnerEntity[] = [];

  async createOwner(owner: ownerDto): Promise<IOwnerEntity> {
    const ownerEntity = { ...owner, id: randomUUID() };
    this.owners.push(ownerEntity);
    return ownerEntity;
  }

  async updateOwner(ownerDta: partialOwnerDto): Promise<IOwnerEntity> {
    this.owners.map((owner, index) => {
      if (owner.id === ownerDta.id) {
        const updatedOwner = Object.assign(owner, ownerDta);
        this.owners.splice(index, 1, updatedOwner);
      }
    });
    const updatedOwner = this.owners.find((owner) => owner.id === ownerDta.id);
    return updatedOwner;
  }
  async getAllOwners(): Promise<IOwnerEntity[]> {
    return this.owners;
  }

  async getOwnerById(ownerId: string): Promise<boolean> {
    const IsRealOwner = this.owners.find((owner) => owner.id === ownerId);
    
    if (!IsRealOwner) {
      return false;
    }
  }
}
