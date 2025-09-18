import { z } from "zod";
import {
  regionSchema,
  provinceSchema,
  citySchema,
  municipalitySchema,
  barangaySchema,
} from "./types";

export type Region = z.infer<typeof regionSchema>;
export type Province = z.infer<typeof provinceSchema>;
export type City = z.infer<typeof citySchema>;
export type Municipality = z.infer<typeof municipalitySchema>;
export type Barangay = z.infer<typeof barangaySchema>;

export interface RegionTree extends Region {
  provinces?: Province[];
}

export interface ProvinceTree extends Province {
  cities?: City[];
  municipalities?: Municipality[];
}

export interface CityTree extends City {
  barangays?: Barangay[];
}

export interface MunicipalityTree extends Municipality {
  barangays?: Barangay[];
}
