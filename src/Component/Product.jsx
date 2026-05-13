import React from 'react';

const Product = () => {
    return (
        <div>
            <div className='m-6 p-2 text-center'>
                <h1 className='font-bold text-[48px] text-[#101727]'>Premium Digital Tools</h1>
                <p className='text-[16px] text-[#627382]'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
            </div>
            <div className='flex justify-center gap-4'>
                <button className='btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl text-[16px] font-bold text-white'>Products</button>
                <button className='btn font-medium hover:bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:text-white rounded-3xl'>Cart(0)</button>
            </div>

            <div className='product-card grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center px-6'>


                <div className="card flx w-96 bg-base-100 shadow-sm flexju">
                    <div className="card-body ">
                        <div className='flex justify-end'>
                            <span className="badge badge-xs badge-warning alig">Most Popular</span>
                        </div>
                        <img
                            src="/src/assets/writing_2327400 1.png"
                            alt="AI Writing Png"
                            className="w-10 h-10 object-contain"
                        />
                        <div>
                            <h2 className="text-3xl font-bold pb-2">AI Writing Pro</h2>
                            <p className='text-[#627382]'>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                            <p className="text-xl mt-3 py-1"><span className=' font-bold text-[24px]'>$29</span>/mo</p>
                        </div>
                        <ul className="mt-2 flex flex-col gap-2 text-[#6276382]">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited AI generations</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>50+ writing templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Grammar checker</span>
                            </li>



                        </ul>
                        <div className="mt-6">
                            <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card flx w-96 bg-base-100 shadow-sm flexju">
                    <div className="card-body ">
                        <div className='flex justify-end'>
                            <span className="badge badge-xs badge-warning alig">Most Popular</span>
                        </div>
                        <img
                            src="/src/assets/design-tool.png"
                            alt="AI Writing Png"
                            className="w-10 h-10 object-contain"
                        />
                        <div>
                            <h2 className="text-3xl font-bold pb-2">Design Templates Pack</h2>
                            <p className='text-[#627382]'>2000+ premium templates for social media, presentations, and marketing materials.</p>
                            <p className="text-xl mt-3 py-1"><span className=' font-bold text-[24px]'>$49</span>/one-time</p>
                        </div>
                        <ul className="mt-2 flex flex-col gap-2 text-[#6276382]">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>2000+ templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Monthly updates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Commercial license</span>
                            </li>



                        </ul>
                        <div className="mt-6">
                            <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card flx w-96 bg-base-100 shadow-sm flexju">
                    <div className="card-body ">
                        <div className='flex justify-end'>
                            <span className="badge badge-xs badge-warning alig">Most Popular</span>
                        </div>
                        <img
                            src="/src/assets/package.png"
                            alt="AI Writing Png"
                            className="w-10 h-10 object-contain"
                        />
                        <div>
                            <h2 className="text-3xl font-bold pb-2">Premium Stock Assets</h2>
                            <p className='text-[#627382]'>Access millions of royalty-free photos, videos, and graphics for your projects.</p>
                            <p className="text-xl mt-3 py-1"><span className=' font-bold text-[24px]'>$19</span>/mo</p>
                        </div>
                        <ul className="mt-2 flex flex-col gap-2 text-[#6276382]">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>10M+ assets.</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Commercial use</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>No attribution</span>
                            </li>



                        </ul>
                        <div className="mt-6">
                            <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card flx w-96 bg-base-100 shadow-sm flexju">
                    <div className="card-body ">
                        <div className='flex justify-end'>
                            <span className="badge badge-xs badge-warning alig">Most Popular</span>
                        </div>
                        <img
                            src="/src/assets/operation.png"
                            alt="AI Writing Png"
                            className="w-10 h-10 object-contain"
                        />
                        <div>
                            <h2 className="text-3xl font-bold pb-2">Automation Toolkit</h2>
                            <p className='text-[#627382]'>Automate repetitive tasks and streamline your workflow with powerful tools.</p>
                            <p className="text-xl mt-3 py-1"><span className=' font-bold text-[24px]'>$79</span>/mo</p>
                        </div>
                        <ul className="mt-2 flex flex-col gap-2 text-[#6276382]">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>50+ automations</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>API access</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom workflows</span>
                            </li>



                        </ul>
                        <div className="mt-6">
                            <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card flx w-96 bg-base-100 shadow-sm flexju">
                    <div className="card-body ">
                        <div className='flex justify-end'>
                            <span className="badge badge-xs badge-warning alig">Most Popular</span>
                        </div>
                        <img
                            src="/src/assets/portfolio.png"
                            alt="AI Writing Png"
                            className="w-10 h-10 object-contain"
                        />
                        <div>
                            <h2 className="text-3xl font-bold pb-2">Resume Builder Pro</h2>
                            <p className='text-[#627382]'>Create professional resumes and cover letters that land interviews.</p>
                            <p className="text-xl mt-3 py-1"><span className=' font-bold text-[24px]'>$15</span>/one-time</p>
                        </div>
                        <ul className="mt-2 flex flex-col gap-2 text-[#6276382]">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>100+ templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>ATS optimization</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Export to PDF</span>
                            </li>



                        </ul>
                        <div className="mt-6">
                            <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card flx w-96 bg-base-100 shadow-sm flexju">
                    <div className="card-body ">
                        <div className='flex justify-end'>
                            <span className="badge badge-xs badge-warning alig">Most Popular</span>
                        </div>
                        <img
                            src="/src/assets/social-media.png"
                            alt="AI Writing Png"
                            className="w-10 h-10 object-contain"
                        />
                        <div>
                            <h2 className="text-3xl font-bold pb-2">Social Media Content Kit</h2>
                            <p className='text-[#627382]'>Complete toolkit for creating engaging social media content across all platforms.</p>
                            <p className="text-xl mt-3 py-1"><span className=' font-bold text-[24px]'>$39</span>/mo</p>
                        </div>
                        <ul className="mt-2 flex flex-col gap-2 text-[#6276382]">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>5000+ assets</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Scheduler included</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Analytics dashboard</span>
                            </li>



                        </ul>
                        <div className="mt-6">
                            <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold">Buy Now</button>
                        </div>
                    </div>
                </div>

            </div>


            <div className='foot-step text-center'>
                <h1 className='font-extrabold text-[48px] text-[#101727]'>Get Started in 3 Steps</h1>
                <p className='leading-[20px] text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>


        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center px-4">
                          <div className="step-card bg-white rounded-2xl shadow-2xl p-6 w-72 text-center hover:shadow-2xl transition">

   
    <div className="flex justify-end mb-4">
        <span className="w-8 h-8 flex items-center justify-center bg-blue-900 text-white rounded-full text-sm font-bold">
            01
        </span>
    </div>


    <div className="w-20 h-20 mx-auto rounded-full bg-gray-400 flex items-center justify-center shadow-lg">
        <img
            src="/src/assets/user.png"
            alt="user"
            className="w-10 h-10 object-contain"
        />
    </div>

    <h2 className="font-bold text-xl text-[#101727] mt-4">
        Create Account
    </h2>

    <p className="text-sm text-[#627382] mt-2 leading-relaxed">
        Sign up for free in seconds. No credit card required to get started.
    </p>

</div>

                <div className="step-card bg-white rounded-2xl shadow-2xl p-6 w-72 text-center hover:shadow-2xl transition">

   
    <div className="flex justify-end mb-4">
        <span className="w-8 h-8 flex items-center justify-center bg-blue-900 text-white rounded-full text-sm font-bold">
            02
        </span>
    </div>


    <div className="w-20 h-20 mx-auto rounded-full bg-gray-400 flex items-center justify-center shadow-lg">
        <img
            src="/src/assets/package.png"
            alt="user"
            className="w-10 h-10 object-contain"
        />
    </div>

    <h2 className="font-bold text-xl text-[#101727] mt-4">
        Choose Products
    </h2>

    <p className="text-sm text-[#627382] mt-2 leading-relaxed">
           Browse our catalog and select the tools that fit your needs.
    </p>

</div>
                <div className="step-card bg-white rounded-2xl shadow-2xl p-6 w-72 text-center hover:shadow-2xl transition">

   
    <div className="flex justify-end mb-4">
        <span className="w-8 h-8 flex items-center justify-center bg-blue-900 text-white rounded-full text-sm font-bold">
            03
        </span>
    </div>


    <div className="w-20 h-20 mx-auto rounded-full bg-gray-400 flex items-center justify-center shadow-lg">
        <img
            src="/src/assets/rocket.png"
            alt="user"
            className="w-10 h-10 object-contain"
        />
    </div>

    <h2 className="font-bold text-xl text-[#101727] mt-4">
        Start Creating
    </h2>

    <p className="text-sm text-[#627382] mt-2 leading-relaxed">
        Download and start using your premium tools immediately.
    </p>

</div>
        </div>

              
            </div>
        </div>
    );
};

export default Product;