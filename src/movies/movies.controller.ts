import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('movies') // Entry Point
export class MoviesController {
  @Get()
  getAll(): string {
    return 'This will return all movies!';
  }

  // GET /:id Router보다 하위에 위치하면 Unintended Result
  @Get('/search')
  search(): string {
    return 'We are searching a movie title: ';
  }

  @Get('/:id')
  getOneMovie(@Param('id') movieId: string): string {
    return `This will return a movie with the id: ${movieId}`;
  }

  @Post()
  create(@Body() movieData): string {
    console.log(movieData);
    return 'This will create a movie';
  }

  @Delete('/:id')
  delete(@Param('id') movieId: string): string {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateData): string {
    return {
      updateMovie: movieId,
      ...updateData,
    };
  }
}
