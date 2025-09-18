"use server";

import db from "@/prisma/db";
import { revalidatePath } from "next/cache";
import {
  PurchaseOrderItemSchema,
  PurchaseOrderItemSchemaType,
} from "./schema-and-types";

export async function upsertPurchaseOrderItem(
  input: PurchaseOrderItemSchemaType
) {
  const validated = PurchaseOrderItemSchema.safeParse(input);
  if (!validated.success) {
    console.log("❌ Invalid Purchase Order Item:", validated.error.format());
    return { success: false, message: "Validation failed." };
  }

  const { id, purchaseOrderId, productId, quantity, cost, discount, note } =
    validated.data;

  try {
    await db.purchaseOrder.upsert({
      where: {
        id: id ?? "00000000-0000-0000-0000-000000000000",
      },
      update: {
        purchaseOrderId,
        productId,
        quantity,
        cost,
        discount,
        note,
      },
      create: {
        purchaseOrderId,
        productId,
        quantity,
        cost,
        discount,
        note,
      },
    });

    revalidatePath("/admin/sales/purchase-order");
    return { success: true };
  } catch (error) {
    console.error("❌ Error saving purchase order item:", error);
    return { success: false, message: "Database save error." };
  }
}

// DELETE Purchase Order Item
export async function deletePurchaseOrderItem(id: string) {
  try {
    await db.purchaseOrder.delete({
      where: { id },
    });

    revalidatePath("/admin/sales/purchase-order");
    return { success: true };
  } catch (error) {
    console.error("❌ Error deleting purchase order item:", error);
    return { success: false, message: "Error deleting purchase order item." };
  }
}

export async function getPurchaseOrderItemsByPO(purchaseOrderId: string) {
  try {
    const items = await db.purchaseOrder.findMany({
      where: { purchaseOrderId },
      include: { product: true },
      orderBy: { createdAt: "desc" },
    });

    return items;
  } catch (error) {
    console.error("❌ Error fetching purchase order items:", error);
    return [];
  }
}
