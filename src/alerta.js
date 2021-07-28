function Alerta(props) {
    return(
        <div className="alert alert-danger" role="alert">
            {props.mensaje}
        </div>
    )
}

export default Alerta;