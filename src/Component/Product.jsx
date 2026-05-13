import React, { useState } from 'react'
import products from '../data/products.json'

const Product = ({cart,setCart,activeTab,setActiveTab}) => {


    const handleAddToCart = (product) => {
  if (!cart.some(item => item.id === product.id)) {
    setCart([...cart, product]);
  }
};

   if (activeTab === "cart") {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Cart Items</h1>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {cart.map((product) => (
            <div key={product.id} className="card w-96 bg-base-100 shadow-sm">

              <div className="card-body">

                <div className="flex justify-end">
                  <span className="badge badge-xs badge-warning">
                    {product.tagType}
                  </span>
                </div>

                <img
                  src={product.icon}
                  alt={product.name}
                  className="w-10 h-10 object-contain"
                />

                <h2 className="text-3xl font-bold pb-2">
                  {product.name}
                </h2>

                <p className="text-[#627382]">
                  {product.description}
                </p>

                <p className="text-xl mt-3">
                  <span className="font-bold text-[24px]">
                    ${product.price}
                  </span>
                  /{product.period}
                </p>

                <ul className="mt-2 flex flex-col gap-2 text-[#627382]">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                {/* REMOVE BUTTON */}
                <div className="mt-6">
                  <button
                    onClick={() =>
                      setCart(cart.filter(item => item.id !== product.id))
                    }
                    className="btn bg-red-500 text-white w-full"
                  >
                    Remove
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}

    const isInCart=(id)=>cart.some(item=>item.id ===id);

    
    return (
        <div id='products'>
            <div className='m-6 p-2 text-center'>
                <h1 className='font-bold text-[48px] text-[#101727]'>Premium Digital Tools</h1>
                <p className='text-[16px] text-[#627382]'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
            </div>
            <div className="flex gap-4 justify-center mt-4">

  <button
    onClick={() => setActiveTab("product")}
    className={`btn ${
      activeTab === "product"
        ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white"
        : "btn-outline"
    }`}
  >
    Products
  </button>

  <button
    onClick={() => setActiveTab("cart")}
    className={`btn ${
      activeTab === "cart"
        ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white"
        : "btn-outline"
    }`}
  >
    Cart ({cart.length})
  </button>

</div>

            <div className='product-card grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center px-6'>

  {products.map((product) => (

    <div key={product.id} className="card w-96 bg-base-100 shadow-sm">

      <div className="card-body">

        <div className='flex justify-end'>
          <span className="badge badge-xs badge-warning">
            {product.tagType}
          </span>
        </div>

        <img
          src={product.icon}
          alt={product.name}
          className="w-10 h-10 object-contain"
        />

        <div>
          <h2 className="text-3xl font-bold pb-2">
            {product.name}
          </h2>

          <p className='text-[#627382]'>
            {product.description}
          </p>

          <p className="text-xl mt-3 py-1">
            <span className='font-bold text-[24px]'>
              ${product.price}
            </span>
            /{product.period}
          </p>
        </div>

        <ul className="mt-2 flex flex-col gap-2 text-[#627382]">

          {product.features.map((feature, index) => (

            <li key={index}>

               {feature}

            </li>

          ))}

        </ul>

        <div className="mt-6">

          <button
  onClick={() => handleAddToCart(product)}
  disabled={isInCart(product.id)}
  className={`btn w-full font-bold transition-all duration-200
    ${isInCart(product.id)
      ? "bg-gray-400 text-white cursor-not-allowed"
      : "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white"
    }`}
>
  {isInCart(product.id) ? "Selected" : "Buy Now"}
</button>

        </div>

      </div>

    </div>

  ))}

</div>


            <div className='foot-step text-center'>
                <h1 className='mt-8 font-extrabold text-[48px] text-[#101727]'>Get Started in 3 Steps</h1>
                <p className='mb-4 leading-[20px] text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>


        <div className='grid grid-cols-3 gap-3 items-center justify-center ml-20 mt-5'>
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