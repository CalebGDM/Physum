import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { registerForPushNotificationsAsync } from "../utils/PushNotifications";
import { Auth, DataStore } from "aws-amplify";
import { User } from "../models";

const UserContext = createContext({})

const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User>()
    const [expoToken, setExpoToken] = useState<string>()
    
    useEffect(() => {

        (async () => {
            const userData = await Auth.currentAuthenticatedUser()

            const users = await DataStore.query(User)
            const me = users.find((user) => user.sub == userData?.attributes.sub)
            if(me){
                setUser(me)
            } else {
                const newUser = new User({
                    sub: userData?.attributes.sub
                })
                const saved = await DataStore.save(newUser)
                setUser(saved)
            }
            
        })()
        
        
      }, []);


    useEffect(() => {
        (async () => {
          const token = await registerForPushNotificationsAsync();
          setExpoToken(token)
        })();
      }, []);

    useEffect(() => {
        (async () => {
            if (user  && expoToken && user.expoNotificationToken !== expoToken) {
                const updatedUser = await DataStore.save(User.copyOf(user, updated => {
                    updated.expoNotificationToken = expoToken
                }))
                setUser(updatedUser)
              }
        })()
      
    }, [user, expoToken])
    


    return <UserContext.Provider value={{ }}>
        {children}
    </UserContext.Provider>
}

export default UserContextProvider
export const useUserCotext = () => useContext(UserContext)