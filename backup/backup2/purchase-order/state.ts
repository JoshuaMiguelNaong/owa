import { create } from "zustand";
import { PurchaseOrderSchemaType } from "./schema-and-types";

type FormMode = "create" | "edit";

type PurchaseOrderFormStore = {
  isOpen: boolean;
  mode: FormMode;
  data: PurchaseOrderSchemaType | null;
  open: (mode: FormMode, data?: PurchaseOrderSchemaType) => void;
  close: () => void;
};

export const usePurchaseOrderFormStore = create<PurchaseOrderFormStore>(
  (set) => ({
    isOpen: false,
    mode: "create",
    data: null,
    open: (mode: FormMode, data?: PurchaseOrderSchemaType) =>
      set({ isOpen: true, mode, data }),
    close: () => set({ isOpen: false, mode: "create", data: null }),
  })
);
