import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

 @Post()
create(@Body() data: { nombre: string }) {
  return this.usuariosService.create(data);
}
  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: { nombre: string }) {
    return this.usuariosService.update(Number(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(Number(id));
  }
}