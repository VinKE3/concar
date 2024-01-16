import { db } from "@/lib/db";

export default function getUsers() {
  const users = db.user.findMany();

  return users;
}
