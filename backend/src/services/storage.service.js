import ImageKit from "imagekit";

var imagekit = new ImageKit({
    publicKey : "public_mePgO7YZTvCP55T7lUaqc3UDSqI=",
    privateKey : "private_v2FZcXlN2d4mmvnO+AvKdJBg5EY=",
    urlEndpoint : "https://ik.imagekit.io/ntumewpoi"
});

async function uploadfile(file,filename) {   
    const response = await imagekit.upload({
        file : file,
        fileName : filename,
        folder : "image-caption"
    })

    return response.url;
}

export default uploadfile;