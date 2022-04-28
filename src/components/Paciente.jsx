const Paciente = ({paciente, setEditPaciente,eliminarPaciente}) => {
    const {nombre,propietario,correo,fecha,sintomas,id} = paciente

    const handleEliminar  =() => {
        const respuesta = confirm('Esta seguro que desea eliminar este paciente')

        if (respuesta) {
            eliminarPaciente(id)
        }
    }

    return (
    <div className='mx-3 my-5 bg-white shadow-md px-5 py-5 rounded-md'>
        <p className='font-bold mb-3 text-gray-700 uppercase'> Nombre: <span className='font-normal normal-case'>{nombre}</span></p>
    
        <p className='font-bold mb-3 text-gray-700 uppercase'> Propietario: <span className='font-normal normal-case'>{propietario}</span></p>

        <p className='font-bold mb-3 text-gray-700 uppercase'> Correo: <span className='font-normal normal-case'>{correo}</span></p>

        <p className='font-bold mb-3 text-gray-700 uppercase'> Fecha: <span className='font-normal normal-case'>{fecha}</span></p> 

        <p className='font-bold mb-3 text-gray-700 uppercase'> Sintomas: <span className='font-normal normal-case'>{sintomas}</span></p>

        <div>
            <button type="button" className="py-2 px-10 mr-5 bg-indigo-600 hover:bg-indigo-700 text-white fond-bold  uppercase rounded-lg" onClick={() => setEditPaciente(paciente)}>Editar</button>

            <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white fond-bold  uppercase rounded-lg" onClick={handleEliminar}>Eliminar</button>
        </div>
    </div>
    )
  }
  
  export default Paciente