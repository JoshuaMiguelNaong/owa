"use server";

import { citySchema } from "../types";
import { City } from "../schemas";
import { httpService } from "@/app/utils/http";

//
// CITY CRUD
//
export const getCities = async (): Promise<City[]> => {
  const response = await httpService.get<City[]>("cities");
  console.log("Raw city response:", response);
  if (response.error || !response.data)
    throw new Error(response.error || "Failed to fetch cities");
  return response.data;
};

export const getCityById = async (id: string): Promise<City> => {
  const response = await httpService.get<City>(`cities/${id}`);
  if (response.error || !response.data)
    throw new Error(response.error || `Failed to fetch city with id ${id}`);
  return response.data;
};

export const createCity = async (data: Omit<City, "id">): Promise<City> => {
  const parsed = citySchema.parse(data);
  const response = await httpService.post<City>("cities", parsed);
  if (response.error || !response.data)
    throw new Error(response.error || "Failed to create city");
  return response.data;
};

export const updateCity = async (
  id: string,
  data: Partial<Omit<City, "id">>
): Promise<City> => {
  const parsed = citySchema.partial().parse(data);
  const response = await httpService.put<City>(`cities/${id}`, parsed);
  if (response.error || !response.data)
    throw new Error(response.error || `Failed to update city with id ${id}`);
  return response.data;
};

export const deleteCity = async (id: string): Promise<City> => {
  const response = await httpService.delete<City>(`cities/${id}`);
  if (response.error || !response.data)
    throw new Error(response.error || `Failed to delete city with id ${id}`);
  return response.data;
};
