// src/users/users.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Endpoint para obter todos os usuários
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // Endpoint para criar um novo usuário
  @Post()
  create(@Body() body: { name: string; email: string }) {
    return this.usersService.createUser(body.name, body.email);
  }
}