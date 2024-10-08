import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ description: 'Título do post' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'Conteúdo do post' })
  @IsString()
  @IsOptional()
  content: string;

  @ApiProperty({ description: 'Conteúdo do post' })
  @IsString()
  authorId: string;
}
