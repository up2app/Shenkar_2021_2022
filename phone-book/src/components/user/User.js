import './User.css';

const User = ({ data }) => {

    //logic
    const Call = (number) =>{
        alert(number);
    }


    return (
        <div className="user" id={data.id}>
            <p>
                <span>{data.name} </span>
                <span>{data.phone}</span>
            </p>
            <button onClick={() => { Call(data.phone); }}>CALL</button>
        </div>
    )

}

export default User;

