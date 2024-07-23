import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma';
import { Celebrity } from '@prisma/client';


@Injectable()
export class CelebrityService {
    constructor(private readonly prismaService: PrismaService) { }

    async getCelebritiesByCategory(name: string): Promise<Omit<Celebrity[], "password">> {
        return this.prismaService.celebrity.findMany({
            where: {
                categories: {
                    some: { name }
                }
            }
        })
    }
}