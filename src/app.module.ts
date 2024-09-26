import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from '@login/login';
import { AdminModule } from '@login/login/admin/admin.module';
import { UsersModule } from '@login/login/admin/users/users.module';

@Module({
  imports: [LoginModule,AdminModule, UsersModule], // Importar LoginModule para acceder a toda la lógica
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
