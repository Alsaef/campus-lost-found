import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import LostFrom from './LostFrom';
import FoundForm from './FoundForm';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useRef } from 'react';

const NavBar = () => {
    const { user, logout } = useContext(AuthContext)

    const closeModal = (modalId) => {
        document.getElementById(modalId)?.close();
    };
    const navItem = <>

        <li ><button className='btn btn-success text-white mx-1 lg:my-0 my-2' onClick={() => document.getElementById('my_modal_1').showModal()}>Report Lost Item</button></li>
        <li><button className='btn btn-primary mx-1' onClick={() => document.getElementById('my_modal_3').showModal()}>Report Found Item</button></li>
        <li><button className='btn btn-primary mx-1 lg:my-0 my-2' onClick={() => document.getElementById('my_modal_4').showModal()}>Contact Admin</button></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                            {navItem}
                        </ul>
                    </div>
                    <a className=" text-xl flex items-center gap-3 font-semibold "> <img width={50} height={50} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDIZUAC0DRaDfECWg6yhd-6Frvgk1KLSHiJo8Hs91qmEdC2PzOP99ABExLHqlGXD86AjA&usqp=CAU' alt="" /><span className='lg:inline-flex hidden'>Campus Lost & Found</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.role === 'admin' ? <button className='btn btn-success text-white'><Link to={'/dashboard/found'}>DashBoard</Link></button> : <a className="btn btn-success text-white" onClick={() => document.getElementById('my_modal_2').showModal()}>Admin Panel</a>
                    }

                 {user&& 
                    <button className='btn btn-error text-white mx-5' onClick={logout}>logout</button>
                    
                 }
                    <dialog id="my_modal_2" className="modal" >
                        <div className="modal-box">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">Admin Login!</h3>
                            <Login onLoginSuccess={() => closeModal('my_modal_2')} ></Login>
                        </div>
                    </dialog>

                    {/* lost modal */}
                    <dialog id="my_modal_1" className="modal" >
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Report Lost Item!</h3>
                            <LostFrom closeModal={() => closeModal('my_modal_1')}></LostFrom>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>

                    {/* contact admin modal */}
                    <dialog id="my_modal_4" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg mb-4">Contact Admin</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Admin Email</label>
                                    <p className="text-base">
                                        <a href="mailto:srcs2020annada@gmail.com" className="text-blue-600 underline">srcs2020annada@gmail.com</a>
                                    </p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Admin Phone</label>
                                    <p className="text-base">01712054802</p>
                                </div>
                            </div>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                    <dialog id="my_modal_3" className="modal" >
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Report Found Item!</h3>
                            <FoundForm closeModal={() => closeModal('my_modal_3')}></FoundForm>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>

                </div>
            </div>
        </div>
    );
};

export default NavBar;