import type { InferType } from "react-hook-form";
import { customerSchema } from "@yup/customer-schema";

export type CustomerFields = InferType<typeof customerSchema>;
