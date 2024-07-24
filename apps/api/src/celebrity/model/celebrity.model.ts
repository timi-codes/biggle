import { Field, Float, Int, ObjectType } from "@nestjs/graphql";
import {$Enums, Celebrity } from "@prisma/client"

@ObjectType({ description: 'A data model representing a celebrity' })
export class CelebrityModel implements Celebrity {

    @Field(() => Int, { description: 'The ID of the celebrity.' })
    id: number;

    @Field(() => String, { description: 'The username of the celebrity.' })
    username: string;

    @Field(() => String, { description: 'The name of the celebrity.' })
    name: string;

    @Field(() => String, { description: 'The discipline of the celebrity.' })
    discipline: string;

    @Field(() => String, { description: 'The photo of the celebrity.' })
    photo: string;

    @Field(() => String, { description: 'The platform of the celebrity.' })
    platform: $Enums.SocialPlatform;

    @Field(() => Int, { description: 'The number of followers of the celebrity for the selected platform' })
    numOfFollowers: number;

    @Field(() => Float, { description: 'The fee to request a biggle from a celebrity' })
    price: number;

    @Field(() => Boolean, { description: 'The fee paid for a biggle is to support a cause' })
    hasBeneficiary: boolean;

    @Field(() => Int, { nullable: true, description: 'The time taken for a celrity to accept a biggle request' })
    repliesIn: number | null;

    @Field(() => Date, { description: 'The date the celebrity profile was created.' })
    createdAt: Date;

    @Field(() => Date, { description: 'The date the celebrity profile was updated.' })
    updatedAt: Date;
}