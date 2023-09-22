import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AstrologicalModule } from './module/astrological/astrological.module';

@Module({
  imports: [AstrologicalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
