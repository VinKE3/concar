import { db } from "@/lib/db";

export default function eliminarUsuario(id: string) {
  return db.user.delete({
    where: { id },
  });
}
