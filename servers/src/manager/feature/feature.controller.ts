import { Controller, Get, Post, Body, Param, Delete, Put, HttpException, HttpStatus, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiQuery } from '@nestjs/swagger';
import { FeatureService } from './feature.service';
import { FeatureDTO } from './dto/feature.dto';

@ApiTags('Feature')
@Controller('manager/feature')
export class FeatureController {
  constructor(private readonly featureService: FeatureService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new feature' })
  @ApiBody({ type: FeatureDTO })
  @ApiResponse({
    status: 201,
    description: 'Feature created successfully.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request, feature name already exists.',
  })
  async create(@Body() dataFeature: FeatureDTO) {
    try {
      const result = await this.featureService.createFeature(dataFeature);
      return {
        statusCode: HttpStatus.CREATED,
        message: result.message,
        data: result.data,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a feature by ID' })
  @ApiResponse({
    status: 200,
    description: 'Feature fetched successfully.',
  })
  async getById(@Param('id') id: number) {
    try {
      const result = await this.featureService.getFeatureById(Number(id));
      return {
        statusCode: HttpStatus.OK,
        message: result.message,
        data: result.data,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  @ApiOperation({ summary: 'Get the list of features by hotel ID' })
  @ApiResponse({
    status: 200,
    description: 'List of features fetched successfully.',
  })
  @ApiQuery({ name: 'hotelId', required: true, description: 'The hotel ID to filter features' })
  async getList(@Query('hotelId') hotelId: number) {
    try {
      const result = await this.featureService.getListFeature(Number(hotelId));
      return {
        statusCode: HttpStatus.OK,
        message: result.message,
        data: result.data,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a feature by ID' })
  @ApiResponse({
    status: 200,
    description: 'Feature deleted successfully.',
  })
  @ApiResponse({
    status: 404,
    description: 'Feature not found.',
  })
  async delete(@Param('id') id: number) {
    try {
      const result = await this.featureService.deleteFeature(id);
      return {
        statusCode: HttpStatus.OK,
        message: result.message,
        data: result.data,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a feature by ID' })
  @ApiBody({ type: FeatureDTO })
  @ApiResponse({
    status: 200,
    description: 'Feature updated successfully.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request.',
  })
  async update(@Param('id') id: number, @Body() dataFeature: FeatureDTO) {
    try {
      const result = await this.featureService.updateFeature(id, dataFeature);
      return {
        statusCode: HttpStatus.OK,
        message: result.message,
        data: result.data,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
