import { Card } from "./Card";
import { Navbar } from "./Navbar";


export function Profilo({username="Andre A. Anuta", postAvatar, n=19}) {
    return(
        <div className='flex flex-col items-center'>
            {/* <h1 className="text-2xl">I MIEI POST</h1> */}
            <div className='flex justify-around items-center h-36 w-full bg-contrast'>
                <div className="imageContainer bg-complement w-20 h-20 rounded-full mx-1 my-auto">
                {postAvatar}
                </div>
                <div>
                    <h1 className='text-xl'>{username}</h1>
                    <p className="text-xl">Luoghi visitati: {n}</p>
                </div>
            </div>
            <div className='flex flex-wrap'>
                <img className='w-1/3'src='https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg' alt='img'/>
                <img className='w-1/3'src='https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg' alt='img'/>
                <img className='w-1/3'src='https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg' alt='img'/>
                <img className='w-1/3'src='https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg' alt='img'/>
                <img className='w-1/3'src='https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg' alt='img'/>
                <img className='w-1/3'src='https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg' alt='img'/>
                <img className='w-1/3'src='https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg' alt='img'/>
                <img className='w-1/3'src='https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg' alt='img'/>
                <img className='w-1/3'src='https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg' alt='img'/>
                <img className='w-1/3'src='https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg' alt='img'/>
            </div>
            <Navbar />
        </div>
    )
}