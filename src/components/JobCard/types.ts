import { ReactNode } from "react";

// Define the props that JobCard expects
export type Props = {
  title: string;
  description?: string;
  icon: ReactNode;
  active?: boolean;
  onClick?: () => void;
};
