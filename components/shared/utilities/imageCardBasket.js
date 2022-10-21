import Image from 'next/image'

const MyImage = ({ img, alt }) => {


    const srcImage = img;

    const imgCard = () => {
        return srcImage;
    }

    return (
        <Image
            className='rounded-md shadow-md w-full h-full object-center object-cover'
            layout="responsive"
            loader={imgCard}
            src={srcImage}
            alt={alt}
            width="300px"
            height="300px"
            preload={true}
        />
    )
}

export default MyImage;