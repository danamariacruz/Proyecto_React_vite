import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setEditPaciente,eliminarPaciente}) => {

    return (
        <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>

            {pacientes && pacientes.length ? (
                <>
                    <h2 className='font-black text-2xl text-center'>Listado Pacientes</h2>

                    <p className='text-md mt-5 text-center mb-10'>
                        Administra tus  <span className='text-indigo-600 font-bold'>Pacientes y citas</span>
                    </p>

                    {pacientes.map((paciente) => (
                        <Paciente 
                            key={paciente.id}
                            paciente={paciente}
                            setEditPaciente={setEditPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    ))}
                </>
            ) : 
            (
                <>
                    <h2 className='font-black text-2xl text-center'>No hay pacientes</h2>

                    <p className='text-md mt-5 text-center mb-10'>
                        Empieza agregando pacientes  <span className='text-indigo-600 font-bold'>y paraceran en este lugar</span>
                    </p>

                    {pacientes.map((paciente) => (
                        <Paciente 
                            key={paciente.id}
                            paciente={paciente}
                        />
                    ))}
                </>
            ) }
            
            
        </div>
    )
}

export default ListadoPacientes