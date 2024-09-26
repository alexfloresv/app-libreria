import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { AdminModule } from './admin/admin.module'; // Importando AdminModule
import { PrismaModule } from './prisma/prisma.module';
import { SeedsModule } from './seeds/seeds.module';

@Module({
  providers: [LoginService],
  exports: [LoginService, AdminModule, PrismaModule], // Exportando AdminModule
  imports: [AdminModule, PrismaModule, SeedsModule ],
})
export class LoginModule {}
