import 'dotenv/config'; // Add this line
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://127.0.0.1:5500', // Specify the allowed origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify the allowed methods
    allowedHeaders: 'Content-Type, Accept', // Specify the allowed headers
  });
  await app.listen(3000);
}
bootstrap();