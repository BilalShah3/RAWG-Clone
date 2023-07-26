const getCroppedImageUrl = (url: string) => {
    const croppedUrl = url.replace("/media/", "/media/crop/600/400/")
    return croppedUrl
}

export default getCroppedImageUrl