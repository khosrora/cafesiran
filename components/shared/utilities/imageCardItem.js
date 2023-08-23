import Image from 'next/image'

const MyImage = ({ img, size, alt }) => {

    const srcImage = !!img ? img : '/images/placeholder2.jpeg';

    const imgCard = () => {
        return srcImage;
    }


    return (
        <Image
            className='w-full h-full object-center object-cover lg:w-full lg:h-full rounded-md'
            layout="responsive"
            loader={imgCard}
            src={srcImage}
            alt={alt}
            width="900px"
            height="900px"
            preload={true}
        />
    )
}

export default MyImage;