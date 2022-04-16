import { Controller, Get, Param } from '@nestjs/common';

@Controller('movies') // Entry Point
export class MoviesController {
  @Get()
  getAll(): string {
    return 'This will return all movies!';
  }

  @Get('/:id')
  getOneMovie(@Param('id') movieId: string): string {
    return `This will return a movie whose Id is ${movieId}`;
  }
}
