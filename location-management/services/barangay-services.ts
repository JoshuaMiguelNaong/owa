"use server";

import { barangaySchema } from "../types";
import { Barangay } from "../schemas";
import { httpService } from "@/app/utils/http";

//
// BARANGAY CRUD
//

// Get all barangays
export const getBarangays = async (): Promise<Barangay[]> => {
  const response = await httpService.get<Barangay[]>("barangays");

  if (response.error || !response.data) {
    throw new Error(response.error || "Failed to fetch Barangays");
  }

  return response.data;
};

// Get barangay by ID
export const getBarangayById = async (id: string): Promise<Barangay> => {
  const response = await httpService.get<Barangay>(`barangays/${id}`);

  if (response.error || !response.data) {
    throw new Error(response.error || `Failed to fetch Barangay with id ${id}`);
  }

  return response.data;
};

// Create barangay
export const createBarangay = async (
  data: Omit<Barangay, "id">
): Promise<Barangay> => {
  const parsed = barangaySchema.parse(data);

  const response = await httpService.post<Barangay>("barangays", parsed);

  if (response.error || !response.data) {
    throw new Error(response.error || "Failed to create Barangay");
  }

  return response.data;
};

// Update barangay
export const updateBarangay = async (
  id: string,
  data: Partial<Omit<Barangay, "id">>
): Promise<Barangay> => {
  const parsed = barangaySchema.partial().parse(data);

  const response = await httpService.put<Barangay>(`barangays/${id}`, parsed);

  if (response.error || !response.data) {
    throw new Error(
      response.error || `Failed to update Barangay with id ${id}`
    );
  }

  return response.data;
};

// Delete barangay
export const deleteBarangay = async (id: string): Promise<Barangay> => {
  const response = await httpService.delete<Barangay>(`barangays/${id}`);

  if (response.error || !response.data) {
    throw new Error(
      response.error || `Failed to delete Barangay with id ${id}`
    );
  }

  return response.data;
};
