import Nine from "./Nine";

function CardUI(props) {
    return (
        <div className="card" style={{ width: '250px',marginLeft: '16px', marginBottom: '16px' }}>
            <img src="/image.png" alt="" width="200"
                style={{  borderRadius: '50px' }} />
            <div className="card-body">
                <h1>{props.userFromArray}</h1>
                <h2>{props.user.branch}</h2>
                <h3>{props.user.year}</h3>
                {/* <button type="button" className="btn btn-primary">Connect</button> */}
                <Nine/>

            </div>
        </div>
    );
}
export default CardUI;