"use client";

import React from "react";
import { updateBrand } from "@/app/admin/brands/brand";
import { Modal } from "bootstrap";

type SaveButtonProps = {
  editingBrand: {
    id: string;
    name: string;
    description?: string | null;
  } | null;
  formName: string;
  formDescription: string;
  setEditingBrand: (val: any) => void;
  setBrands: React.Dispatch<React.SetStateAction<any[]>>;
};

const SaveButton: React.FC<SaveButtonProps> = ({
  editingBrand,
  formName,
  formDescription,
  setEditingBrand,
  setBrands,
}) => {
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingBrand) return;

    try {
      const result = await updateBrand(editingBrand.id, {
        name: formName,
        description: formDescription,
      });

      // Update state
      setBrands((prev) =>
        prev.map((brand) =>
          brand.id === editingBrand.id ? { ...brand, ...result } : brand
        )
      );

      const modal = Modal.getInstance(
        document.getElementById("editBrandModal")!
      );
      modal?.hide();
      setEditingBrand(null);
    } catch (error) {
      console.error("Error updating brand:", error);
    }
  };

  return (
    <button type="submit" className="btn btn-success" onClick={handleSave}>
      Save Changes
    </button>
  );
};

export default SaveButton;
