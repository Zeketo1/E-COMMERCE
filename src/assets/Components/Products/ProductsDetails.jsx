import { useContext, useEffect, useRef } from "react";
import Footer from "../Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
// import rating from "/rating.jpg";
import { products } from "../../utils/products";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { CartContext } from "../Cart/CartContextProvider";

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);

  console.log(useParams);
  const { id } = useParams();

  const productData = products.find((product) => product.id == id);
  useEffect(() => {
    document.title = `${productData.name.toLowerCase()}-DUTO`;
  }, []);

  const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "Cart", href: "/cart" },
  ];

  const animate = useRef();
  const navigate = useNavigate();
  const animateHome = () => {
    animate.current.classList.add("animate-pulse");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  return (
    <div className="grid">
      <div>
        <div className="flex gap-1 top-5 px-28 relative">
          {navigationLinks.map(({ label }) => (
            <ul key={label}>
              <li onClick={animateHome}>/{label}</li>
            </ul>
          ))}
        </div>

        <div ref={animate} className="flex justify-center px-[7rem] py-[5rem]">
          <img className="h-[25rem]" src={productData.image} alt="" />
          <div className="flex flex-col px-28 gap-10">
            <div className="text-[24px]">
              <h1 className=" tracking-[2px] font-bold">{productData.name}</h1>
              <p className="font-sans">${productData.price}</p>
            </div>
            <div className="flex items-center">
              {/* <img className="h-6" src={rating} alt="" /> */}
              <span className="text-[#929292] text-[13px]">
                (Customer Review)
              </span>
            </div>
            <div className="description text-[#929292] text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
              ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus
              et magnis dis parturient montes nascetur ridiculus mus. Vestibulum
              ultricies aliquam convallis.
            </div>
            <div className="flex align-middle">
              <button className="flex py-2 px-2 border gap-12 text-[#999] text-[.8rem]">
                <span>Quantity</span>
                <span className="flex items-center gap-4">
                  <IoMdArrowDropleft />
                  <span>4</span>
                  <IoMdArrowDropright />
                </span>
              </button>
              <button
                onClick={() => addToCart(productData)}
                type="submit"
                className="bg-black relative text-white py-[.27rem] px-[2.51rem] "
              >
                <span className="relative top-[.4rem] tracking-[.15rem] font-bold text-[12px]">
                  ADD TO CART
                </span>
                <span className="relative flex h-3 w-3 -top-[2rem] left-[8.3rem] ">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-700   opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;