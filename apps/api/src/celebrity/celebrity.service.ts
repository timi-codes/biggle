import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma';
import { Celebrity, Prisma } from '@prisma/client';
import { IPaginationOptions } from 'src/common';


@Injectable()
export class CelebrityService {
    constructor(private readonly prismaService: PrismaService) { }

    async findByCategory(
        name: string,
        { limit, offset }: IPaginationOptions,
    ): Promise<Omit<Celebrity[], "password">> {
        return this.prismaService.celebrity.findMany({
            skip: offset,
            take: limit,
            where: {
                categories: {
                    some: { name }
                }
            },
            include: {
                categories: true
            }
        })
    }
    /**
     * Get a count of celebrity records.
     *
     * @param where the where clause options
     */
    async count(where?: Prisma.CelebrityWhereInput) {
        return this.prismaService.celebrity.count({
            where,
        });
    }
}