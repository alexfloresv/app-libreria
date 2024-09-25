import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { AdminModule } from './admin/admin.module';
import { PrismaModule } from './prisma/prisma.module';
import { TypedEventEmitterModule } from './event-emitter/typed-event-emitter.module';


@Module({
  providers: [LoginService],
  exports: [LoginService, AdminModule, PrismaModule, TypedEventEmitterModule],
  imports: [AdminModule, PrismaModule, TypedEventEmitterModule],
})
export class LoginModule {}
