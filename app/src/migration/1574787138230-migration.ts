import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1574787138230 implements MigrationInterface {
    name = 'migration1574787138230'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `token` `token` varchar(100) NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `token` `token` varchar(100) NULL", undefined);
    }

}
