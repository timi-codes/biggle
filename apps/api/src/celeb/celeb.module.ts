import { Module } from '@nestjs/common';
import { CelebResolver } from './celeb.resolver';
import { CelebService } from './celeb.service';

@Module({
    providers: [CelebResolver, CelebService],
    exports: [CelebService],
})
export class CelebModule { }