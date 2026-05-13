import "./Card.css"

function Card({ children }) {
    return (
        <div className="container">{children}</div>
    )
}

export default Card