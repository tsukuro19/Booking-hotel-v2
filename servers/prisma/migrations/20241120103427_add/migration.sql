/*
  Warnings:

  - A unique constraint covering the columns `[bedTypeName]` on the table `BedType` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[featureName]` on the table `Feature` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[floorNumber]` on the table `Floor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[roomNumber]` on the table `Room` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[className]` on the table `RoomClass` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `BedType_bedTypeName_key` ON `BedType`(`bedTypeName`);

-- CreateIndex
CREATE UNIQUE INDEX `Feature_featureName_key` ON `Feature`(`featureName`);

-- CreateIndex
CREATE UNIQUE INDEX `Floor_floorNumber_key` ON `Floor`(`floorNumber`);

-- CreateIndex
CREATE UNIQUE INDEX `Room_roomNumber_key` ON `Room`(`roomNumber`);

-- CreateIndex
CREATE UNIQUE INDEX `RoomClass_className_key` ON `RoomClass`(`className`);
