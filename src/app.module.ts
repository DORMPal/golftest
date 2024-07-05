import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';
import { Address } from './address/address.entity';

@Module({
  imports: [
      TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432 ,
      username: 'postgres',
      password: 'potato',
      database: 'postgres',
      entities: [User, Address],
      synchronize: true,
    }), UserModule, AddressModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
