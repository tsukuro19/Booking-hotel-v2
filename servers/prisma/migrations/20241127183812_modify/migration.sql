/*
  Warnings:

  - You are about to alter the column `bookingStatus` on the `Booking` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Booking` MODIFY `bookingStatus` VARCHAR(191) NOT NULL;
