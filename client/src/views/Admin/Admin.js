import React from "react";
import "./Admin.css";
import { NavLink, Link } from "react-router-dom";


const Admin = () => {
  return (
    <>
      <div className="container md:m-60 flex gap-20 admins">
        <Link
          to="/admin/products"
          class="bg-white rounded shadow border p-6 w-64 hover:scale-125 transform-gpu "
        >
          <h5 class="text-3xl font-bold mb-4 mt-0">Products</h5>
          <p class="text-gray-700 text-sm">Content goes here</p>
        </Link>
        <Link
          to="/admin/customers"
          class="bg-white rounded shadow border p-6 w-64 hover:scale-125 transform-gpu"
        >
          <h5 class="text-3xl font-bold mb-4 mt-0">Customers</h5>
          <p class="text-gray-700 text-sm">Content goes here</p>
        </Link>
        <a
          href="/assets/result.xlsx"
          class="bg-white rounded shadow border p-6 w-64 hover:scale-125 transform-gpu"
        >
          <h5 class="text-3xl font-bold mb-4 mt-0">Stats</h5>
          <p class="text-gray-700 text-sm">Content goes here</p>
        </a>
      </div>
    </>
  );
};

export default Admin;
