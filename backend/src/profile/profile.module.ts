import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfilesService } from './profile.service';
import { Profile } from 'src/entitys/profile.entity';
import { ProfilesController } from './profile.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Profile])],
    controllers: [ProfilesController],
    providers: [ProfilesService],
})
export class ProfilesModule {}