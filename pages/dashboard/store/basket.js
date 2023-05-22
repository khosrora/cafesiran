import Cookies from "js-cookie";
import Router from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import LayoutPanel from "../../../components/panel/layout/layoutPanel";
import BasketIndex from "../../../components/panel/store/BasketIndex";
import GetInfoModal from "../../../components/shared/modals/getInfoModal";
import { postDataAPI } from "../../../utils/fetchData";
import { errorMessage } from "../../../utils/toast";

const Basket = () => {

  let postPrice = 30000

  const token = Cookies.get("CafesIran__TOKEN");
  const { storeCafe } = useSelector(state => state);
  const basket = storeCafe.basket;

  const [total, setTotal] = useState();
  const [info, setInfo] = useState(null);
  const [infoModal, setInfoModal] = useState(false);

  let totalPrice = postPrice + total;

  const handleGetInfoModal = async (e) => {
    e.preventDefault();
    setInfoModal(true)
  }
  
  const handlePayment = async (e) => {
    try {
      e.preventDefault();
      let data = {
        items: basket,
        fullName: info.fullName,
        total_price: totalPrice.toString(),
        phone: info.phone,
        address: info.address,
        postal_code: info.postal_code
      }
      const res = await postDataAPI(`store/order/`, data, token);
      if (res.status === 201) {
        Router.push(res.data.detail);
      } else {
        errorMessage('لطفا دوباره امتحان کنید');
      }
    } catch (error) {
      console.log(error);
      errorMessage('لطفا دوباره امتحان کنید')
    }
  }


  return (
    <>
      <LayoutPanel>
        <BasketIndex info={info} handleGetInfoModal={handleGetInfoModal} handlePayment={handlePayment} total={total} setTotal={setTotal} postPrice={postPrice} />
      </LayoutPanel>
      {
        infoModal &&
        <div className="fixed top-0 w-full h-screen flex justify-center items-center z-40 p-2">
          <GetInfoModal setInfoModal={setInfoModal} setInfo={setInfo} />
        </div>
      }
    </>
  );
}

export default Basket;