"use server";

import { provinceSchema } from "../types";
import { Province } from "../schemas";
import { httpService } from "@/app/utils/http";
//
// PROVINCE CRUD
//
export const getProvinces = async (): Promise<Province[]> => {
  const response = await httpService.get<Province[]>("provinces");
  if (response.error || !response.data)
    throw new Error(response.error || "Failed to fetch provinces");
  return response.data;
};

export const getProvinceById = async (id: string): Promise<Province> => {
  const response = await httpService.get<Province>(`provinces/${id}`);
  if (response.error || !response.data)
    throw new Error(response.error || `Failed to fetch province with id ${id}`);
  return response.data;
};

export const createProvince = async (
  data: Omit<Province, "id">
): Promise<Province> => {
  const parsed = provinceSchema.parse(data);
  const response = await httpService.post<Province>("provinces", parsed);
  if (response.error || !response.data)
    throw new Error(response.error || "Failed to create province");
  return response.data;
};

export const updateProvince = async (
  id: string,
  data: Partial<Omit<Province, "id">>
): Promise<Province> => {
  const parsed = provinceSchema.partial().parse(data);
  const response = await httpService.put<Province>(`provinces/${id}`, parsed);
  if (response.error || !response.data)
    throw new Error(
      response.error || `Failed to update province with id ${id}`
    );
  return response.data;
};

export const deleteProvince = async (id: string): Promise<Province> => {
  const response = await httpService.delete<Province>(`provinces/${id}`);
  if (response.error || !response.data)
    throw new Error(
      response.error || `Failed to delete province with id ${id}`
    );
  return response.data;
};
