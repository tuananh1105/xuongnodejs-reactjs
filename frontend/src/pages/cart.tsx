import { Banner } from "@/components";
import ServiceIcon from "@/components/ui/serviceicon";
import usercart from "@/hooks/userCart";
import { ChangeEvent } from "react";

const CartPage = () => {
    const { data, mutate, handleQuantity, calculateTotal, isLoading, isError } = usercart();
    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Error</p>
    return (
        <div>
            <Banner />
            <div className="container mx-auto">
                <section className="services">
                    <div className="container-fluid flex justify-center">
                        <div className="service-list-cart">
                            <div className="cart-product">
                                <div className="bentrai">
                                    <div className="dulieu">
                                        <p>Product</p>
                                        <p id="price">Price</p>
                                        <p id="quantity">Quantity</p>
                                        <p className="ml-24">Subtotal</p>
                                    </div><br />
                                    {data?.products.map((product: any, index: number) => {
                                        const totalPrice = product.price * product.quantity;
                                        return (
                                            <div className="dulieu2 relative" key={index}>
                                                <img src={"https://picsum.photos/100/100"} alt="" />
                                                <p>{product.name}</p>
                                                <p>${product.price}</p>
                                                <button className=" bg-blue-500 rounded-full absolute ml-[380px]" onClick={() => mutate({ action: "DECRMENT", productId: product.productId })}>-</button>
                                                <span className="flex ml-11 mt-2" >{product.quantity}
                                                    <input className='border border-sky-200 w-[80px] h-[30px] ' type="number" onInput={(e) => handleQuantity(product.productId, e as ChangeEvent<HTMLInputElement>)} />
                                                </span>
                                                <button className=" bg-blue-500 rounded-full absolute ml-[530px] " onClick={() => mutate({ action: "INCREMENT", productId: product.productId })}>+</button>

                                                <p id="price_mua">${totalPrice}</p>

                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="benphai px-8">
                                    <h2>Cart Totals</h2>
                                    {/* 1 */}
                                    <div className="totals mr-9">
                                        <div className="totals1">
                                            <p>Total</p>
                                        </div>
                                        <div className="totals2__p">
                                            <p>${calculateTotal()}</p>
                                        </div>
                                    </div>
                                    {/* 2 */}
                                    <br /><br />
                                    <a href="/order"><button>Check Out</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
                <br />
                <br />
            </div >

            <ServiceIcon />
        </div >

    )
}

export default CartPage