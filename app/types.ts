

export interface LoginInfo{
    userType:UserType
    email:string
    password:string
}
export interface RegisterInfo{
    userType:UserType
    name:string
    email:string
    password:string
}
export type UserType = "employee" | "employer"

export type FieldConfig = {
    fieldName: string;
    label: string;
    message: string;
    type?: 'text' | 'range';
    range?: { min: number; max: number }; 
    span?: number;
  };
  
  export type DynamicFieldListProps = {
    name: string;
    fields: FieldConfig[];
    addButtonLabel: string;
    colSpan?: number;
  };