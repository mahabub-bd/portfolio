"use server";

import { revalidatePath } from "next/cache";

export const serverRevalidate = async (path: string): Promise<void> => {
  try {
    revalidatePath(path);
  } catch (error) {
    console.error(`Error revalidating path "${path}":`, error);
    throw new Error(`Failed to revalidate path: ${path}`);
  }
};
