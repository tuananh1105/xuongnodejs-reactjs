import instance from "@/configs/axios";
import { IProduct } from "@/interfaces/product";

export const getAllProduct = async (): Promise<IProduct[]> => {
  try {
    const { data } = await instance.get(`/products`);
    const { data: produts } = data;
    return produts;
  } catch (error) {
    return [];
  }
};
export const getProductById = async (id: number | string) => {
  try {
    const response = await instance.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const addProduct = async (product: IProduct) => {
  try {
    const response = await instance.post(`/products`, product);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
