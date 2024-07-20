import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma';
import { Prisma, Celebrity } from '@prisma/client';


@Injectable()
export class CelebrityService {
    constructor(private readonly prismaService: PrismaService) { }

    
}