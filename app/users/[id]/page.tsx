async function getUser(id:any) {
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json()
    return data.data
}


async function UsersPage({params}:any) {

    const user = await getUser(params.id)
    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-md-6 offset md-3">
                    <h1> Users Details</h1>
                    <div className="card">
                        <div className="card-header">
                        </div>
                        <div className="card-body">
                            <img src={user.avatar} alt="imageUser"/>
                            <div>
                                <h3>{user.id} {user.first_name} {user.last_name}</h3>
                                <p>{user.email}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )

}

export default UsersPage
