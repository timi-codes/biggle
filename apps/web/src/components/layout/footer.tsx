"use client"
import { BiLogoInstagramAlt, BiLogoTwitter, BiLogoTiktok, BiLogoFacebook, BiSolidSend } from "react-icons/bi"
import { RiTwitterXFill } from "react-icons/ri";
import googlePlayButton from '../../assets/google-play.svg';
import appStoreButton from '../../assets/app-store.svg';
import Image from "next/image";
import { Input } from "@biggle/ui/input";

const Footer = () => {
    return (
        <footer className="flex justify-between bg-white px-16 py-28 h-96">
            <div className="space-y-5">
                <h3 className="font-bold text-base">Information</h3>
                <div className="space-y-4">
                    <p>Terms of service</p>
                    <p>Privacy policy</p>
                    <p>Careers</p>
                </div>

            </div>

            <div className="space-y-6">
                <h3 className="font-bold text-base">Contact</h3>
                <div className="space-y-4">
                    <p>support@hutler.com</p>
                    <p>(+1) 901 631 6270</p>
                    <p>(+234) 8174847684</p>
                </div>
            </div>

            <div className="space-y-8">
                <h3 className="font-bold text-base">Connect</h3>
                <div className="flex space-x-8">
                    <BiLogoInstagramAlt role="button" size={26} className="text-black/80" />
                    <BiLogoTwitter role="button" size={26} className="text-black/80"/>
                    <BiLogoTiktok role="button" size={26} className="text-black/80" />
                    <BiLogoFacebook role="button" size={26} className="text-black/80" /> 
                </div>

                <div className="space-x-6">
                    <button className="h-12">
                        <Image
                            role="button"
                            priority
                            src={googlePlayButton}
                            className="w-[9rem]"
                            alt="Download on google play - coming soon"
                        />
                    </button>
                    <button>
                        <Image
                            priority
                            src={appStoreButton}
                            alt="Download on app store - coming soon"
                            className="w-[9rem]"
                        />
                    </button>
                </div>

            </div>

            <div className="space-y-6">
                <div>
                    <h3 className="font-bold text-base mb-4">Join our mailing list</h3>
                    <p className="max-w-80">Subscribe for updates on new talent, and features.</p>
                </div>
                <div role='search' className='relative bg-background rounded-full min-w-72'>
                    <button className='flex items-center justify-center absolute right-0 -top-[2px] bottom-0 ml-1 w-14 h-12  bg-accent rounded-full'>
                        <BiSolidSend className='absolute fill-white' width={20} height={20} />
                    </button>
                    <Input type="email" className='unstyle pl-6 text-[13px] border-spacing-[12px] h-[43px] font-semibold placeholder:font-normal' placeholder='yourname@biggle.com' />
                </div>
            </div>
        </footer>
    )
}

export default Footer;