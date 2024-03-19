import Github from '/github.svg'
import Linkedin from '/linkedin.svg'

const Footer = () => {
    return (
        <footer className="absolute bottom-0 bg-blue-900 w-full text-white p-5 rounded-t-2xl">
            <div>
                <h1 className="font-semibold text-lg">Gogo Journal</h1>
            </div>
            <div className="flex justify-between w-full mt-5 items-center">
                <div className="inline-flex gap-4">
                    <img src={Github} alt="" className='h-4'/>
                    <img src={Linkedin} alt="" className='h-4'/>
                </div>
                <div>
                    <p className='text-xs font-extralight'>Copyright | Echo Tech - 2024</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer