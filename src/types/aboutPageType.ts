import { ReactNode } from "react";

export interface AboutPageType {
  title?: string;
  subtitle?: string;
  description?: string;
  icon?: ReactNode;
  children?: ReactNode;
}
