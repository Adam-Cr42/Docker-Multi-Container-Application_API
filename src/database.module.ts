import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(), // Carregar variáveis de ambiente
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST', 'localhost'), // Adiciona fallback
        port: parseInt(configService.get<string>('DB_PORT', '5432'), 10), // Garante número
        username: configService.get<string>('DB_USER', 'postgres'),
        password: configService.get<string>('DB_PASS', 'postgres'),
        database: configService.get<string>('DB_NAME', 'postgresdb'),
        autoLoadEntities: true,
        synchronize: true, // ⚠️ Apenas para desenvolvimento!
      }),
    }),
  ],
})
export class DatabaseModule {}
