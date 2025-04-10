
// Define the allowed values for the 'status' field.
export type StatusType = "Active" | "Liquidated" | "Status";
// Interface that defines the shape of each row of data
export interface RowData {
  name: string;
  id: string;
  category: string;
  principal: string;
  alias: string;
  subAlias: string;
  status: StatusType;
  date: string;
}
