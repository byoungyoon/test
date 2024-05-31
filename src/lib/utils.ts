import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge classes with tailwind-merge with clsx full feature */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function textExcludingSpaces(text: string) {
  return text.replace(/\s/gi, '').length;
}

export const splitText = (text: string, len: number) => {
  return text.length >= len ? `${text.substring(0, len)}...` : text;
};
