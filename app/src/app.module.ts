import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/users.module';
import { RequestTaskModule } from './modules/requestTasks.module';
import { RequestTaskHistories } from './modules/requestTaskHistories.module';

@Module({
    imports: [
      TypeOrmModule.forRoot(),
      UserModule,
      RequestTaskModule,
      RequestTaskHistories
    ]
})
export class AppModule {}
