-- CreateTable
CREATE TABLE `Employees` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `surname` VARCHAR(191) NULL,
    `age` INTEGER NULL,
    `dailyWage` INTEGER NOT NULL,
    `WeeklyPayed` INTEGER NOT NULL,

    UNIQUE INDEX `Employees_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
