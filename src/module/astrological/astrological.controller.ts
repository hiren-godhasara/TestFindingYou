import {Controller,Post,Body,HttpException,HttpStatus,} from '@nestjs/common';
import { AstrologicalService } from './astrological.service';
import { AstrologicalRequestDto } from './dto/astrologicalChart.dto';
import { AstrologicalError } from './errorHandler/astrological.error';

@Controller('astrological')
export class AstrologicalController {
  constructor(private readonly astrologicalService: AstrologicalService) {}

  @Post()
  async astrological(@Body() body: AstrologicalRequestDto){
    try {
      const data = await this.astrologicalService.astrological(body);
      return data;
    } catch (error) {
      if (error instanceof AstrologicalError) throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      throw new HttpException('Failed to purchase seat',HttpStatus.BAD_REQUEST);
    }
  }
}
