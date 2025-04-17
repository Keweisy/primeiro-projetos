import { Injectable } from '@nestjs/common';
import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { PrismaService } from 'src/prisma/prisma.service'; // Verifique se o caminho está correto

@ValidatorConstraint({ async: true })
@Injectable()
export class IsNomeUniqueConstraint implements ValidatorConstraintInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async validate(nome: string) {
    if (!this.prismaService) {
        return false;
    }

    const usuario = await this.prismaService.usuario.findUnique({ where: { nome } });
    return !usuario;
  }

  defaultMessage() {
    return 'Nome de usuário já';
  }
}

export function IsNomeUnico(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsNomeUniqueConstraint,
    });
  };
}
