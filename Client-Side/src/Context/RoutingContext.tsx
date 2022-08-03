import React, { useState  } from 'react';


interface  valueObj {
    hasUserName : boolean  ,
    FinishedTest: boolean  ,
    setUserNameHandler : () => void ,
    setTestHandler : () => void
}


export const RoutingContext = React.createContext<valueObj>({
    hasUserName: false ,
    FinishedTest: false ,
    setUserNameHandler: () => {} ,
    setTestHandler: () => {}

})


export const RoutingContextProvider: React.FC<{children: React.ReactNode}> = (props) => {

    const [hasUserName , setHasUserName] = useState<boolean>(false);
    const [FinishedTest , setFinishedTest] = useState<boolean>(false);

    const setUserNameHandler = () => { 
        setHasUserName(true)
    }

    const setTestHandler = () => { setFinishedTest(true)}


    const contextValue : valueObj = {
        hasUserName ,
        FinishedTest,
        setUserNameHandler ,
        setTestHandler
    }


    
    return <RoutingContext.Provider value={contextValue}>{props.children}</RoutingContext.Provider>
} 