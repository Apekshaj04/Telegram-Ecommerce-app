'use client'
import { createContext } from "react";
import { User } from "@tma.js/sdk-react";

type TTmaContext = {
    user: User;
};

export const TmaContext = createContext<TTmaContext>({} as TTmaContext);
