/*
  Warnings:

  - A unique constraint covering the columns `[tokenId]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Customer` ADD COLUMN `tokenId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Token` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `customerId` INTEGER NULL,

    UNIQUE INDEX `Token_email_key`(`email`),
    UNIQUE INDEX `Token_customerId_key`(`customerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Customer_tokenId_key` ON `Customer`(`tokenId`);

-- AddForeignKey
ALTER TABLE `Customer` ADD CONSTRAINT `Customer_tokenId_fkey` FOREIGN KEY (`tokenId`) REFERENCES `Token`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
