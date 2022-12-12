import { ownerDto } from 'src/owner/entities/services/dto/ownerImput.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Exception } from 'src/utils/exceptions/exceptions';
import {
  Exceptions,
  
} from 'src/utils/exceptions/exceptionsHelper';
import { UpdateServicePerformedDto } from './dto/update-service-performed.dto';
import { ServicePerformed } from './entities/service-performed.entity';

// async createAttendanceList({
//   classroomId,
//   day,
//   endDate,
//   id,
//   startDate,
//   students,
// }: AttendanceList): Promise<AttendanceList> {
//   return await this.prismaService.attendanceList.create({
//     data: {
//       day: day,
//       endDate: endDate,
//       id: id,
//       startDate: startDate,
//       classroomId: classroomId,
//     },
//     include: {
//       students: true,
//     },
//   });
// }
export class ServicePerformedRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createServicePerformed(
     { id, ownerPet, startDate, endDate, moment }:ServicePerformed): Promise<ServicePerformed> {
    return await this.prismaService.servicePerformed.create({
      data: {
        endDate: endDate,
        id: id,
        ownerPet:[],
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

    try {
      
      return await this.prismaService.update({
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
    }catch (error) {
      throw new Exception(
        Exceptions.NotFoundData,
        'userId sended not exist',)
      }
    }
  
    async allServicesPerformed(): Promise<ServicePerformed[]> {
    return this.prismaService.findMany({
      include: { ownerPet: true },
    });
  }
  async servicesById(id: string): Promise<ServicePerformed> {
    return await this.prismaService.findUniqueOrThrow({ where: { id: id } });
  }
}
