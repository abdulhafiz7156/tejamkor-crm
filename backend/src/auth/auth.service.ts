import {Injectable} from '@nestjs/common';
import {UserService} from "../user/user.service";
import {JwtService} from "@nestjs/jwt";
import {CreateUserDto} from "../user/dto/create-user.dto";

@Injectable()
export class AuthService {

    constructor(private userService: UserService, private jwtService: JwtService) {
    }


    async validiateUser(username: string, password: string) {
        const user = await this.userService.findOne(username)
        if (!user ||  user.password !== password) return false
        return user
    }

    async login(user: any) {
        const payload = {user};
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async registerUser(createUserDto: CreateUserDto){
        const newUser = await this.userService.create(createUserDto)
        return this.login(newUser)
    }
}
