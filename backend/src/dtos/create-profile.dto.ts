import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateProfileDto {
    @IsString()
    @IsNotEmpty()
    membername: string;

    @IsString()
    @IsOptional()
    photo: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsOptional()
    phone: string;

    @IsString()
    @IsOptional()
    membergroup: string;

    @IsString()
    @IsOptional()
    department: string;

    @IsString()
    @IsNotEmpty()
    memberstatus: string;
}