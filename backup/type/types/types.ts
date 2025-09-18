type IdAndName = {
  id: string;
  name: string;
};

export type BrandsIdName = IdAndName;
export type CategoriesIdName = IdAndName;
export type ProductsIdName = IdAndName;

export type SuppliersIdName = {
  id: string;
  companyName: string | null;
};

export type PurchaseIdName = {
  id: string;
  referenceNumber: string | null; // ← nullable if your DB allows nulls
};
