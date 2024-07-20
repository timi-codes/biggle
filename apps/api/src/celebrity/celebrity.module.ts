import { Module } from '@nestjs/common';
import { CelebrityResolver } from './celebrity.resolver';
import { CelebrityService } from './celebrity.service';

@Module({
    providers: [CelebrityResolver, CelebrityService],
    exports: [CelebrityService],
})
export class CelebrityModule { }