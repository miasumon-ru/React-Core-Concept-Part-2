

export default function Friend ({friend}) {

    console.log(friend)

    const {name, id , email} = friend

    return (
        <div style={{border: '2px solid green', margin: '10px', padding: '12px', borderRadius:'10px'}}>

            <h3>Name : {name} </h3>
            <p>Email : {email} </p>
            <p>Id : {id} </p>
         
        </div>
    )
}