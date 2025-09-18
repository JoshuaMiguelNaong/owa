"use server";

import db from "@/prisma/db";
import { revalidatePath } from "next/cache";
import {
  PurchaseOrderArraySchema,
  PurchaseOrderWithSupplierArraySchema,
  PurchaseOrderSchema,
  PurchaseOrderSchemaType,
} from "./schema-and-types";

export async function upsertPurchaseOrder(input: PurchaseOrderSchemaType) {
  const validated = PurchaseOrderSchema.safeParse(input);
  if (!validated.success) {
    console.log("Invalid PO data.", validated.error);
    return { success: false, message: "Error in data validation." };
  }

  const {
    supplierId,
    orderDate,
    deliveryDate,
    status,
    referenceNumber,
    remarks,
    id,
  } = validated.data;

  try {
    await db.purchaseOrder.upsert({
      where: { id: id ?? "00000000-0000-0000-0000-000000000000" },
      update: {
        supplierId,
        orderDate,
        deliveryDate,
        status,
        referenceNumber,
        remarks,
      },
      create: {
        supplierId,
        orderDate,
        deliveryDate,
        status,
        referenceNumber,
        remarks,
      },
    });

    revalidatePath("/admin/sales/purchase-order");
    return { success: true };
  } catch (error) {
    console.error("❌ Error saving data:", error);
    return { success: false, message: "Database save error." };
  }
}

export async function deletePurchaseOrder(id: string) {
  try {
    await db.customer.delete({
      where: { id },
    });

    revalidatePath("/admin/sales/purchase-order");

    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      console.error("ERROR deleting purchase order:", error.message);
    }

    return { success: false, message: "Error deleting purchase order." };
  }
}

export async function getAllPurchaseOrders() {
  try {
    const list = await db.purchaseOrder.findMany({
      include: {
        supplier: true,
      },
      orderBy: { createdAt: "desc" },
    });

    const purchaseOrders = PurchaseOrderWithSupplierArraySchema.parse(list);
    return purchaseOrders;
  } catch (error) {
    console.error("ERROR fetching purchase orders:", error);
    return [];
  }
}
