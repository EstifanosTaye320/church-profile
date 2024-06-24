import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfilesModule } from './profile/profile.module';
import { AppController } from './app/app.controller';
import config from 'ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config), ProfilesModule],
  controllers: [AppController],
})
export class AppModule {}

