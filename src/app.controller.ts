import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
/* import { Auth } from '@login/login/admin/auth/decorators'; */

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

/*   @Auth() */
  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }


}
