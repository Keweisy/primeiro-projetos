import { Injectable } from '@nestjs/common';
import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { PrismaService } from 'src/prisma/prisma.service'; // Verifique se o caminho está correto

@ValidatorConstraint({ async: true })
@Injectable()
export class IsEmailUniqueConstraint implements ValidatorConstraintInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async validate(email: string) {
    if (!this.prismaService) {
        return false;
    }

    const usuario = await this.prismaService.usuario.findUnique({ where: { email } });
    console.log(email)
    console.log(usuario)
    return !usuario;
  }

  defaultMessage() {
    return 'Email de usuário já existe!';
  }
}

export function IsEmailUnico(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsEmailUniqueConstraint,
    });
  };
}
