/*
  Warnings:

  - A unique constraint covering the columns `[tokenId]` on the table `Manager` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `isVerified` to the `Manager` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number` to the `Manager` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Manager` ADD COLUMN `isVerified` BOOLEAN NOT NULL,
    ADD COLUMN `phone_number` VARCHAR(191) NOT NULL,
    ADD COLUMN `tokenId` INTEGER NULL;

-- CreateTable
CREATE TABLE `TokenHotel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `managerId` INTEGER NULL,

    UNIQUE INDEX `TokenHotel_email_key`(`email`),
    UNIQUE INDEX `TokenHotel_token_key`(`token`),
    UNIQUE INDEX `TokenHotel_managerId_key`(`managerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Manager_tokenId_key` ON `Manager`(`tokenId`);

-- AddForeignKey
ALTER TABLE `Manager` ADD CONSTRAINT `Manager_tokenId_fkey` FOREIGN KEY (`tokenId`) REFERENCES `TokenHotel`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
