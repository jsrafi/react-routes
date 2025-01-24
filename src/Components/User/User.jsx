import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({ user }) => {

   
    const { name, email, phone, address, id ,website } = user;
    return (
        <div className='text-white flex flex-col gap-3 bg-purple-950 border border-slate-100 rounded-xl p-5'>
            <h1 className='text-xl font-semibold'>Name:{name}</h1>
            <hr />
            <h3 className='text-lg font-semibold text-start'>Email:{email}</h3>
            <h3 className='text-lg font-semibold text-start'>Address:{address.street + ',' + address.suite + ',' + address.city}</h3>
            <h3 className='text-lg font-semibold text-start flex-grow'>Phone no:{phone}</h3>
            <Link to={`/user/${id}`}>Show details</Link>
            <button onClick={() => document.getElementById('my_modal_5').showModal()} className='btn'>show details</button>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn " onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box text-black">
                    <h3 className="font-bold text-lg text-black">{id}</h3>
                    <p className="py-4 text-black">{email}</p>
                    <p>Website:{website}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

User.propTypes =
{
    user: PropTypes.object
}

export default User;