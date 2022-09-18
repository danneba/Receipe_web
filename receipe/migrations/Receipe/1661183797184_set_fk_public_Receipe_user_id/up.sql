alter table "public"."Receipe"
  add constraint "Receipe_user_id_fkey"
  foreign key ("user_id")
  references "public"."user"
  ("Id") on update restrict on delete restrict;
