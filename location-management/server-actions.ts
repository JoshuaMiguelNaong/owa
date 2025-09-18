"use server";

import { randomUUID } from "crypto";

import { regions, provinces, cities, municipalities, barangays } from "./data";
import {
  regionSchema,
  provinceSchema,
  citySchema,
  municipalitySchema,
  barangaySchema,
} from "./types";
import { Region, Province, City, Municipality, Barangay } from "./schemas";
import { httpService } from "@/app/utils/http";

//
// REGION CRUD
//
export const getRegions = async (): Promise<Region[]> => {
  const response = await httpService.get<Region[]>("/local");

  if (response.error || !response.data) {
    throw new Error(response.error || "Failed to fetch regions");
  }

  return response.data;
};

export const getRegionById = async (id: string): Promise<Region | undefined> =>
  regions.find((r) => r.id === id);

export const createRegion = async (
  data: Omit<Region, "id">
): Promise<Region> => {
  const parsed = regionSchema.parse(data);
  const newRegion: Region = { id: randomUUID(), ...parsed };
  regions.push(newRegion);
  return newRegion;
};

export const updateRegion = async (
  id: string,
  data: Partial<Omit<Region, "id">>
): Promise<Region | undefined> => {
  const index = regions.findIndex((r) => r.id === id);
  if (index === -1) return undefined;
  const updated = { ...regions[index], ...data };
  const parsed = regionSchema.parse(updated);
  regions[index] = parsed;
  return parsed;
};

export const deleteRegion = async (id: string): Promise<Region | undefined> => {
  const index = regions.findIndex((r) => r.id === id);
  if (index === -1) return undefined;
  const [deleted] = regions.splice(index, 1);
  return deleted;
};

//
// PROVINCE CRUD
//
export const getProvinces = async (): Promise<Province[]> => provinces;

export const getProvinceById = async (
  id: string
): Promise<Province | undefined> => provinces.find((p) => p.id === id);

export const createProvince = async (
  data: Omit<Province, "id">
): Promise<Province> => {
  const parsed = provinceSchema.parse(data);
  const newProvince: Province = { id: randomUUID(), ...parsed };
  provinces.push(newProvince);
  return newProvince;
};

export const updateProvince = async (
  id: string,
  data: Partial<Omit<Province, "id">>
): Promise<Province | undefined> => {
  const index = provinces.findIndex((p) => p.id === id);
  if (index === -1) return undefined;
  const updated = { ...provinces[index], ...data };
  const parsed = provinceSchema.parse(updated);
  provinces[index] = parsed;
  return parsed;
};

export const deleteProvince = async (
  id: string
): Promise<Province | undefined> => {
  const index = provinces.findIndex((p) => p.id === id);
  if (index === -1) return undefined;
  const [deleted] = provinces.splice(index, 1);
  return deleted;
};

//
// CITY CRUD
//
export const getCities = async (): Promise<City[]> => cities;

export const getCityById = async (id: string): Promise<City | undefined> =>
  cities.find((c) => c.id === id);

export const createCity = async (data: Omit<City, "id">): Promise<City> => {
  const parsed = citySchema.parse(data);
  const newCity: City = { id: randomUUID(), ...parsed };
  cities.push(newCity);
  return newCity;
};

export const updateCity = async (
  id: string,
  data: Partial<Omit<City, "id">>
): Promise<City | undefined> => {
  const index = cities.findIndex((c) => c.id === id);
  if (index === -1) return undefined;
  const updated = { ...cities[index], ...data };
  const parsed = citySchema.parse(updated);
  cities[index] = parsed;
  return parsed;
};

export const deleteCity = async (id: string): Promise<City | undefined> => {
  const index = cities.findIndex((c) => c.id === id);
  if (index === -1) return undefined;
  const [deleted] = cities.splice(index, 1);
  return deleted;
};

//
// MUNICIPALITY CRUD
//
export const getMunicipalities = async (): Promise<Municipality[]> =>
  municipalities;

export const getMunicipalityById = async (
  id: string
): Promise<Municipality | undefined> => municipalities.find((m) => m.id === id);

export const createMunicipality = async (
  data: Omit<Municipality, "id">
): Promise<Municipality> => {
  const parsed = municipalitySchema.parse(data);
  const newMunicipality: Municipality = { id: randomUUID(), ...parsed };
  municipalities.push(newMunicipality);
  return newMunicipality;
};

export const updateMunicipality = async (
  id: string,
  data: Partial<Omit<Municipality, "id">>
): Promise<Municipality | undefined> => {
  const index = municipalities.findIndex((m) => m.id === id);
  if (index === -1) return undefined;
  const updated = { ...municipalities[index], ...data };
  const parsed = municipalitySchema.parse(updated);
  municipalities[index] = parsed;
  return parsed;
};

export const deleteMunicipality = async (
  id: string
): Promise<Municipality | undefined> => {
  const index = municipalities.findIndex((m) => m.id === id);
  if (index === -1) return undefined;
  const [deleted] = municipalities.splice(index, 1);
  return deleted;
};

//
// BARANGAY CRUD
//
export const getBarangays = async (): Promise<Barangay[]> => barangays;

export const getBarangayById = async (
  id: string
): Promise<Barangay | undefined> => barangays.find((b) => b.id === id);

export const createBarangay = async (
  data: Omit<Barangay, "id">
): Promise<Barangay> => {
  const parsed = barangaySchema.parse(data);
  const newBarangay: Barangay = { id: randomUUID(), ...parsed };
  barangays.push(newBarangay);
  return newBarangay;
};

export const updateBarangay = async (
  id: string,
  data: Partial<Omit<Barangay, "id">>
): Promise<Barangay | undefined> => {
  const index = barangays.findIndex((b) => b.id === id);
  if (index === -1) return undefined;
  const updated = { ...barangays[index], ...data };
  const parsed = barangaySchema.parse(updated);
  barangays[index] = parsed;
  return parsed;
};

export const deleteBarangay = async (
  id: string
): Promise<Barangay | undefined> => {
  const index = barangays.findIndex((b) => b.id === id);
  if (index === -1) return undefined;
  const [deleted] = barangays.splice(index, 1);
  return deleted;
};
