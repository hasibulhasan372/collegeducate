
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useColleges from "../../hooks/useColleges";
import { FaStar } from "react-icons/fa";
import { imageHosting } from "../../api/savedImage";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const AdmissionForm = () => {
    const {user} = useContext(AuthContext)
    const { id } = useParams();
    const [colleges] = useColleges();
    const admissionCollege = colleges?.find(college => college._id === id)
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const image = data.photo[0]
        imageHosting(image)
            .then(imageData => {
                const imgUrl = imageData.data.display_url;
                const { name, subject, photo, email, phone, birth } = data;
                const clientInfo = {
                    name,
                    subject,
                    photo,
                    candidate_mail: email,
                    phone,
                    birth,
                    college: admissionCollege?.name,
                    image: imgUrl,
                    user_mail: user?.email
                }
                fetch("http://localhost:5000/candidateInfo", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(clientInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                           toast.success("Candidate information Saved")
                            reset()
                        }
                    })
                    .catch(error => console.log(error.message))

            })
    };

    const starIcon = <FaStar className="text-red-500 text-[8px]"></FaStar>
    return (
        <div className="p-3 md:px-8 md:py-8 lg:px-12 lg:py-12 border rounded-md mt-10 md:mt-20 my-con">
            <h1 className=" text-xl md:text-3xl font-semibold md:font-bold text-center">Admission Form</h1>
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
                        <input type="date" {...register("birth", { required: true })} name="birth" placeholder="Date of Birth" className="input input-bordered md:w-1/3" />

                    </div>

                    {/* Submit  */}
                    <div className="w-full py-2 rounded-lg text-center mx-auto col-span-2 md:mt-4">
                        <button className="btn  mt-4 bg-gradient-to-r from-green-600 to-green-500 font-bold text-xl md:text-2xl w-full text-white capitalize" type="submit">Submit</button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default AdmissionForm;
