import { useContext } from "react"
import { TmaContext } from "./context"

export function useTMA(){
    return useContext(TmaContext);
}
