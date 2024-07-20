import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma';
import { Prisma, Celeb } from '@prisma/client';


@Injectable()
export class CelebService {
    constructor(private readonly prismaService: PrismaService) { }

}