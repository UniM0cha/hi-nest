import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  // 가져올 때 이렇게만 써주면 서비스를 쓸 수 있다....
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: string): Movie {
    return this.moviesService.getOne(id);
  }

  @Post()
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }

  // 데이터를 지울 때 Delete 요청을 사용한다.
  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    // return `This will delete a movie id : ${movieId}`;
    return this.moviesService.deleteOne(movieId);
  }

  // 리소스의 일부를 업데이트 해줄때는 Patch 를 쓴다
  @Patch('/:id')
  path(@Param('id') movieId: string, @Body() updateData) {
    return this.moviesService.update(movieId, updateData);
  }
}
