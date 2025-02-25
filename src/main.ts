import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS (se necessário)
  app.enableCors();

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);

  console.log(`Aplicação rodando na porta ${PORT}`);
}

bootstrap();