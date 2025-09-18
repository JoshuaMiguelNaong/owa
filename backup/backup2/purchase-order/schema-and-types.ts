import { z } from "zod";

export const PurchaseOrderItemSchema = z.object({
  id: z.string().optional(), // useful for editing existing items
  productId: z.string().min(1, "Product is required"),
  quantity: z.coerce
    .number()
    .int()
    .positive({ message: "Quantity must be a positive integer" }),
  cost: z.coerce.number().nonnegative({ message: "Cost must be non-negative" }),
  discount: z.coerce
    .number()
    .nonnegative({ message: "Discount must be non-negative" })
    .optional(),
  note: z.string().optional(),
});
export type PurchaseOrderItem = z.infer<typeof PurchaseOrderItemSchema>;

export const SupplierBasicSchema = z.object({
  id: z.string(),
  companyName: z.string(),
});

export const PurchaseOrderSchema = z.object({
  id: z.string().optional(),
  supplierId: z.string().min(1),
  supplier: SupplierBasicSchema,
  orderDate: z.coerce.date(),
  deliveryDate: z.coerce.date().optional(),
  status: z.string().min(1),
  referenceNumber: z.string().optional(),
  remarks: z.string().optional(),
});

export type PurchaseOrderSchemaType = z.infer<typeof PurchaseOrderSchema>;
export const PurchaseOrderArraySchema = z.array(PurchaseOrderSchema);

export const PurchaseOrderWithSupplierArraySchema =
  z.array(PurchaseOrderSchema);
export type PurchaseOrderWithSupplier = z.infer<typeof PurchaseOrderSchema>;


// pang create ng purchase
export const PurchaseOrderFormSchema = z.object({
  id: z.string().optional(),
  supplierId: z.string().min(1),
  orderDate: z.coerce.date(),
  deliveryDate: z.coerce.date().optional(),
  status: z.string().min(1),
  referenceNumber: z.string().optional(),
  remarks: z.string().optional(),
});

export type PurchaseOrderFormSchemaType = z.infer<
  typeof PurchaseOrderFormSchema
>;
