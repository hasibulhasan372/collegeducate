import useGallery from "../../../hooks/useGallery";


const Gallery = () => {
    const [photos] = useGallery();
    return (
        <div className="my-con md:px-10 lg:px-20 ">
            <h2 className="py-10 text-center text-3xl font-bold text-slate-900">Gallery</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4  md:gap-6 px-4">
                {
                    photos.map(photo => <div key={photo._id} >
                        <img src={photo?.img} alt="" />
                    </div>)
                }
            </div>
            
        </div>
    );
};

export default Gallery;