import { z } from "zod";

export const PurchaseOrderItemSchema = z.object({
  id: z.string().optional(),
  purchaseOrderId: z.string().min(1, "Purchase Order ID is required"),
  productId: z.string().min(1, "Product is required"),
  quantity: z.coerce
    .number()
    .int("Quantity must be an integer")
    .positive("Quantity must be positive"),
  cost: z.coerce.number().nonnegative("Cost must be non-negative"),
  discount: z.coerce
    .number()
    .nonnegative("Discount must be non-negative")
    .optional(),
  note: z.string().optional(),
});

export type PurchaseOrderItemSchemaType = z.infer<
  typeof PurchaseOrderItemSchema
>;
