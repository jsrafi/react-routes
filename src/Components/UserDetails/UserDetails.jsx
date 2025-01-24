import { Link, useLoaderData, useNavigate } from "react-router-dom";


const UserDetails = () => {

    const navigate = useNavigate()

    const user = useLoaderData()
    const{name,email,website}= user;

    const handleBtn =()=>
    {
      navigate("/")
    }


    return (
        <div className="text-xl font-semibold text-red-500 text-center flex flex-col gap-3 mt-4">
            <h1>Name: {name}</h1>
            <h3>Email: {email} </h3>
            <h3>Website: {website} </h3>
            <Link to="/" className="text-lg btn w-20 mx-auto">Home</Link>
            <button className="btn w-20 mx-auto" onClick={handleBtn}>Home</button>
        </div>
    );
};

export default UserDetails;