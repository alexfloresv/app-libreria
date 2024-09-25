import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '@login/login/admin/auth/auth.module';
import { AdminModule } from '@login/login/admin/admin.module';
import { SeedsModule } from '@login/login/seeds/seeds.module';

@Module({
  imports: [AuthModule,AdminModule,SeedsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
