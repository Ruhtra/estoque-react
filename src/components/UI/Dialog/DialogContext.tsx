import { createContext, ReactNode, useState } from "react";

interface DialogContextType  {
    openDialog: boolean,
    setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>
}
type DialogProviderProps = {
    children: ReactNode
}

export const DialogContext = createContext<DialogContextType>({} as DialogContextType)

export function DialogProvider({ children }: DialogProviderProps) {
    const [openDialog, setOpenDialog] = useState<boolean>(false)


    return (
        <DialogContext.Provider value={{ openDialog, setOpenDialog }}>
            {children}
        </DialogContext.Provider>
    )
}