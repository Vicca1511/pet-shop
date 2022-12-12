import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateTreatmentDto } from './dto/create-treatment.dto';
import { UpdateTreatmentDto } from './dto/update-treatment.dto';
import { Treatment } from './entities/treatment.entity';

@Injectable()
export class TreatmentsService {
  private _treatment: Treatment[] = [];

  async create(createTreatmentDto: CreateTreatmentDto): Promise<Treatment>{
    const createdTreatment = {
      ...createTreatmentDto,
      id: randomUUID(),
      servicePerformed:[],
    };
    this._treatment.push(createdTreatment);
    return createdTreatment;
  }

  async findAll(): Promise<Treatment[]> {
    return this._treatment;
  }

  async findOne(id: string) {
    return this._treatment.find((treatment) => treatment.id === id);
  }

  async update(id: string, updateTreatmentDto: UpdateTreatmentDto): Promise<Treatment> {
    this._treatment.map((treatment , index) =>{
      if(treatment.id === id){
        const updatedTreatment = Object.assign(treatment , UpdateTreatmentDto)
        this._treatment.splice(index, 1 , updatedTreatment);
      }
    })
    return await this.findOne(id);
  }

  async remove(id: string): Promise<string> {
    this._treatment.map((treatment , index) => {
      if(treatment.id === id) {
        this._treatment.splice(index , 1);
  }})

    return Promise.resolve(" File deleted successfully");
  }
}
