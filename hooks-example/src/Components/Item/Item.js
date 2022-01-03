
//component that render specific item
//the onClick activate the handleDelete function that sent as a props from the parent (List)

const Item = ({data, handleDelete}) => {
    return(
        <div>
            <span>id: {data.id}&nbsp;&nbsp;&nbsp;&nbsp;name: {data.name}</span><button onClick={()=>handleDelete(data.id)}>X</button>
        </div>
    )

}

export default Item;


