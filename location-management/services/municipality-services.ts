"use server";

import { municipalitySchema } from "../types";
import { Municipality } from "../schemas";
import { httpService } from "@/app/utils/http";

//
// MUNICIPALITY CRUD
//
export const getMunicipalities = async (): Promise<Municipality[]> => {
  const response = await httpService.get<Municipality[]>("municipalities");
  if (response.error || !response.data)
    throw new Error(response.error || "Failed to fetch municipalities");
  return response.data;
};

export const getMunicipalityById = async (
  id: string
): Promise<Municipality> => {
  const response = await httpService.get<Municipality>(`municipalities/${id}`);
  if (response.error || !response.data)
    throw new Error(
      response.error || `Failed to fetch municipality with id ${id}`
    );
  return response.data;
};

export const createMunicipality = async (
  data: Omit<Municipality, "id">
): Promise<Municipality> => {
  const parsed = municipalitySchema.parse(data);
  const response = await httpService.post<Municipality>(
    "municipalities",
    parsed
  );
  if (response.error || !response.data)
    throw new Error(response.error || "Failed to create municipality");
  return response.data;
};

export const updateMunicipality = async (
  id: string,
  data: Partial<Omit<Municipality, "id">>
): Promise<Municipality> => {
  const parsed = municipalitySchema.partial().parse(data);
  const response = await httpService.put<Municipality>(
    `municipalities/${id}`,
    parsed
  );
  if (response.error || !response.data)
    throw new Error(
      response.error || `Failed to update municipality with id ${id}`
    );
  return response.data;
};

export const deleteMunicipality = async (id: string): Promise<Municipality> => {
  const response = await httpService.delete<Municipality>(
    `municipalities/${id}`
  );
  if (response.error || !response.data)
    throw new Error(
      response.error || `Failed to delete municipality with id ${id}`
    );
  return response.data;
};
