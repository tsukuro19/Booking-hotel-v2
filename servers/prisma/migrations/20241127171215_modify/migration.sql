/*
  Warnings:

  - You are about to drop the column `numAdults` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `numChildren` on the `Booking` table. All the data in the column will be lost.
  - Added the required column `numGuests` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Booking` DROP COLUMN `numAdults`,
    DROP COLUMN `numChildren`,
    ADD COLUMN `numGuests` INTEGER NOT NULL;
