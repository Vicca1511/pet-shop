import { ownerDto } from 'src/owner/entities/services/dto/ownerImput.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Exception } from 'src/utils/exceptions/exceptions';
import {
  Exceptions,
  handleException,
} from 'src/utils/exceptions/exceptionsHelper';
import { UpdateServicePerformedDto } from './dto/update-service-performed.dto';
import { ServicePerformed } from './entities/service-performed.entity';

export class servicePerformedRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createServicePerformed({
    _serviceData: { id, ownerPet, startDate, endDate, moment },
  }): Promise<ServicePerformed> {
    return await this.prismaService._serviceData.create({
      data: {
        endDate: endDate,
        id: id,
        startDate: startDate,
        moment: moment,
      },
      include: { ownerPet: true },
    });
  }

  async updateServicePerformed({
    id,
    ownerIds,
  }: UpdateServicePerformedDto): Promise<ServicePerformed> {
    return await this.prismaService._serviceData.update({
      where: { id: id },
      data: {
        owner: {
          connect: ownerIds.map((id) => {
            return { id: id };
          }),
        },
      },
      include: { ownerPet: true },
    });
  }
  async allServicesPerformed(): Promise<ServicePerformed[]> {
    return this.prismaService._serviceData.findMany({
      include: { ownerPet: true },
    });
  }
}
