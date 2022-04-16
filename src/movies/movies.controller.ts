import { Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('movies') // Entry Point
export class MoviesController {
  @Get()
  getAll(): string {
    return 'This will return all movies!';
  }

  @Get('/:id')
  getOneMovie(@Param('id') movieId: string): string {
    return `This will return a movie with the id: ${movieId}`;
  }

  @Post()
  create(): string {
    return 'This will create a movie';
  }

  @Delete('/:id')
  delete(@Param('id') movieId: string): string {
    return `This will delete a movie with the id: ${movieId}`;
  }
}
