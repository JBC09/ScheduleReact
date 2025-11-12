import React, {useContext} from "react";

interface GlobalContextType {
    globalUserName: string,
    setGlobalUserName: (userName: string) => void,
}

const GlobalContext = React.createContext<GlobalContextType | undefined>(undefined);



export const GlobalProvider : React.FC<{children: React.ReactNode}> = ({children}) => {
    const [globalUserName, setGlobalUserName] = React.useState<string>(null);

    return (
        <GlobalContext.Provider value={{globalUserName, setGlobalUserName}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => {
    const context = useContext(GlobalContext);
    if(!context) {
        throw new Error("useGlobal must be used within a GlobalProvider");
    }
    return context;
}