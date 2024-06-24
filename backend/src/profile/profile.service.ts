import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm'; // Import FindOneOptions
import { Profile } from 'src/entitys/profile.entity';
import { CreateProfileDto } from 'src/dtos/create-profile.dto';
import { UpdateProfileDto } from 'src/dtos/update-profile.dto';

@Injectable()
export class ProfilesService {
    constructor(
        @InjectRepository(Profile)
        private readonly profileRepository: Repository<Profile>,
    ) {}

    async findAll(): Promise<Profile[]> {
        return await this.profileRepository.find();
    }

    async findOne(id: number): Promise<Profile> {
        
        const options: FindOneOptions<Profile> = {
            where: { id: id }, 
        };
        return await this.profileRepository.findOne(options);
    }

    async create(createProfileDto: CreateProfileDto): Promise<Profile> {
        const newProfile = this.profileRepository.create(createProfileDto);
        return await this.profileRepository.save(newProfile);
    }

    async update(id: number, updateProfileDto: UpdateProfileDto): Promise<Profile> {
        await this.profileRepository.update(id, updateProfileDto);
        const options: FindOneOptions<Profile> = {
            where: { id: id }, 
        };
        return await this.profileRepository.findOne(options);
    }

    async remove(id: number): Promise<void> {
        await this.profileRepository.delete(id);
    }
}