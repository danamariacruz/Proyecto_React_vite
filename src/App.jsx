import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"; 
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [paciente,setPaciente] = useState([])
  const [editPaciente, setEditPaciente] = useState({})

  useEffect(() => {
    const obtenerLS = () => {
      const pacienteLS = JSON.parse(localStorage.getItem('paciente')) ?? [];

      setPaciente(pacienteLS)
    }
    obtenerLS()
  },[])

  useEffect(() => {
    localStorage.setItem('Pacientes',JSON.stringify(paciente))
  },[paciente])

  const eliminarPaciente  = (id) => {
    const pacienteActualizado = paciente.filter( pacienteA => pacienteA.id !== id);
    setPaciente(pacienteActualizado)
    
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className='mt-12 md:flex'>
        <Formulario 
        pacientes={paciente}
        setPaciente={setPaciente}
        editPaciente={editPaciente}
        setEditPaciente={setEditPaciente}
        />
        <ListadoPacientes 
        pacientes={paciente}
        setEditPaciente = {setEditPaciente}
        eliminarPaciente = {eliminarPaciente}
        />
      </div>      
    </div>
  )
}

export default App