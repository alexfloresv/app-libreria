import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { AdminModule } from './admin/admin.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  providers: [LoginService],
  exports: [LoginService],
  imports: [AdminModule, PrismaModule],
})
export class LoginModule {}
