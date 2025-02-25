// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';  // Certifique-se de que está importando o PrismaService

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  // Método para obter todos os usuários
  async findAll() {
    return this.prisma.user.findMany();  // Acesse o modelo user diretamente da instância do PrismaService
  }

  // Método para criar um novo usuário
  async createUser(name: string, email: string) {
    return this.prisma.user.create({
      data: {
        name,
        email,
      },
    });
  }
}