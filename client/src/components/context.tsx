import { createContext, useState } from "react";
import { Misdemeanour } from "../../types/misdemeanours.types";

export const MisdemeanourContext = createContext <Array<Misdemeanour>>([]);