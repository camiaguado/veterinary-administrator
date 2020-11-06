import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';

const Cita = (props) => {

    if(!props.cita){
        props.history.push('/');
        return null;
    }
    
    //extraer por props
    const { cita: {nombre} } = props;
    return ( 
        <Fragment>
            <h1>Nombre cita: {nombre}</h1>

            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Volver</Link>
                    </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default withRouter(Cita);