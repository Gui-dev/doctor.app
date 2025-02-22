/*
  Warnings:

  - You are about to drop the column `user_id` on the `appointments` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_appointments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "doctor_id" TEXT NOT NULL,
    "patient_id" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "made" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "appointments_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "doctors" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "appointments_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_appointments" ("created_at", "date", "doctor_id", "id", "made", "patient_id") SELECT "created_at", "date", "doctor_id", "id", "made", "patient_id" FROM "appointments";
DROP TABLE "appointments";
ALTER TABLE "new_appointments" RENAME TO "appointments";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
