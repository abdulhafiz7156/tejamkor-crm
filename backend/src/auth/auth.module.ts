import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { LocalStategy } from './strategy/local.strategy';
import { UserService } from '../user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { jwt } from './constants';
import { JwtStrategy } from './strategy/jwt.strategy';
import {PrismaService} from "../prisma/prisma.service";

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: jwt.secretKey,
            signOptions: {
                expiresIn: '7d',
            },
        }),
    ],
    providers: [AuthService, LocalStategy, UserService, JwtStrategy, PrismaService],
    controllers: [AuthController],
    exports: [AuthService],
})
export class AuthModule { }
