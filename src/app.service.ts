import { AdminService } from '@login/login/admin/admin.service';
import { AuthService } from '@login/login/admin/auth/auth.service';
import { UserData } from '@login/login/interfaces';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly adminService: AdminService) {}
  getHello(): string {
    return 'Hello World! libreria - app';
  }
  getProfile(user: UserData): any {
    return this.adminService.getProfile(user);
  }
}

