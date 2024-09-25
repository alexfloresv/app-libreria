import { Controller, Get } from '@nestjs/common';
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

}
