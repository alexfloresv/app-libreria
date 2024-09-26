import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from '@login/login';// Importar librearía de login
import { AdminModule } from '@login/login/admin/admin.module'; // Importar AdminModule para acceder a toda la lógica de autentificacion de admin
import { UsersModule } from '@login/login/admin/users/users.module'; // Importar UsersModule para acceder a toda la lógica CRUD de creación de usuarios

@Module({
  imports: [LoginModule,AdminModule, UsersModule], // Importar LoginModule para acceder a toda la lógica
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
