import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies') // Entry Point
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  // GET /:id Router보다 하위에 위치하면 Unintended Result
  @Get('/search')
  search(@Query('title') movieTitle: string): string {
    return `We are searching a movie title: ${movieTitle}`;
  }

  @Get('/:id')
  getOneMovie(@Param('id') movieId: string): Movie[] {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  delete(@Param('id') movieId: string) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateData): string {
    return {
      updateMovie: movieId,
      ...updateData,
    };
  }
}
