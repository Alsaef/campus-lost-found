import React from 'react';
import { useForm } from 'react-hook-form';
import axiosInstance from '../hook/axiosInstance';
import useGetData from '../hook/useGetData';

const LostFrom = ({closeModal}) => {
    const {refetch}=useGetData()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();


      const onSubmit = async (data) => {
        try {

            console.log(data);
            const Data = {

                contact: data.contact,
                description:data.description,
                itemName:data.itemName,
                location:data.location,
                name:data.name,
                roll:data.roll,
                type:'lost'

            }

            const res= await axiosInstance.post('/lost',Data)

            console.log(res.data);

            if (res.data===200) {
                alert('post success')
                 if (closeModal) closeModal();
                 refetch()
                 reset()
            }

        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <div>
            <div className="max-w-lg mx-auto  p-6  rounded-xl">

                <form onSubmit={handleSubmit(onSubmit)}  className="space-y-4">

                    {/* Item Name */}
                    <div>
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <input
                            type="text"
                            {...register("itemName", { required: "Item name is required" })}
                            placeholder="e.g. Wallet"
                            className="input input-bordered w-full"
                        />
                        {errors.itemName && <p className="text-red-500 text-sm">{errors.itemName.message}</p>}
                    </div>

                      {/* Student Name */}
                    <div>
                        <label className="label">
                            <span className="label-text"> Student Name</span>
                        </label>
                        <input
                            type="text"
                            {...register("name", { required: "Item name is required" })}
                            placeholder="Student Name"
                            className="input input-bordered w-full"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>
                    {/* Student Roll */}
                    <div>
                        <label className="label">
                            <span className="label-text"> Student Roll</span>
                        </label>
                        <input
                            type="text"
                            {...register("roll", { required: "Item name is required" })}
                            placeholder="Student Roll"
                            className="input input-bordered w-full"
                        />
                        {errors.roll && <p className="text-red-500 text-sm">{errors.roll.message}</p>}
                    </div>

                    {/* Description */}
                    <div>
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea
                            {...register("description", { required: "Description is required" })}
                            placeholder="Describe the item in detail..."
                            className="textarea textarea-bordered w-full"
                        />
                        {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
                    </div>

                    {/* Last Known Location */}
                    <div>
                        <label className="label">
                            <span className="label-text">Last Known Location</span>
                        </label>
                        <input
                            type="text"
                            {...register("location", { required: "Location is required" })}
                            placeholder="e.g. Bus stand, Library, etc."
                            className="input input-bordered w-full"
                        />
                        {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
                    </div>

                    {/* Contact Info */}
                    <div>
                        <label className="label">
                            <span className="label-text">Your Contact Info (Email/Phone)</span>
                        </label>
                        <input
                            type="text"
                            {...register("contact", { required: "Contact info is required" })}
                            placeholder="Email or phone number"
                            className="input input-bordered w-full"
                        />
                        {errors.contact && <p className="text-red-500 text-sm">{errors.contact.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-success text-white w-full">
                        Submit Lost Item
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LostFrom;