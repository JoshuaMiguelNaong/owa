import { Region, Province, City, Municipality, Barangay } from "./types";

// Regions
export const regions: Region[] = [
  { id: "7e4f7b6a-bec7-4de8-9d6f-5d9a4e62c8a1", name: "Ilocos Region" },
  { id: "f5e75c68-7bb1-4714-8cc0-94d5a4e7b9b2", name: "Cagayan Valley" },
  { id: "4bfa4df8-3d26-496a-a5e7-7fb615c6e3f1", name: "Central Luzon" },
  { id: "92cbe3d6-0469-4fa1-b9d3-8a7df56c67e5", name: "CALABARZON" },
  { id: "d24f5a36-248c-4c2f-8bda-7c4d8c5e9b45", name: "MIMAROPA" },
  { id: "31f81b62-9e47-45d3-95ce-21e6c45f0a72", name: "Bicol Region" },
  { id: "56a2f1a3-4179-4b5a-a43a-4f39d6a4e8c3", name: "Western Visayas" },
  { id: "b28c9f1e-74a5-4a9f-87f2-13e9d7f5c4e8", name: "Central Visayas" },
  { id: "c12d9f4a-3e8f-4a65-b49e-27f4b9c6e5a3", name: "Eastern Visayas" },
  {
    id: "e45d6c7a-1a2f-4f8c-84b9-5f1a2c3d6e7b",
    name: "National Capital Region",
  },
];

// Provinces
export const provinces: Province[] = [
  {
    id: "e20d9f5a-41a7-4f65-b3a9-7e2c1a5d8f7b",
    name: "Ilocos Norte",
    regionId: regions[0].id!,
  },
  {
    id: "c13b7f6a-82e5-4a97-8c5a-1f3e8b7c9a6f",
    name: "Ilocos Sur",
    regionId: regions[0].id!,
  },
  {
    id: "a2d8f5c3-7e4a-48c2-8b9a-3f2d6c7e9b1a",
    name: "Cagayan",
    regionId: regions[1].id!,
  },
  {
    id: "b17c6e9a-3f2b-4d5a-9c7e-8f1a2d3b6c4e",
    name: "Isabela",
    regionId: regions[1].id!,
  },
  {
    id: "f6a2c3b1-8d7e-4a5c-9b3a-1c2f8e7d5a9b",
    name: "Pampanga",
    regionId: regions[2].id!,
  },
  {
    id: "d4b1c6f8-7e9a-4a3f-9c2e-8f1a7b5c6d3e",
    name: "Bulacan",
    regionId: regions[2].id!,
  },
  {
    id: "b5e1f9c7-2a6d-4e8f-9c3b-1f7a2e6d4c8b",
    name: "Laguna",
    regionId: regions[3].id!,
  },
  {
    id: "c6d8b1a7-9f3e-4a2d-8b5c-1f9a3e6b7d2c",
    name: "Batangas",
    regionId: regions[3].id!,
  },
  {
    id: "a1f9b2d8-7e3c-4a6d-9b5a-2c8e7f1a4d6b",
    name: "Albay",
    regionId: regions[5].id!,
  },
  {
    id: "f2b7d6e8-1c9a-4a3d-8f5b-7c2e1a9d6b3f",
    name: "Metro Manila",
    regionId: regions[9].id!,
  },
];

// Cities
export const cities: City[] = [
  {
    id: "c1a2b3d4-e5f6-47a8-9b0c-d1e2f3a4b5c6",
    name: "Laoag City",
    provinceId: provinces[0].id!,
  },
  {
    id: "b2c3d4e5-f6a7-48b9-0c1d-e2f3a4b5c6d7",
    name: "Vigan City",
    provinceId: provinces[1].id!,
  },
  {
    id: "d3e4f5a6-b7c8-49d0-1e2f-3a4b5c6d7e8f",
    name: "Tuguegarao City",
    provinceId: provinces[2].id!,
  },
  {
    id: "e4f5a6b7-c8d9-40e1-2f3a-4b5c6d7e8f9a",
    name: "Cauayan City",
    provinceId: provinces[3].id!,
  },
  {
    id: "f5a6b7c8-d9e0-41f2-3a4b-5c6d7e8f9a0b",
    name: "San Fernando",
    provinceId: provinces[4].id!,
  },
  {
    id: "a6b7c8d9-e0f1-42a3-4b5c-6d7e8f9a0b1c",
    name: "Malolos",
    provinceId: provinces[5].id!,
  },
  {
    id: "b7c8d9e0-f1a2-43b4-5c6d-7e8f9a0b1c2d",
    name: "Santa Rosa City",
    provinceId: provinces[6].id!,
  },
  {
    id: "c8d9e0f1-a2b3-44c5-6d7e-8f9a0b1c2d3e",
    name: "Batangas City",
    provinceId: provinces[7].id!,
  },
  {
    id: "d9e0f1a2-b3c4-45d6-7e8f-9a0b1c2d3e4f",
    name: "Legazpi City",
    provinceId: provinces[8].id!,
  },
  {
    id: "e0f1a2b3-c4d5-46e7-8f9a-0b1c2d3e4f5a",
    name: "Quezon City",
    provinceId: provinces[9].id!,
  },
];

// Municipalities
// Municipalities
export const municipalities: Municipality[] = [
  {
    id: "f1a2b3c4-d5e6-47f8-9a0b-1c2d3e4f5a6b",
    name: "Paoay",
    provinceId: provinces[0].id!,
    cityId: cities[0].id!,
  },
  {
    id: "a2b3c4d5-e6f7-48a9-0b1c-2d3e4f5a6b7c",
    name: "Santa Maria",
    provinceId: provinces[1].id!,
    cityId: cities[1].id!,
  },
  {
    id: "b3c4d5e6-f7a8-49b0-1c2d-3e4f5a6b7c8d",
    name: "Aparri",
    provinceId: provinces[2].id!,
    cityId: cities[2].id!,
  },
  {
    id: "c4d5e6f7-a8b9-40c1-2d3e-4f5a6b7c8d9e",
    name: "Echague",
    provinceId: provinces[3].id!,
    cityId: cities[3].id!,
  },
  {
    id: "d5e6f7a8-b9c0-41d2-3e4f-5a6b7c8d9e0f",
    name: "Lubao",
    provinceId: provinces[4].id!,
    cityId: cities[4].id!,
  },
  {
    id: "e6f7a8b9-c0d1-42e3-4f5a-6b7c8d9e0f1a",
    name: "Baliuag",
    provinceId: provinces[5].id!,
    cityId: cities[5].id!,
  },
  {
    id: "f7a8b9c0-d1e2-43f4-5a6b-7c8d9e0f1a2b",
    name: "Los Baños",
    provinceId: provinces[6].id!,
    cityId: cities[6].id!,
  },
  {
    id: "a8b9c0d1-e2f3-44a5-6b7c-8d9e0f1a2b3c",
    name: "Nasugbu",
    provinceId: provinces[7].id!,
    cityId: cities[7].id!,
  },
  {
    id: "b9c0d1e2-f3a4-45b6-7c8d-9e0f1a2b3c4d",
    name: "Daraga",
    provinceId: provinces[8].id!,
    cityId: cities[8].id!,
  },
  {
    id: "c0d1e2f3-a4b5-46c7-8d9e-0f1a2b3c4d5e",
    name: "Marilao",
    provinceId: provinces[5].id!,
    cityId: cities[5].id!,
  },
];

// Barangays
export const barangays: Barangay[] = [
  {
    id: "d1e2f3a4-b5c6-47d8-9e0f-1a2b3c4d5e6f",
    name: "Barangay San Lorenzo",
    cityId: cities[0].id!,
    municipalityId: municipalities[0].id!,
  },
  {
    id: "e2f3a4b5-c6d7-48e9-0f1a-2b3c4d5e6f7a",
    name: "Barangay Tamag",
    cityId: cities[1].id!,
    municipalityId: municipalities[1].id!,
  },
  {
    id: "f3a4b5c6-d7e8-49f0-1a2b-3c4d5e6f7a8b",
    name: "Barangay Carig",
    cityId: cities[2].id!,
    municipalityId: municipalities[2].id!,
  },
  {
    id: "a4b5c6d7-e8f9-40a1-2b3c-4d5e6f7a8b9c",
    name: "Barangay San Fermin",
    cityId: cities[3].id!,
    municipalityId: municipalities[3].id!,
  },
  {
    id: "b5c6d7e8-f9a0-41b2-3c4d-5e6f7a8b9c0d",
    name: "Barangay Del Pilar",
    cityId: cities[4].id!,
    municipalityId: municipalities[4].id!,
  },
  {
    id: "c6d7e8f9-a0b1-42c3-4d5e-6f7a8b9c0d1e",
    name: "Barangay Tikay",
    cityId: cities[5].id!,
    municipalityId: municipalities[5].id!,
  },
  {
    id: "d7e8f9a0-b1c2-43d4-5e6f-7a8b9c0d1e2f",
    name: "Barangay Tagapo",
    cityId: cities[6].id!,
    municipalityId: municipalities[6].id!,
  },
  {
    id: "e8f9a0b1-c2d3-44e5-6f7a-8b9c0d1e2f3a",
    name: "Barangay Pallocan",
    cityId: cities[7].id!,
    municipalityId: municipalities[7].id!,
  },
  {
    id: "f9a0b1c2-d3e4-45f6-7a8b-9c0d1e2f3a4b",
    name: "Barangay Rawis",
    cityId: cities[8].id!,
    municipalityId: municipalities[8].id!,
  },
  {
    id: "a0b1c2d3-e4f5-46a7-8b9c-0d1e2f3a4b5c",
    name: "Barangay Commonwealth",
    cityId: cities[9].id!,
    municipalityId: municipalities[9].id!,
  },
];
