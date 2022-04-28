import { useState, useEffect } from "react"
import Error from "./Error"

const Formulario = ({pacientes,setPaciente,editPaciente,setEditPaciente}) => {
    //los hooks siempre se declara antes del return y dentro de la funcion
    const [nombre, setNombre] = useState('') //dentro de los parentencia lo que se especifica es el estado inicial que tendria ese hook.
    const [propietario, setPropietario] = useState('')
    const [correo, setCorreo] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)

    useEffect ( () => {
        //Object.Keys(arreglo que se quiere comprobar) => funciona para comprobar si un arreglo viene vacio 
        if (Object.keys(editPaciente).length > 0 ) {
            setNombre(editPaciente.nombre)
            setPropietario(editPaciente.propietario)
            setCorreo(editPaciente.correo)
            setFecha(editPaciente.fecha)
            setSintomas(editPaciente.sintomas)
        }
    }, [editPaciente])

    const generarId = () => {
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //validamos si los campos vienen vacios
        if([nombre,propietario,correo,fecha,sintomas].includes('')) {
            setError(true)
            return;
        }

        setError(false)
        //objecto de paciente
        const objPaciente = {
            nombre,
            propietario,
            correo,
            fecha,
            sintomas            
        }

        if (editPaciente.id) {
            //editando paciente
            objPaciente.id = editPaciente.id
            const pacienteAct = pacientes.map( pacienteState => pacienteState.id === editPaciente.id ? objPaciente : pacienteState)

            setPaciente(pacienteAct)
            setEditPaciente({})
        } else {
            //agregando nuevo paciente
            objPaciente.id = generarId()
            setPaciente([...pacientes,objPaciente])
        }

        
        //reininciando el formulario
        setNombre('')
        setPropietario('')
        setCorreo('')
        setFecha('')
        setSintomas('')

    }
    // en react los eventos se utilizan en llaves y el nombre de la funcion que queremos llamar y son cameCase
    return (
        <div className='md:w-1/2 lg:w-2/5 mx-5'>
            <h2 className='font-black text-2xl text-center'>Seguimiento Pacientes </h2>

            <p className='text-md mt-5 text-center mb-10'>
                Añadir Pacientes |  <span className='text-indigo-600 font-bold'>Administrar</span>
            </p>
            
            <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-md py-5 px-5 mb-10'>
                {error && <Error><p>Todos los campos son obligatorios</p></Error>}

                <div className='mb-5'>
                    <label className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
                    <input type='text' placeholder='Introdusca el Nombre' className='border-2 w-full p-2 mt-2' 
                    value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                </div>
                <div className='mb-5'>
                    <label className='block text-gray-700 uppercase font-bold'>Nombre Propietario</label>
                    <input type='text' placeholder='Introdusca el Propietario' className='border-2 w-full p-2 mt-2'
                    value={propietario} onChange={(e) => setPropietario(e.target.value)}/>
                </div>
                <div className='mb-5'>
                    <label className='block text-gray-700 uppercase font-bold'>Correo Electronico</label>
                    <input type='email' placeholder='Introdusca el Correo' className='border-2 w-full p-2 mt-2' 
                    value={correo} onChange={(e) => setCorreo(e.target.value)}/>
                </div>
                <div className='mb-5'>
                    <label className='block text-gray-700 uppercase font-bold'>De Alta</label>
                    <input type='date' className='border-2 w-full p-2 mt-2'
                    value={fecha} onChange={(e) => setFecha(e.target.value)}/>
                </div>
                <div className='mb-5'>
                    <label className='block text-gray-700 uppercase font-bold'>Sintomas</label>
                    <textarea placeholder='Introdusca los sintomas' className='border-2 w-full p-2 mt-2' 
                    value={sintomas} onChange={(e) => setSintomas(e.target.value)}/>
                </div>

                <input type='submit' className='bg-indigo-600 w-full p-3 text-white uppercase fond-bold hover:bg-indigo-700 ' value={ editPaciente.id ? 'Editar Paciente' :'Agregar Paciente'} />
            </form>
        </div>
    )
}

export default Formulario