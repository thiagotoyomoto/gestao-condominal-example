import Image from 'next/image';

import DefaultUserImage from '@/images/default-user.png';

type Props = {
    name: string
}

export default function WelcomeMessage({ name }: Props) {
    return (
        <div className='user-panel mt-3 pb-3 mb-3 d-flex align-items-center'>
            <div className='image'>
                <Image src={DefaultUserImage} className='img-circle elevation-2' alt='User image' />
            </div>
            <div className='info'>
                <span className='text-secondary'>Bem-vindo</span>
                <span className='d-block text-white'>{name}</span>
            </div>
        </div>
    )
}