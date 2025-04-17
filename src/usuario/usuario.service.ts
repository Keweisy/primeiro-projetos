import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsuarioService {
constructor(private readonly prisma: PrismaService){}

async create(createUsuarioDto: CreateUsuarioDto) {
  // const usuarioExistente = await this.prisma.usuario.findUnique({
  //   where: { nome: createUsuarioDto.nome },
  // });

  // if (usuarioExistente) {
  //   throw new BadRequestException('Nome de usuário no banco.');
  // }
  return await this.prisma.usuario.create({
    data: createUsuarioDto,
  });
}

async findAll() {
  return this.prisma.usuario.findMany(); // Removido `await` desnecessário
}

async findOne(id: number) {
  return this.prisma.usuario.findUnique({
    where: { id }, // Busca pelo ID
  });
}

async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
  return this.prisma.usuario.update({
    where: { id }, // Encontra o usuário pelo ID
    data: updateUsuarioDto, // Atualiza com os novos dados
  });
}

/* async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
  return this.prisma.usuario.update({
    where: { id },
    data: {
      nome: updateUsuarioDto.nome, 
      email: updateUsuarioDto.email, 
    },
  });     shift + alt + a paa comentar tudo
} */



async remove(id: number) {
  return this.prisma.usuario.delete({
    where: { id }, // Remove pelo ID
  });
}



}
