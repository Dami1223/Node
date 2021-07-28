function Tarjeta(props) {
  return (
    
    <div className = "col-md-3 col-lg-4">
      <div className="card text-dark mb-3" style-prop-object="max-width: 18rem;">
        <div className="card-header bg-info">{props.nombre}</div>
        <div className="card-body">
          <h5 className="card-title">Info card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  )
}

export default Tarjeta;