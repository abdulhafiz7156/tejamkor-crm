import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import {AuthModule} from "./auth/auth.module";
import { EmployeesModule } from './employees/employees.module';


@Module({
  imports: [
      UserModule,
      AuthModule,
      EmployeesModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
