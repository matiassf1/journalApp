export const fileUpload = async(file) => {

    if(!file) throw new Error('We do not have any file here');

    const cloudURL = 'https://api.cloudinary.com/v1_1/dugeclbkt/image/upload'
    const formData = new FormData();

    formData.append('upload_preset','react-journal');
    formData.append('file', file);

    try {
        
        const response =  await fetch( cloudURL, {
            method: 'POST',
            body: formData
        } )

        if(!response.ok) throw new Error('Can not open the image');

        const cloudResponse = await response.json()

        return cloudResponse.secure_url
    } catch (error) {
        console.log(error);
        throw new Error(error.message)
    }

}