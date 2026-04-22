import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  create(data: { nombre: string }) {
    return this.prisma.usuario.create({ data });
  }

  findAll() {
    return this.prisma.usuario.findMany();
  }

  update(id: number, data: { nombre: string }) {
    return this.prisma.usuario.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.usuario.delete({
      where: { id },
    });
  }
}