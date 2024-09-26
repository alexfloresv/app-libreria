/* import { AdminService } from '@login/login/admin/admin.service';
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
} */

import { Injectable } from '@nestjs/common';
import { AdminService } from '@login/login/admin/admin.service'; // Asegúrate de importar correctamente AdminService
import { UsersService } from '@login/login/admin/users/users.service'; // Importar UsersService para creación de usuarios
import { UserData } from '@login/login/interfaces';
import { CreateUserDto } from '@login/login/admin/users/dto';

@Injectable()
export class AppService {
  constructor(
    private readonly adminService: AdminService,
    private readonly usersService: UsersService, // Inyectar el UsersService
  ) {}

  getHello(): string {
    return 'Hello World! libreria - app';
  }

  // Método para obtener el perfil del usuario
  getProfile(user: UserData): any {
    return this.adminService.getProfile(user);
  }

/*   // Método para crear un usuario
  async createUser(createUserDto: CreateUserDto, user: UserData) {
    return this.usersService.create(createUserDto, user); // Utiliza el UsersService para crear usuarios
  }  */
}
