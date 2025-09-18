import { PaymentMade } from "./schema-and-types";
import { paymentsMade } from "./data";

export const getPayments = async(): Promise<PaymentMade[]> => {
    const payments = paymentsMade as PaymentMade[];
    return payments;
}

export const getPaymentsById = async( id:string ): Promise<PaymentMade | undefined> => {
    const payments = paymentsMade.find((i) => i.id == id);
    return payments;
}