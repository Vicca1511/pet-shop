import { Injectable } from '@nestjs/common';
import { Treatment } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { ServicePerformed } from 'src/service-performed/entities/service-performed.entity';
import { CreateTreatmentDto } from './dto/create-treatment.dto';
import { UpdateTreatmentDto } from './dto/update-treatment.dto';


@Injectable()
export class treatmentsRepository {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly returnData = { ownerPet: true, servicePerformed: true },
  ) {}

  async createTreatment({
    
    name,
    treatment,
  }: CreateTreatmentDto, id: string): Promise<Treatment> {
    return this.prismaService.treatment.create({
      data: {
        id: id,
        name: name,
        treatment: treatment,
      },
      include: this.returnData,
    });
  }
  async updateTreatment(upData: UpdateTreatmentDto): Promise<Treatment> {
    return await this.prismaService.treatment.update({
      where: { id: upData.id },
      data: {
        ...upData,

        ownerPet: {
          connect: upData.ownerPetids?.map((id) => ({
            id: upData.id,
          })),
        },
      },
      include: this.returnData,
    });
  }
  async deleteTreatment(id: string): Promise<Treatment> {
    return await this.prismaService.treatment.delete({
      where: { id: id },
      include: this.returnData,
    });
  }

  async findTreatmentById(id: string): Promise<Treatment> {
    return await this.prismaService.treatment.findUnique({
      where: { id: id },
      include: this.returnData,
    });
  }

  async findAllTreatment(): Promise<Treatment[]>{
    return await this.prismaService.treatment.findMany( {include:this.returnData},)
  }
}
