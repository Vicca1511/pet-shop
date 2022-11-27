import { ownerDto } from "./dto/ownerImput.dto";
import{ IOwnerEntity } from '../owner.entity'
import {randomUUID} from 'crypto'

class ownerService {
    private owners: IOwnerEntity[] = [];
    async createOwner(owner: ownerDto):Promise<IOwnerEntity>{
        const ownerEntity = {...owner , id: randomUUID() };
        this.owners.push(ownerEntity);
        return ownerEntity
    }
    
}