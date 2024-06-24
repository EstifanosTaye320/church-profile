import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfilesModule } from './profile/profile.module';
import config from 'ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config), ProfilesModule],
})
export class AppModule {}

