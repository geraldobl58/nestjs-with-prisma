import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'Nomem do usuário' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'E-mail do usuário' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Verifica se o usuário é administrador',
    default: false,
  })
  @IsBoolean()
  isAdmin: boolean;
}
