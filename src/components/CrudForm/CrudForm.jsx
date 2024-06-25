import { Button } from "react-bootstrap"



export const CrudForm = ({handleSubmit, Nombre, setNombre, Correo, setCorreo, Telefono, setTelefono, Fecha, setFecha, Comensales, setComensales}) => {
    return(
        <>
         <form onSubmit={handleSubmit}>
            <div className="Crud">
                  
                 <label className="form-label">Nombre</label>
                 <input className="input" type="text" 
                 value={Nombre} 
                 onChange={ (event) => setNombre(event.target.value)} />

            </div>

            <div className="Crud">

                 <label className="form-label">Correo</label>
                 <input className="input" type="text" 
                 value={Correo} 
                 onChange={ (event) => setCorreo(event.target.value)} />

            </div>

            <div className="Crud">

                 <label className="form-label">Telefono</label>
                 <input className="input" type="text" 
                 value={Telefono} 
                 onChange={ (event) => setTelefono(event.target.value)} />

            </div>

            <div className="Crud">

                 <label className="form-label">Fecha</label>
                 <input className="input" type="text" 
                 value={Fecha} 
                 onChange={ (event) => setFecha(event.target.value)} />

            </div>

            <div className="Crud">

                 <label className="form-label">Comensales</label>
                 <input className="input" type="text" 
                 value={Comensales} 
                 onChange={ (event) => setComensales(event.target.value)} />

            </div>
                <Button type="submit"  className='Button1'>Enviar</Button>

         </form>
        </>
    )
}