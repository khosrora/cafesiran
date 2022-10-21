import Image from 'next/image'

const MyImage = ({ img, size, alt }) => {


    const srcImage = img;

    const imgCard = () => {
        return srcImage;
    }

    return (
        <Image
            className='w-full object-cover object-center rounded-lg shadow-md h-44 md:h-62'
            layout="responsive"
            loader={imgCard}
            src={srcImage}
            alt={alt}
            width="800px"
            height="900px"
            preload={true}
        />
    )
}

export default MyImage;