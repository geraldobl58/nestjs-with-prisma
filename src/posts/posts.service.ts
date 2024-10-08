import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsRepository } from './repositories/posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly repository: PostsRepository) {}

  create(createPostDto: CreatePostDto) {
    return this.repository.create(createPostDto);
  }

  async findAll(query: {
    page: number;
    limit: number;
    id?: string;
    title: string;
    content: string;
  }) {
    const { page = 1, limit = 10, id, title, content } = query;

    let filteredPosts = await this.repository.findAll();

    filteredPosts = filteredPosts.filter((post) => {
      const matchesId = id ? post.id.includes(id) : true;
      const matchesTitle = title
        ? post.title.toLowerCase().includes(title.toLowerCase())
        : true;
      const matchesContent = content
        ? post.content.toLowerCase().includes(content.toLowerCase())
        : true;

      return matchesId && matchesTitle && matchesContent;
    });

    const total = filteredPosts.length;

    const startIndex = (page - 1) * limit;
    const paginatedPosts = filteredPosts.slice(startIndex, startIndex + limit);

    return {
      total,
      page,
      limit,
      data: paginatedPosts,
    };
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    return this.repository.update(id, updatePostDto);
  }

  remove(id: string) {
    return this.repository.remove(id);
  }
}
