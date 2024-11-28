/*
  Warnings:

  - Added the required column `numBeds` to the `RoomClassBedType` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPriceRoomBeds` to the `RoomClassBedType` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPriceRoomFeatures` to the `RoomClassFeature` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `RoomClassBedType` ADD COLUMN `numBeds` INTEGER NOT NULL,
    ADD COLUMN `totalPriceRoomBeds` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `RoomClassFeature` ADD COLUMN `totalPriceRoomFeatures` DOUBLE NOT NULL;
