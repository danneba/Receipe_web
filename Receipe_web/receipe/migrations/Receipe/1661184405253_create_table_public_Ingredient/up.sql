CREATE TABLE "public"."Ingredient" ("name" text NOT NULL, "Id" serial NOT NULL, "Receipe_id" integer NOT NULL, PRIMARY KEY ("Id") , FOREIGN KEY ("Receipe_id") REFERENCES "public"."Receipe"("Id") ON UPDATE restrict ON DELETE restrict);
