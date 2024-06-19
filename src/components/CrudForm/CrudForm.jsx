import { Button } from "react-bootstrap"

export const CrudForm = ({handleSubmit, Nombre, setNombre, Correo, setCorreo, Telefono, setTelefono, fechaformateada, setFechaFormateada, Comensales, setComensales}) => {
    
    return(
        <>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <labe className="form-label">Nombre</labe>
            <input type="text" 
            value={Nombre} 
            onChange={(event) => setNombre(event.target.value)} />
            </div>

            <div className="mb-3">
            <labe className="form-label">Correo</labe>
            <input type="text" 
                   value={Correo} 
                   onChange={(event) => setCorreo(event.target.value)} />
            </div>

            <div className="mb-3">
            <labe className="form-label">Telefono</labe>
            <input type="text" 
                   value={Telefono} 
                   onChange={(event) => setTelefono(event.target.value)} />
            </div>

            <div className="mb-3">
            <labe className="form-label">Fecha</labe>
            <input type="text" 
                   value={fechaformateada} 
                   onChange={(event) => setFechaFormateada(event.target.value)} />
            </div>

            <div className="mb-3">
            <labe className="form-label">Comensales</labe>
            <input type="text" 
                   value={Comensales} 
                   onChange={(event) => setComensales(event.target.value)} />
            </div>
            <Button type="submit" className='Button'>Enviar</Button>
       </form>
        </>
    )
}