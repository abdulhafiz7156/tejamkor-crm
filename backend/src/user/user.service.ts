import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class UserService {
  constructor(private  prismaService: PrismaService) {}

   create(createUserDto : CreateUserDto) {
     return this.prismaService.user.create({data: createUserDto})
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  findOne(username) {
    return this.prismaService.user.findUnique({ where: { username } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prismaService.user.update({
      data:   updateUserDto,
      where: { id },
    });
  }

  remove(id: number) {
    return this.prismaService.user.delete({ where: { id } });
  }
}

