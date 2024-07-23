import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IPagedRequest } from '../../common';
import { CelebrityModel } from './celebrity.model'
import { Celebrity } from "@prisma/client"

@ObjectType({ description: "Model for paginated memberships reponse" })
export class PagedCelebritiesModel implements IPagedRequest<Celebrity, number> {
    @Field(() => Int, { description: 'The maximum number of items to return' })
    limit: number;
    @Field(() => Int, { description: 'The index of the first item to return.' })
    offset: number;
    @Field(() => Int, { description: 'The total number of items.' })
    count: number;
    @Field(() => [CelebrityModel], { description: 'The list of celebrities returned' })
    data: Celebrity[];
}