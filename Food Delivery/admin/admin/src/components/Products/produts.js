import React, { useEffect, useState } from 'react';
import Sidebar from '../siderbar/sidebar';
import axios from 'axios';
import { Pencil, Trash2, Plus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';


const Produts = () => {
    const navigate = useNavigate();
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/foods')
            .then(res => {
                setFoods(res.data);
            })
            .catch(err => {
                console.error("Error fetching foods:", err);
            });
    }, []);

    const handleDelete = async (id) => {
        // Add delete logic here
        if (window.confirm("Are you sure you want to delete this product?")) {
            try {
                await axios.delete(`http://localhost:5000/api/foods/${id}`);
                alert("✅ Product deleted successfully");

                // Refresh the list after deletion (refetch or filter it locally)
                setFoods(prevFoods => prevFoods.filter(food => food._id !== id));
            } catch (error) {
                console.error("Error deleting product:", error);
                alert("❌ Failed to delete product");
            }
        }
    };

    const handleEdit = async (id) => {
        navigate(`/updateproduct`);

    };

    return (
        <>
            <Sidebar />
            <div className="px-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Food Products</h2>
                    <Link
                        to="/addproduct"
                        className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-600"
                    >
                        <Plus size={18} /> <span>Add Product</span>
                    </Link>
                </div>

                <div className="overflow-y-auto border border-gray-300 rounded-lg">
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100  text-black">
                                <th className="border p-2">ID</th>
                                <th className="border p-2">Name</th>
                                <th className="border p-2">Price</th>
                                <th className="border p-2">Description</th>
                                <th className="border p-2">Image</th>
                                <th className="border p-2">Rating</th>
                                <th className="border p-2">Category</th>
                                <th className="border p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {foods.map(food => (
                                <tr key={food._id}>
                                    <td className="border p-2">{food.id}</td>
                                    <td className="border p-2">{food.name}</td>
                                    <td className="border p-2">{food.price}</td>
                                    <td className="border p-2">{food.description}</td>
                                    <td className="border p-2">
                                        <img src={food.image} alt={food.name} className="w-16 h-16 object-cover" />
                                    </td>
                                    <td className="border p-2">{food.rating}</td>
                                    <td className="border p-2">{food.category}</td>
                                    <td className="border p-2">
                                        <div className="flex gap-2 justify-center">
                                            <button onClick={() => handleEdit(food._id)} className="text-blue-600 hover:text-blue-800">
                                                <Pencil size={18} />
                                            </button>
                                            <button onClick={() => handleDelete(food.id)} className="text-red-600 hover:text-red-800">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Produts;
