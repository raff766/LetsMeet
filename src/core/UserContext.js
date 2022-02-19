import React from 'react'

export const UserContext = React.createContext({
  userId: -1,
  setUserId: () => {},
})

export function UserContextProvider({ children }) {
  const [userId, setUserId] = React.useState(-1)

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  )
}
