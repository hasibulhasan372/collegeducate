import { useState } from "react";
import { useForm } from "react-hook-form";

import { FaSpinner, FaStar } from "react-icons/fa";

const AdmissionForm = () => {
    
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        setLoading(true)
        const { name, subject, photo, email, phone, birth } = (data);
        const clientInfo = {name,
            subject, 
            photo, 
            email, 
            phone, 
            birth
        }

        console.log(clientInfo)
        
    };
    const starIcon = <FaStar className="text-red-500 text-[8px]"></FaStar>
    return (
        <div className="p-3 md:px-8 md:py-8 lg:px-12 lg:py-12 border rounded-md mt-10 md:mt-20">
            <h1 className=" text-xl md:text-3xl font-semibold md:font-bold text-center">Admission</h1>
            <div className="mt-2 md:mt-4">
                <form onSubmit={handleSubmit(onSubmit)} className="md:grid md:grid-cols-2 md:gap-4">
                    {/* Class Name   */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text flex">Candidate Name{starIcon}</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} name="name" placeholder="Candidate Name" className="input input-bordered" />
                    </div>
                    {/* Instructor Name   */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text flex ">Subject{starIcon}</span>
                        </label>
                        <input type="text" {...register("subject", { required: true })} name="subject" placeholder="Subject" className="input input-bordered" />
                    </div>
                    {/* Add Image  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text flex">Photo{starIcon}</span>
                        </label>
                        <input type="file" {...register("photo", { required: true })} name="photo" placeholder="Please Input photo" className=" outline-none placeholder:border-none" />
                    </div>
                    {/* Instructor Email  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text flex">Candidate Email{starIcon}</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} name="email" placeholder="Your Email" className="input input-bordered" />
                    </div>
                    {/*Available Seat */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text flex">Phone{starIcon}</span>
                        </label>
                        <input type="number" {...register("phone", { required: true })} name="phone" placeholder="Phone Number" className="input input-bordered" />
                    </div>
                    {/*Class fee */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text flex">Date of Birth{starIcon}</span>
                        </label>
                        <input type="text" {...register("birth", { required: true })} name="price" placeholder="Course Fee" className="input input-bordered" />
                    </div>

                    {/* Submit  */}
                    <div className="w-full py-2 rounded-lg text-center mx-auto col-span-2 md:mt-4">
                    <button className="btn  mt-4 bg-gradient-to-r from-green-600 to-green-500 font-bold text-xl md:text-2xl w-full text-white capitalize" type="submit">{loading? <p className="animate-spin"><FaSpinner></FaSpinner></p> : "Submit" } </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AdmissionForm;
