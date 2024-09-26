/* import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GetUser } from '@login/login/admin/auth/decorators';
import { UserData } from '@login/login/interfaces';

@Controller("prueba")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('profile')
  getProfile(@GetUser() user:UserData): string {
    return this.appService.getProfile(user);
  }

} */

import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { GetUser } from '@login/login/admin/auth/decorators'; // Asegúrate de que este decorador funcione correctamente
import { UserData } from '@login/login/interfaces';
import { CreateUserDto } from '@login/login/admin/users/dto/create-user.dto'; // Importar DTO de creación de usuario

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('profile')
  getProfile(@GetUser() user: UserData): any {
    return this.appService.getProfile(user); // Llamada al servicio para obtener el perfil del usuario
  }

/*   @Post('create-user')
  async createUser(
    @Body() createUserDto: CreateUserDto, 
    @GetUser() user: UserData,
  ): Promise<any> {
    return this.appService.createUser(createUserDto, user); // Llamada al servicio para crear usuarios
  } */
}
