import first from '../../assets/first.jpg'
import second from '../../assets/second.jpg'
import { motion } from "motion/react"
const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="flex-1">
                    <motion.img
                        src={first}
                        animate={{ y: [50,100,50] }}
                        transition={{ duration: 4,repeat:Infinity, ease: "linear" }}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <motion.img
                        src={second}
                        animate={{ x: [50,100,50] }}
                        transition={{ duration: 4,repeat:Infinity, ease: "linear" }}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className="flex-1">
                        <motion.h1 
                        animate={{x: [0,50,0]}}
                        transition={{ duration: 5, delay: 2,repeat:Infinity, ease: "linear" }}
                        className="text-5xl font-bold">The Easiest Way
                            to Get Your New Job</motion.h1>
                        <p className="py-6">
                            Each month, more than 3 million job seekers turn to
                            website in their search for work, making over 140,000
                            applications every single day
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;