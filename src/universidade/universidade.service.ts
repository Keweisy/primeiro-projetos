import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUniversidadeDto } from './dto/create-universidade.dto';
import { UpdateUniversidadeDto } from './dto/update-universidade.dto';

@Injectable()
export class UniversidadeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUniversidadeDto: CreateUniversidadeDto) {
    console.log("Recebido no body:", createUniversidadeDto)
    return await this.prisma.universidade.create({      
      data: createUniversidadeDto,
    });
  }

  async getUniversidades() {
    return this.prisma.universidade.findMany({
      // include: {
      //   endereco: true, // Aqui traz o objeto completo do endereço
      // },
    });
  }

  async findOne(id: number) {
    return this.prisma.universidade.findUnique({ where: { id } });
  }

  async update(id: number, updateUniversidadeDto: UpdateUniversidadeDto) {
    return this.prisma.universidade.update({
      where: { id },
      data: updateUniversidadeDto,
    });
  }

  async remove(id: number) {
    return this.prisma.universidade.delete({ where: { id } });
  }
}
