import register_page from "../assets/register_page.png";
import logo from "../assets/logo.png";
import SignIn from '../components/SignIn';


const Register = () => {
    return (
        <div className='bg-blue-50 min-h-screen flex'>
            {/* {Left side panel} */}
            <div className='hidden md:block md:flex-1 md:relative'>
                <div>
                    <img src={register_page} alt="Register Page" className='w-full h-screen object-cover' />
                </div>
                <div className='absolute bottom-10 flex justify-center'>
                    <div className='w-4/5 flex flex-col gap-5'>
                        <img src={logo} alt="" className='object-cover w-52 h-12' />
                        <p className='font-medium text-5xl text-white leading-14'>Improve your skill with Coursea!</p>
                        <p className='text-white'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, </p>
                    </div>
                </div>
            </div>

            {/* {right side panel} */}
            <SignIn />

        </div>
    )
}

export default Register