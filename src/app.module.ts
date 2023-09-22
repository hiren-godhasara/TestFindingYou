import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AstrologicalChartModule } from './module/astrologicalChart/astrological.module';

@Module({
  imports: [AstrologicalChartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
