import {  useState } from 'react'
import { Dialog} from '@headlessui/react'
import { Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'

import { Link } from 'react-router-dom'


export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-transparent sticky ">
            <nav className="mx-auto  flex max-w-10xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a to="/Pixabay-Clone/" className="-m-1.5 p-1.5">
                        {/* <span Your Company</span> */}
                        <img className="h-10 w-auto mb-4" style={{
                            display: 'inline'
                        }} src="hhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg016Mqlp2t0cr803Q5wdT59saYr2MNhVrLbFFJ4-cWw&usqp=CAU&ec=48665701" alt="" />
                        <span className='mx-2 text-[7vw] sm:text-[5vw] lg:text-[3vw] text-white'>MORESCO</span>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100 "
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only text-white">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                
                <div className="hidden flex-1 lg:flex   w-full">
                    

                    <Link to="/work"
                        className="mx-auto lg:text-[1.4vw] block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-green-600"
                    >
                        Work
                    </Link>
                    <Link to="/expertise"
                        className="mx-auto lg:text-[1.4vw] block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-green-600"
                    >
                        Expertise
                    </Link>
                    <Link to="/about"
                        className="mx-auto lg:text-[1.4vw] block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-green-600"
                    >
                        About
                    </Link>
                    <Link to="/insight"
                        className="mx-auto lg:text-[1.4vw] block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-green-600"
                    >
                        Insights
                    </Link>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-80 overflow-y-auto bg-white px-6 py-6 sm:max-w-80 sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a to="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg016Mqlp2t0cr803Q5wdT59saYr2MNhVrLbFFJ4-cWw&usqp=CAU&ec=48665701"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link to="/work"
                                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Work
                                </Link>
                                <Link to="/expertise"
                                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Expertise
                                </Link>
                                <Link to="/about"
                                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    About
                                </Link>
                                <Link to="/insights"
                                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                   Insights
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}