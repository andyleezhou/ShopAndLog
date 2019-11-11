import React, { useEffect, Fragment } from 'react';
import { getAllSuccess, deleteSuccess } from '../actions/userActions';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const HomePage = () => {

    const user = useSelector(state => state.registration);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllSuccess(user));
        console.log(user)

    }, [user])

    const handleClick = e => {
        e.preventDefault();
        dispatch(deleteSuccess(user));

    }

    return (
        <Fragment>
            <h1>Hi {user.firstName} !</h1>
            <p>Welcome to the Good Place</p>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Username</th>
                    </tr>
                </thead>
                <tbody>
                    {user.users.map((user) => (
                        <tr key={user.id}>
                            <th scope="row">1</th>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.username}</td> 
                            {/* <button onClick={handleClick} type='delete' className='btn btn-danger'>x</button> */}
                        </tr>
                    ))}
                </tbody>    
            </table>
            <p>
                <Link to='/login'><button className='btn btn-warning'>Logout</button></Link>   <Link to='/shop'><button className='btn btn-primary'>Shop Here</button></Link>
            </p>
        </Fragment>







        //     <div className='col-md-6 col-md-offset-3'>
        //         <h1>Hi {user.firstName}!</h1>
        //             <p>Congrats on making it to the Good Place</p>
        //             <h3>All registered users:</h3>

        //                 {/* {user.loading && <em>Loading users...</em>}
        //                 {user.error && <span className='text-danger'>ERROR: {user.error}</span>}
        //                 {user.items &&  */}
        //                 <ul>
        //                     {user.users.map((user) => 
        //                         <li key={user.id}>
        //                             {user.firstName + ' ' + user.lastName}
        //                             {
        //                                 user.deleting ? <em> - Deleting...</em>
        //                                 : user.deleteError ? <span className='text-danger'> - ERROR: {user.deleteError}</span>
        //                                 : <span> - <button className='btn btn-danger' type='delete' onClick={handleClick}>x</button></span>
        //                             }
        //                         </li>)}
        //                 </ul>


        //             <p>
        //                 <Link to='/login'><button>Logout</button></Link> 
        //                 <Link to='/shop'><button>Shop Here</button></Link>
        //             </p>
        //     </div>
        //  );
        // }
    );
}

export default HomePage;