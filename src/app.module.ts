import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UsuariosModule } from './usuarios/usuarios.module';
import { PrismaService } from './prisma.service';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsuariosModule,
    UsuarioModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}