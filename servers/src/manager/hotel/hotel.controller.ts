import { Controller, Post, Body, Get, Param, Put, Delete, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { HotelService } from './hotel.service';
import { HotelDTO } from './dto/hotel.dto';

@ApiTags('Hotel Manager')
@Controller('manager/hotel')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new hotel' })
  @ApiResponse({ status: 201, description: 'Hotel created successfully' })
  @ApiResponse({ status: 400, description: 'Hotel already exists' })
  async createHotel(
    @Body() dataHotel: HotelDTO & { managerId: number },
  ) {
    console.log(dataHotel.managerId);
    return this.hotelService.postHotel(dataHotel, Number(dataHotel.managerId));
  }

  @Put(':hotelName')
  @ApiOperation({ summary: 'Update a hotel by its name' })
  @ApiResponse({ status: 200, description: 'Hotel updated successfully' })
  @ApiResponse({ status: 404, description: 'Hotel not found' })
  async updateHotel(
    @Param('hotelName') hotelName: string, 
    @Body() dataHotel: HotelDTO
  ) {
    return this.hotelService.updateHotel(hotelName, dataHotel);
  }

  @Delete(':hotelName')
  @ApiOperation({ summary: 'Delete a hotel by its name' })
  @ApiResponse({ status: 200, description: 'Hotel deleted successfully' })
  @ApiResponse({ status: 404, description: 'Hotel not found' })
  async deleteHotel(@Param('hotelName') hotelName: string) {
    return this.hotelService.deleteHotel(hotelName);
  }

  @Get()
  @ApiOperation({ summary: 'Get list of all hotels' })
  @ApiResponse({ status: 200, description: 'List of hotels fetched successfully' })
  async getHotels() {
    return this.hotelService.getListHotel();
  }

  @ApiOperation({ summary: 'Get list of all hotels with features' })
  @ApiResponse({ status: 200, description: 'List of hotels with features fetched successfully' })
  @Get('/feature')
  async getHotelsWithFeatures() {
    return this.hotelService.getListHotelWithFeature();
  }

  @ApiOperation({ summary: 'Get list of all hotels with full details' })
  @ApiResponse({ status: 200, description: 'List of hotels with full details fetched successfully' })
  @Get('/hotel-details/:hotelId')
  async getHotelWithFull(@Param('hotelId') hotelId: number) {
    return this.hotelService.getDetailHotelWithFullById(hotelId);
  }

  @Get('/:hotelName')
  @ApiOperation({ summary: 'Get hotel details by its name' })
  @ApiResponse({ status: 200, description: 'Hotel details fetched successfully' })
  @ApiResponse({ status: 404, description: 'Hotel not found' })
  async getHotelDetails(@Param('hotelName') hotelName: string) {
    return this.hotelService.getDetailHotelByName(hotelName);
  }

  @ApiOperation({ summary: 'Get hotel details by its id' })
  @ApiResponse({ status: 200, description: 'Hotel details fetched successfully' })
  @ApiResponse({ status: 404, description: 'Hotel not found' })
  @Get('/id/:hotelId')
  async getHotelDetailsById(@Param('hotelId') hotelId: number) {
    return this.hotelService.getDetailHotelById(hotelId);
  }


}
