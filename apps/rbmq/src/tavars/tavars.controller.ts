import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TavarsService } from './tavars.service';
import { CreateTavarsDto } from 'y/shared';
import { UpdateTavarDto } from 'y/shared/dto/update.tavars.dto';
import {
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('tavars')
@Controller('tavars')
export class TavarsController {
  constructor(private readonly tavarsService: TavarsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new tavar' })
  @ApiResponse({ status: 201, description: 'Tavar successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiBody({
    type: CreateTavarsDto,
    examples: {
      example1: {
        summary: 'Example tavar',
        value: {
          name: 'Example Product Name',
        },
      },
    },
  })
  async create(@Body() createProductDto: CreateTavarsDto) {
    return this.tavarsService.create(createProductDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tavars' })
  @ApiResponse({
    status: 200,
    description: 'List of all tavars',
  })
  findAll() {
    return this.tavarsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a tavar by id' })
  @ApiParam({ name: 'id', type: Number, description: 'Tavar id' })
  @ApiResponse({ status: 200, description: 'Tavar found' })
  @ApiResponse({ status: 404, description: 'Tavar not found' })
  findOne(@Param('id') id: string) {
    return this.tavarsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a tavar by id' })
  @ApiParam({ name: 'id', type: Number, description: 'Tavar id' })
  @ApiResponse({ status: 200, description: 'Tavar updated successfully' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiBody({
    type: UpdateTavarDto,
    examples: {
      example1: {
        summary: 'Example update',
        value: {
          name: 'Updated Product Name',
        },
      },
    },
  })
  update(@Param('id') id: string, @Body() updateTavarDto: UpdateTavarDto) {
    return this.tavarsService.update(+id, updateTavarDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a tavar by id' })
  @ApiParam({ name: 'id', type: Number, description: 'Tavar id' })
  @ApiResponse({ status: 200, description: 'Tavar deleted successfully' })
  @ApiResponse({ status: 404, description: 'Tavar not found' })
  remove(@Param('id') id: string) {
    return this.tavarsService.remove(+id);
  }
}
