import { Resolver, Query } from '@nestjs/graphql';
import { CelebService } from './celeb.service';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'The model describing the user.' })
export class CelebModel {
    @Field(() => String, { description: "The user's ID." })
    id: number;
}


@Resolver()
export class CelebResolver {
    constructor(private readonly celebService: CelebService) { }

    @Query(() => [CelebModel], { description: "" })
    async getCelebs() {
        return []
    }
}