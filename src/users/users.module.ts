/*
// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { UsersService } from './users.service'; // Importe o serviço do módulo
import { UsersController } from './users.controller'; // Importe o controller, se houver
import { PrismaModule } from '../prisma/prisma.module'; // Importando o módulo Prisma

@Module({
  imports: [PrismaModule],  // Adicione o PrismaModule, se necessário
  providers: [UsersService],  // Adicione o serviço do módulo
  controllers: [UsersController],  // Adicione o controller, se necessário
})
export class UsersModule {}

*/

import { Module } from '@nestjs/common';
import { AppController } from '../app.controller';
import { UsersController } from '../users/users.controller'; // Importe o controlador Users
import { UsersService } from '../users/users.service'; // Importe o serviço Users
import { PrismaService } from '../prisma/prisma.service'; // Importe o PrismaService

@Module({
  imports: [],
  controllers: [AppController, UsersController], // Certifique-se de adicionar UsersController aqui
  providers: [UsersService, PrismaService], // Adicione o UsersService e PrismaService
})
export class AppModule {}
