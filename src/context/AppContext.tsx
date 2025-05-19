import { createContext } from "react"
import type { AppStateContextType } from "./types"

// Exporta el contexto vacío, pero tipado
export const appContext = createContext<AppStateContextType | null>(null)