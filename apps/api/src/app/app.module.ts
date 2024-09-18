import { Module } from '@nestjs/common';
import { DonutsModule } from './donuts/donuts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getMetadataArgsStorage } from 'typeorm';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database/db.sqlite',
      entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
      synchronize: true,
    }),
    DonutsModule,
    UserModule,
  ],
})
export class AppModule {}
