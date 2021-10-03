import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Justify text API')
    .setDescription(
      'Justify text API is a service that help you format and justify your text.'
    )
    .setVersion('1.0')
    .addBearerAuth({ type: 'http', name: 'Access token', scheme: 'Bearer' })
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  await app.listen(3000);
}
bootstrap();
