CREATE TABLE IF NOT EXISTS "authors" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(265) NOT NULL,
	"bio" text NOT NULL,
	"date_of_birth" date NOT NULL,
	"date_of_death" date,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "author_name_idx" ON "authors" ("name");