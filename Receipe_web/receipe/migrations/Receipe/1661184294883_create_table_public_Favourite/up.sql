CREATE TABLE "public"."Favourite" ("Id" serial NOT NULL, "user_id" integer NOT NULL, "receipe_id" integer NOT NULL, PRIMARY KEY ("Id") , FOREIGN KEY ("receipe_id") REFERENCES "public"."Receipe"("Id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("user_id") REFERENCES "public"."user"("Id") ON UPDATE restrict ON DELETE restrict);
