import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([{ id: 1, name: 'John Doe', email: 'john@example.com' }]),
            createUser: jest.fn().mockImplementation((name, email) =>
              Promise.resolve({ id: 1, name, email }),
            ),
          },
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('deve retornar a lista de usuários', async () => {
    expect(await controller.findAll()).toEqual([{ id: 1, name: 'John Doe', email: 'john@example.com' }]);
  });

  it('deve criar um usuário', async () => {
    const result = await controller.create({ name: 'Jane Doe', email: 'jane@example.com' });
    expect(result).toEqual({ id: 1, name: 'Jane Doe', email: 'jane@example.com' });
  });
});
