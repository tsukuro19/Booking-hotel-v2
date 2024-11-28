-- DropIndex
DROP INDEX `BedType_bedTypeName_key` ON `BedType`;

-- DropIndex
DROP INDEX `Feature_featureName_key` ON `Feature`;

-- DropIndex
DROP INDEX `Floor_floorNumber_key` ON `Floor`;

-- DropIndex
DROP INDEX `Room_roomNumber_key` ON `Room`;

-- DropIndex
DROP INDEX `RoomClass_className_key` ON `RoomClass`;

-- AlterTable
ALTER TABLE `Room` MODIFY `roomStatus` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `dayAvailableFrom` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);
