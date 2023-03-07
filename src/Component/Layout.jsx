import React from 'react'
import Navbar from './Navbar'
import { MdOutlineDashboard } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa";
import { NavLink } from "react-router-dom";


//create layoutfile
// layout1=[{children}] and go to dashboard 
// layout3=[]

// navbar2=[<div><Navbar/></div>] and go to navbar
// navbar5=[copy drawer from daisy ui and cut label and paste beside of home logo and put navbar at cut of label ]
const Layout = ({ children }) => {
    // Cart quantity show at menubar1
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));

    return (<div className='container mx-auto
    '>

        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <Navbar />
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>

                <div className="menu p-4 w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <div className="flex items-center gap-3">
                        <MdOutlineDashboard />
                        <p>Dashboard</p>
                    </div>
                    <NavLink to="/">
                        <button className="py-1 my-3 bg-base-300 w-full rounded">
                            Dashboard
                        </button>
                    </NavLink>


                    <div className="flex items-center gap-3">
                        <FaHeadphones />
                        <p>Products</p>
                    </div>
                    <NavLink to="/products">
                        <button className="py-1 my-1 bg-base-300 w-full rounded">
                            Products
                        </button>
                    </NavLink>

                    <NavLink to="/addproduct">
                        <button className="py-1 my-1 bg-base-300 w-full rounded">
                            Add Product
                        </button>
                    </NavLink>
                    {/*Cart quantity show at menubar1---- {cartItems?.length} */}
                    <NavLink to={"/cart"}>
                        <button className="py-1 my-1 bg-base-300 w-full rounded">
                            Cart - {cartItems?.length}
                        </button>
                    </NavLink>

                </div>
            </div>
        </div>

    </div>

    )
}

export default Layout