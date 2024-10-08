import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from '../dto/create-post.dto';
import { PostEntity } from '../entities/post.entity';
import { UpdatePostDto } from '../dto/update-post.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto): Promise<PostEntity> {
    return this.prisma.post.create({
      data: createPostDto,
    });
  }

  async findAll(): Promise<PostEntity[]> {
    return await this.prisma.post.findMany();
  }

  async findOne(id: string): Promise<PostEntity> {
    return this.prisma.post.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, updatePostDto: UpdatePostDto): Promise<PostEntity> {
    return this.prisma.post.update({
      where: {
        id,
      },
      data: updatePostDto,
    });
  }

  async remove(id: string): Promise<PostEntity> {
    return this.prisma.post.delete({
      where: {
        id,
      },
    });
  }
}
