import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { IsEmailUnico } from 'src/validators/is-email-unique.validator';
import { IsNomeUnico } from 'src/validators/is-nome-unique.validator';



export class CreateUsuarioDto {
 // @IsNomeUnique({ message: 'Nome de usuário já ' })
  @IsNomeUnico()
  @IsNotEmpty()
  @Length(3, 255)
  nome: string;
  
  // @IsEmailUnico()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(6, 255)
  password: string;

  
}
