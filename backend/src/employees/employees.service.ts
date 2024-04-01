import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class EmployeesService {
  constructor(private  prismaService: PrismaService) {}


  create(createEmployeeDto: CreateEmployeeDto) {
    return this.prismaService.employees.create({data: createEmployeeDto})
  }

  findAll() {
    return this.prismaService.employees.findMany();
  }

  findOne(id: number) {
    return this.prismaService.employees.findUnique({ where: { id } })
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return this.prismaService.employees.update({
      data:   updateEmployeeDto,
      where: { id },
    });
  }

  remove(id: number) {
    return this.prismaService.employees.delete({ where: { id } });
  }
}
