import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { validationSchemaForEnv } from './config/environment-variables';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';

import { PrismaModule } from './prisma';
import { CelebrityModule } from './celebrity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: validationSchemaForEnv,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        playground: false,
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        buildSchemaOptions: { dateScalarMode: 'timestamp' },
      }),
    }),
    PrismaModule,
    CelebrityModule
  ],
  providers: [CelebrityModule],
})
export class AppModule {}
