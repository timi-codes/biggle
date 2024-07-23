import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { CelebrityService } from './celebrity.service';
import { Field, ObjectType } from '@nestjs/graphql';
import { Celebrity } from '@prisma/client';
import { IPagedRequest } from 'src/common';
import { GraphQLError } from 'graphql';
import { PagedCelebritiesModel } from './model';

@ObjectType({ description: 'The model describing the user.' })
export class CelebrityModel {
    @Field(() => String, { description: "The user's ID." })
    id: number;
}

@Resolver()
export class CelebrityResolver {
    constructor(private readonly celebService: CelebrityService) { }

    @Query(() => PagedCelebritiesModel, { description: "Fetch celebrities by a category name"})
    async getCelebritriesByCategory(
        @Args('category', {
            description: "filter by category name",
            type: () => String,
        })
        category: string,
        @Args('limit', {
            description: 'The maximum number of items to return',
            type: () => Int,
            defaultValue: 6
        })
        limit: number,
        @Args('offset', {
            description: 'The index of the first item to return.',
            type: () => Int,
            defaultValue: 0
        })
        offset: number,
    ): Promise<IPagedRequest<Celebrity, number >>{
        try {
            const whereCondition: any = category ? {
                categories: {
                    some: {
                        name: category
                    }
                }
            } : undefined;

            const [data, count] = await Promise.all([
                this.celebService.findByCategory(
                    category,
                    { limit, offset },
                ),
                this.celebService.count(whereCondition)
            ]);
            return { count, data, limit, offset }

        } catch (error) {
            throw new GraphQLError("CELEBRITY_FETCH_ERROR" + error)
        }
    }
}