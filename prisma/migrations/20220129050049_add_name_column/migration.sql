/*
  Warnings:

  - Made the column `created_at` on table `user_profiles` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "user_profiles" ADD COLUMN     "name" TEXT NOT NULL DEFAULT E'',
ALTER COLUMN "created_at" SET NOT NULL;
