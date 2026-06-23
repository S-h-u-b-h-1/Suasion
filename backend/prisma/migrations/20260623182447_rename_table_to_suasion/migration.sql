/*
  Warnings:

  - You are about to drop the `leads` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "leads";

-- CreateTable
CREATE TABLE "suasion" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "serviceInterest" "ServiceInterest" NOT NULL DEFAULT 'GENERAL',
    "preferredContactMethod" "ContactMethod" NOT NULL DEFAULT 'PHONE',
    "message" TEXT NOT NULL,
    "consent" BOOLEAN NOT NULL,
    "status" "LeadStatus" NOT NULL DEFAULT 'NEW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "suasion_pkey" PRIMARY KEY ("id")
);
