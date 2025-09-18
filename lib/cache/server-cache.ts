import { unstable_cache } from "next/cache";
import db from "@/prisma/db";
import {
  BrandsIdName,
  CategoriesIdName,
  SuppliersIdName,
  PurchaseIdName,
} from "@/types/types";

export const getAllBrandsIdAndName = unstable_cache(
  async (): Promise<BrandsIdName[]> => {
    console.log("Querying all brands id and name");
    return await db.brand.findMany({
      select: {
        id: true,
        name: true,
      },
    });
  },
  ["all-brand-id-and-name"],
  { tags: ["all-brand-id-and-name"] }
);

export const getAllCategoriesIdAndName = unstable_cache(
  async (): Promise<CategoriesIdName[]> => {
    console.log("Querying all categories id and name");
    return await db.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });
  },
  ["all-categories-id-and-name"],
  { tags: ["all-categories-id-and-name"] }
);

export const getAllProductsIdAndName = unstable_cache(
  async (): Promise<CategoriesIdName[]> => {
    console.log("Querying all products id and name");
    return await db.product.findMany({
      select: {
        id: true,
        name: true,
      },
    });
  },
  ["all-products-id-and-name"],
  { tags: ["all-products-id-and-name"] }
);

export const getAllSuppliersIdAndName = unstable_cache(
  async (): Promise<SuppliersIdName[]> => {
    console.log("Querying all suppliers id and name");
    return await db.supplier.findMany({
      select: {
        id: true,
        companyName: true,
      },
    });
  },
  ["all-suppliers-id-and-name"],
  { tags: ["all-suppliers-id-and-name"] }
);

export const getAllPurchasesIdAndName = unstable_cache(
  async (): Promise<PurchaseIdName[]> => {
    console.log("Querying all purchases id and reference number");
    return await db.purchaseOrder.findMany({
      select: {
        id: true,
        referenceNumber: true,
      },
    });
  },
  ["all-purchases-id-and-name"],
  { tags: ["all-purchases-id-and-name"] }
);
