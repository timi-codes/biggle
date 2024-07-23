import { Resolver, Query } from '@nestjs/graphql';
import { CelebrityService } from './celebrity.service';
import { Field, ObjectType } from '@nestjs/graphql';


@ObjectType({ description: 'The model describing the user.' })
export class CelebrityModel {
    @Field(() => String, { description: "The user's ID." })
    id: number;
}


@Resolver()
export class CelebrityResolver {
    constructor(private readonly celebService: CelebrityService) { }

    @Query(() => [CelebrityModel], { description: "" })
    async getCelebrities() {
        return []
    }
}