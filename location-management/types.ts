import { z } from "zod";

const guid = z.string().uuid();

// Region
export const regionSchema = z.object({
  id: guid.optional(),
  name: z.string().min(2).max(100),
});

// Province
export const provinceSchema = z.object({
  id: guid.optional(),
  name: z.string().min(2).max(100),
  regionId: guid,
});

// City
export const citySchema = z.object({
  id: guid.optional(),
  name: z.string().min(2).max(100),
  provinceId: guid,
  district: z.string().min(2).max(100).optional(),
  zipcode: z.string().min(4).max(10).optional(),
  type: z.enum(["City", "Municipality"]).optional(),
});

// Municipality
export const municipalitySchema = z.object({
  id: guid.optional(),
  name: z.string().min(2).max(100),
  type: z.enum(["City", "Municipality"]),
  district: z.string().optional(),
  zipCode: z.string().min(4).max(10).optional(),
  provinceId: guid,
  province: z.any().nullable().optional(),
  barangays: z.any().nullable().optional(),
});

// Barangay
export const barangaySchema = z.object({
  id: guid.optional(),
  name: z.string().min(2).max(100),
  lguId: z.string().uuid(),
});
