import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {

    const users = useLoaderData()
    return (
        <div className="mt-8 ">
            <h1 className="text-2xl font-semibold">Users:{users.length}</h1>
            <div className="grid grid-cols-3 gap-5 mt-4">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>

        </div>
    );
};

export default Users;