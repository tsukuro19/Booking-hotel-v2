import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBody, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { FloorService } from './floor.service';
import { FloorDTO } from './dto/floor.dto';
import { Response } from 'express';

@ApiTags('Floor Management')
@Controller('manager/floor')
export class FloorController {
  constructor(private readonly floorService: FloorService) {}

  @ApiOperation({ summary: 'Create a new floor' })
  @ApiBody({ type: FloorDTO, description: 'Floor data to create a new floor' })
  @ApiResponse({ status: 201, description: 'Floor created successfully.' })
  @ApiResponse({ status: 400, description: 'Bad request or floor already exists.' })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createFloor(@Body() dataFloor: FloorDTO, @Res() res: Response) {
    try {
      const result = await this.floorService.createFloor(dataFloor);
      return res.status(HttpStatus.CREATED).json(result);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({ message: error.message });
    }
  }

  @ApiOperation({ summary: 'Get a list of floors by hotel ID' })
  @ApiQuery({ name: 'hotelId', required: true, description: 'The hotel ID to filter floors' })
  @ApiResponse({ status: 200, description: 'List of floors retrieved successfully.' })
  @Get()
  @HttpCode(HttpStatus.OK)
  async getListFloor(@Query('hotelId') hotelId: number, @Res() res: Response) {
    try {
      const result = await this.floorService.getListFloor(hotelId);
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
  }

  @ApiOperation({ summary: 'Get a floor by ID' })
  @ApiParam({ name: 'floorId', type: Number, description: 'ID of the floor to retrieve' })
  @ApiResponse({ status: 200, description: 'Floor retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'Floor not found.' })
  @Get(':floorId')
  @HttpCode(
    HttpStatus.OK
  )
  async getFloorById(@Param('floorId') floorId: number, @Res() res: Response) {
    try {
      const result = await this.floorService.getFloorById(floorId);
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      return res.status(HttpStatus.NOT_FOUND).json({ message: error.message });
    }
  }

  @ApiOperation({ summary: 'Update a floor' })
  @ApiParam({ name: 'floorId', type: Number, description: 'ID of the floor to update' })
  @ApiBody({ type: FloorDTO, description: 'Updated floor data' })
  @ApiResponse({ status: 200, description: 'Floor updated successfully.' })
  @ApiResponse({ status: 400, description: 'Bad request or floor not found.' })
  @Put(':floorId')
  @HttpCode(HttpStatus.OK)
  async updateFloor(@Param('floorId') floorId: number, @Body() data: FloorDTO, @Res() res: Response) {
    try {
      const result = await this.floorService.updateFloor(data, floorId);
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({ message: error.message });
    }
  }

  @ApiOperation({ summary: 'Delete a floor' })
  @ApiParam({ name: 'floorId', type: Number, description: 'ID of the floor to delete' })
  @ApiResponse({ status: 200, description: 'Floor deleted successfully.' })
  @ApiResponse({ status: 400, description: 'Bad request or floor not found.' })
  @Delete(':floorId')
  @HttpCode(HttpStatus.OK)
  async deleteFloor(@Param('floorId') floorId: number, @Res() res: Response) {
    try {
      const result = await this.floorService.deleteFloor(floorId);
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({ message: error.message });
    }
  }
}
