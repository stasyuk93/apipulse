import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1575058628449 implements MigrationInterface {
    name = 'migration1575058628449'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(100) NOT NULL, `token` varchar(100) NOT NULL, UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `request_task_history` (`id` int NOT NULL AUTO_INCREMENT, `requestTaskId` int NOT NULL, `name` varchar(255) NOT NULL, `executed` datetime NOT NULL, `statusCode` int(4) UNSIGNED NOT NULL, `isError` tinyint NOT NULL DEFAULT 0, `message` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `request_task` (`id` int NOT NULL AUTO_INCREMENT, `userId` int NOT NULL, `name` varchar(255) NOT NULL, `url` varchar(255) NOT NULL, `frequency` varchar(255) NOT NULL, `start` datetime NOT NULL, `nextRequestAt` datetime NOT NULL, `method` varchar(10) NOT NULL, `statusCode` int(4) UNSIGNED NOT NULL, `options` json NOT NULL, `isActive` tinyint NOT NULL DEFAULT 1, `notifyEmail` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `request_task_history` ADD CONSTRAINT `FK_4c046405e39b475c096a6cc6faa` FOREIGN KEY (`requestTaskId`) REFERENCES `request_task`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `request_task` ADD CONSTRAINT `FK_5453880972092cc7299541fe12a` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `request_task` DROP FOREIGN KEY `FK_5453880972092cc7299541fe12a`", undefined);
        await queryRunner.query("ALTER TABLE `request_task_history` DROP FOREIGN KEY `FK_4c046405e39b475c096a6cc6faa`", undefined);
        await queryRunner.query("DROP TABLE `request_task`", undefined);
        await queryRunner.query("DROP TABLE `request_task_history`", undefined);
        await queryRunner.query("DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` ON `user`", undefined);
        await queryRunner.query("DROP TABLE `user`", undefined);
    }

}
