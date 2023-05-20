import { useState } from "react";
import LayoutPanel from "../../../components/panel/layout/layoutPanel";
import BasketIndex from "../../../components/panel/store/BasketIndex";
import GetInfoModal from "../../../components/shared/modals/getInfoModal";

const Basket = () => {

  const [info, setInfo] = useState(null);
  const [infoModal, setInfoModal] = useState(false);

  const handleGetInfoModal = (e) => {
    e.preventDefault();
    if (info === null) {
      setInfoModal(true)
    } else {
      console.log('ok');
    }
  }

  const handlePayment = (e) => {
    e.preventDefault();
    console.log(info);
  }


  return (
    <>
      <LayoutPanel>
        <BasketIndex info={info} handleGetInfoModal={handleGetInfoModal} handlePayment={handlePayment} />
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