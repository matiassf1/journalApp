import { useSelector } from "react-redux"
import { Routes, Route, Navigate } from "react-router-dom"
import { JournalPage } from "../pages/JournalPage"
import { CheckingAuth } from '../../ui/components/CheckingAuth'


export const JournalRoutes = () => {

  const { notes } = useSelector( (state) => state.journal )

  if( !notes ){
    return <CheckingAuth />
  }

  return (
    <Routes>
        
        <Route path="/" element={<JournalPage />}/>

        <Route path="/*" element={<Navigate to='/' />}/>

    </Routes>
  )
}
