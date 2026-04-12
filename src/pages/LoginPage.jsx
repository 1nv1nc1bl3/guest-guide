import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/ui/Loader';
import { useAppDataContext } from '../context/AppDataContext';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [loginError, setLoginError] = useState(false);

    const { appData } = useAppDataContext();
    // console.log(appData);
    const navigate = useNavigate();

    useEffect(() => {
        const userToken = localStorage.getItem('token');
        if (userToken) navigate('/');
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoginError(false);
        if (!username || !password) {
            setLoginError(true);
            return;
        }
        setIsSubmitting(true);
        try {
            const res = await fetch(
                'https://api.mystayguide.app/wp-json/jwt-auth/v1/token',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, password }),
                },
            );
            if (!res.ok) {
                setLoginError(true);
                return;
            }
            console.log(res);
            const data = await res.json();
            if (!data.token) {
                setLoginError(true);
                return;
            }
            localStorage.setItem('token', data.token);
            setUsername('');
            setPassword('');
            navigate('/');
        } catch {
            setLoginError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitting) return <Loader />;

    if (loginError)
        return <p className='text-center text-red-500'>Something went wrong</p>;

    return (
        <section className='full-app-page tracking-wide leading-relaxed'>
            <div className='app-container mx-auto min-h-dvh min-w-full pt-[1dvh] md:pt-[3dvh] lg:pt-[5dvh] bg-gradient-to-b from-[--color-primary] to-[--color-secondary] pt-[env(safe-area-inset-top)]'>
                <main className='flex flex-col items-center min-h-dvh px-6 pt-10 pb-10'>
                    <div className='w-full max-w-6xl'>
                        <div className='flex flex-col w-full'>
                            <div className='text-center'>
                                <img
                                    src={appData?.settings?.global_hotel_logo}
                                    alt=''
                                    className='inline-block w-[130px] h-[130px]'
                                />
                            </div>

                            <form
                                className='mt-12 space-y-4'
                                onSubmit={handleSubmit}
                            >
                                <div className='relative flex items-center'>
                                    <input
                                        name='username'
                                        value={username}
                                        type='text'
                                        required
                                        className='w-full text-sm text-slate-900 bg-[--color-additional] border-2 border-transparent focus:border-[--color-dark-bg] pl-4 pr-8 py-3 rounded-md outline-none'
                                        placeholder='Enter username'
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                    />
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='#bbb'
                                        stroke='#bbb'
                                        className='w-[18px] h-[18px] absolute right-4'
                                        viewBox='0 0 24 24'
                                    >
                                        <circle
                                            cx='10'
                                            cy='7'
                                            r='6'
                                            data-original='#000000'
                                        ></circle>
                                        <path
                                            d='M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z'
                                            data-original='#000000'
                                        ></path>
                                    </svg>
                                </div>
                                <div className='relative flex items-center'>
                                    <input
                                        name='password'
                                        value={password}
                                        type='password'
                                        required
                                        className='w-full text-sm text-slate-900 bg-[--color-additional] border-2 border-transparent focus:border-[--color-dark-bg] pl-4 pr-8 py-3 rounded-md outline-none'
                                        placeholder='Enter password'
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='#bbb'
                                        stroke='#bbb'
                                        className='w-[18px] h-[18px] absolute right-4 cursor-pointer'
                                        viewBox='0 0 128 128'
                                    >
                                        <path
                                            d='M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z'
                                            data-original='#000000'
                                        ></path>
                                    </svg>
                                </div>

                                {/* FORGOT PASSWORD & REMEMBER ME */}

                                <div className='!mt-12'>
                                    <button
                                        type='submit'
                                        className='w-full py-2.5 px-4 text-[15px] font-medium rounded-md text-[--color-additional] hover:text-[--color-dark-bg] bg-[--color-dark-bg] hover:bg-[--color-additional] focus:outline-none cursor-pointer'
                                    >
                                        Sign in
                                    </button>

                                    {/* REGISTER FUNCTION */}
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
}

/*
<svg
xmlns='http://www.w3.org/2000/svg'
width='130'
height='130'
className='inline-block'
viewBox='0 0 53 53'
>
<path
fill='#e7eced'
d='m18.613 41.552-7.907 4.313a7.106 7.106 0 0 0-1.269.903A26.377 26.377 0 0 0 26.5 53c6.454 0 12.367-2.31 16.964-6.144a7.015 7.015 0 0 0-1.394-.934l-8.467-4.233a3.229 3.229 0 0 1-1.785-2.888v-3.322c.238-.271.51-.619.801-1.03a19.482 19.482 0 0 0 2.632-5.304c1.086-.335 1.886-1.338 1.886-2.53v-3.546c0-.78-.347-1.477-.886-1.965v-5.126s1.053-7.977-9.75-7.977-9.75 7.977-9.75 7.977v5.126a2.644 2.644 0 0 0-.886 1.965v3.546c0 .934.491 1.756 1.226 2.231.886 3.857 3.206 6.633 3.206 6.633v3.24a3.232 3.232 0 0 1-1.684 2.833z'
data-original='#e7eced'
/>
<path
fill='#556080'
d='M26.953.004C12.32-.246.254 11.414.004 26.047-.138 34.344 3.56 41.801 9.448 46.76a7.041 7.041 0 0 1 1.257-.894l7.907-4.313a3.23 3.23 0 0 0 1.683-2.835v-3.24s-2.321-2.776-3.206-6.633a2.66 2.66 0 0 1-1.226-2.231v-3.546c0-.78.347-1.477.886-1.965v-5.126S15.696 8 26.499 8s9.75 7.977 9.75 7.977v5.126c.54.488.886 1.185.886 1.965v3.546c0 1.192-.8 2.195-1.886 2.53a19.482 19.482 0 0 1-2.632 5.304c-.291.411-.563.759-.801 1.03V38.8c0 1.223.691 2.342 1.785 2.888l8.467 4.233a7.05 7.05 0 0 1 1.39.932c5.71-4.762 9.399-11.882 9.536-19.9C53.246 12.32 41.587.254 26.953.004z'
data-original='#556080'
/>
</svg>
*/

/* FORGOT PASSWORD & REMEMBER ME */
/* <div className='flex flex-wrap items-center justify-between gap-4 !mt-4'>
<div className='flex items-center'>
<input
id='remember-me'
name='remember-me'
type='checkbox'
className='h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-transparent rounded-md'
/>
<label
htmlFor='remember-me'
className='ml-3 block text-sm text-slate-600'
>
Remember me
</label>
</div>
<div>
<a
href='jajvascript:void(0);'
className='text-sm font-medium text-[#1E2772] hover:underline'
>
Forgot Password?
</a>
</div>
</div> */

/* REGISTER FUNCTION */
/* <p className='text-sm mt-6 text-center text-slate-600'>
Don't have an account{' '}
<a
href='javascript:void(0);'
className='text-[#1E2772] font-medium hover:underline ml-1 whitespace-nowrap'
>
Register here
</a>
</p> */
