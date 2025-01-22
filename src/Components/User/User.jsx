import PropTypes from 'prop-types';

const User = ({user}) => {
    const {name,email,phone,address} = user;
    return (
        <div className='text-white flex flex-col gap-3 bg-purple-950 border border-slate-100 rounded-xl p-5'>
           <h1 className='text-xl font-semibold'>Name:{name}</h1>
           <hr />
           <h3 className='text-lg font-semibold text-start'>Email:{email}</h3>
           <h3 className='text-lg font-semibold text-start'>Address:{address.street+','+address.suite+','+address.city}</h3>
           <h3 className='text-lg font-semibold text-start'>Phone no:{phone}</h3>
            
        </div>
    );
};

User.propTypes=
{
    user: PropTypes.object
}

export default User;