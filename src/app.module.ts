import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UsuariosModule } from './usuarios/usuarios.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsuariosModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}