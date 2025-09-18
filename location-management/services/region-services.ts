"use server";

import { regionSchema } from "../types";
import { Region } from "../schemas";
import { httpService } from "@/app/utils/http";

// REGION CRUD
//
export const getRegions = async (): Promise<Region[]> => {
  const response = await httpService.get<Region[]>("regions");
  if (response.error || !response.data)
    throw new Error(response.error || "Failed to fetch regions");
  return response.data;
};

export const getRegionById = async (id: string): Promise<Region> => {
  const response = await httpService.get<Region>(`regions/${id}`);
  if (response.error || !response.data)
    throw new Error(response.error || `Failed to fetch region with id ${id}`);
  return response.data;
};

export const createRegion = async (
  data: Omit<Region, "id">
): Promise<Region> => {
  const parsed = regionSchema.parse(data);
  const response = await httpService.post<Region>("regions", parsed);
  if (!response.data) {
    throw new Error("Failed to create region: no data returned");
  }

  return response.data;
};

export const updateRegion = async (
  id: string,
  data: Partial<Omit<Region, "id">>
): Promise<Region> => {
  const parsed = regionSchema.partial().parse(data);
  const response = await httpService.put<Region>(`regions/${id}`, parsed);
  if (response.error || !response.data)
    throw new Error(response.error || `Failed to update region with id ${id}`);
  return response.data;
};

export const deleteRegion = async (id: string): Promise<Region> => {
  const response = await httpService.delete<Region>(`regions/${id}`);
  if (response.error || !response.data)
    throw new Error(response.error || `Failed to delete region with id ${id}`);
  return response.data;
};
