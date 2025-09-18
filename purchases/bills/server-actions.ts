import { Bill } from "./schema-and-types";
import { bills } from "./data"

export const getBills = async(): Promise<Bill[]> => {
    const data = bills as Bill[];
    return data;
}

export const getBillsById = async(id: string): Promise<Bill | undefined> => {
    const data = bills.find((i) => i.id == id);
    return data
}