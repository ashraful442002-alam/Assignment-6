import React from 'react';

const Pricing = () => {
    const plans = [
        {
            title: "Basic",
            price: "$19/mo",
            popular: false,
        },
        {
            title: "Premium",
            price: "$29/mo",
            popular: true,
        },
        {
            title: "Pro",
            price: "$49/mo",
            popular: false,
        },
    ];

    return (
        <div id="pricing" className="text-center px-4 py-12">

            <h1 className="font-bold text-4xl md:text-5xl text-[#101727] mt-6 md:mt-10 pb-4">
                Simple, Transparent Pricing
            </h1>

            <p className="text-[#627382] mb-10">
                Choose the plan that fits your needs. Upgrade or downgrade anytime.
            </p>

            {/* CARDS */}
            <div className="flex  flex-cols-1 md:flex-cols-3 gap-6 justify-center place-items-center">

                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`card w-60 max-w-xs shadow-xl transition-all duration-300
                        hover:scale-105 hover:-translate-y-2 hover:shadow-2xl
                        ${plan.popular
                                ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white scale-105"
                                : "bg-base-100"
                            }
                    `}
                    >
                        <div className="card-body">

                            {/* Badge */}
                            {plan.popular && (
                                <span className="badge badge-warning mb-2">
                                    Most Popular
                                </span>
                            )}

                            {/* Title + Price */}
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl font-bold">
                                    {plan.title}
                                </h2>

                                <span className="text-lg font-semibold">
                                    {plan.price}
                                </span>
                            </div>

                            {/* Features */}
                            <ul className="mt-6 flex flex-col gap-2 text-sm opacity-90">
                                <li>High-resolution image generation</li>
                                <li>Customizable templates</li>
                                <li>Batch processing</li>
                                <li>AI enhancements</li>
                            </ul>

                            {/* Button */}
                            <div className="mt-6">
                                <button
                                    className={`btn w-full font-bold transition-all duration-200
                                    ${plan.popular
                                            ? "bg-white text-[#4F39F6]"
                                            : "btn-primary"
                                        }
                                `}
                                >
                                    Subscribe
                                </button>
                            </div>

                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Pricing;