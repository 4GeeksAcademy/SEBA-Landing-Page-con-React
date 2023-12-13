import logo from '../logo.svg'

function Card(props) {
    return <>
        <div className="card text-center" >
            <img src={props.imagen || logo} className="card-img-top" alt="..." style={{ height: "18rem" }} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}.</p>
            </div>
            <div className="card-footer">
                <a href={props.url} className="btn btn-primary">Click aqui</a>
            </div>
        </div>
    </>
}

export default Card;