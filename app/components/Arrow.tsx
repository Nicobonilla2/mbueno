import Image from 'next/image';

type Props = {
    src:string;
}

const Arrow = ({src}:Props) => {
    return(
        <>
        <Image
        alt="up"
        src={src}
        height={10}
        width={10}
        />
        </>
    )
}

export default Arrow;