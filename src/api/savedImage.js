export const imageHosting = async (image) =>{
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_SECRET_IMAGE_API}`

    const res = await fetch(url,{
        method:"POST",
        body: formData
    })
    const data = await res.json()
    return data
}