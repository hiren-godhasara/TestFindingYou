import { Module } from '@nestjs/common';
import { AstrologicalController } from './astrological.controller';
import { AstrologicalService } from './astrological.service';

@Module({
  imports: [],
  controllers: [AstrologicalController],
  providers: [AstrologicalService],
  exports: [AstrologicalService],
})
export class AstrologicalChartModule {}
