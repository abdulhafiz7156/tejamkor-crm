import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {PrismaService} from "./prisma/prisma.service";

async function bootstrap() {
  const port = 3000;
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
      .setTitle('User API') // Set the title of the API
      .setDescription('User API description') // Set the description of the API
      .setVersion('0.1') // Set the version of the API
      .build(); // Build the document

  // Create a Swagger document using the application instance and the document configuration
  const document = SwaggerModule.createDocument(app, config);

  // Setup Swagger module with the application instance and the Swagger document
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  console.log(`Server running on port http://localhost:${port}/`)
}
bootstrap();