import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatBigNumber(num: number): string {
  let result: string;
  let factor: number;
  
  if (num >= 1e6) {
    result = (num / 1e6).toFixed(1) + 'M';
    factor = 1e6;
  } else if (num >= 1e3) {
    result = (num / 1e3).toFixed(1) + 'K';
    factor = 1e3;
  } else {
    result = num.toString();
    factor = 1;
  }
  
  return result;
}







