import { ApiProperty } from '@nestjs/swagger' 
import { IsEmail, IsString } from 'class-validator'

export class ownerDto {
    
    @IsString()
    name: string
    
    @IsString()
    @IsEmail()
    email: string
    
    @IsString()
    cpf: string
    
    @IsString()
    petName: string
    
    @IsString()
    petEspecies: string
    
    @IsString()
    role: string
}