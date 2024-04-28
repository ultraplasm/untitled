import { Link } from "react-router-dom";
import Modal from 'react-modal';
import { useState } from "react";
import merch1 from '../Images/Merch/1.png';
import merch2 from '../Images/Merch/2.png';
import merch3 from '../Images/Merch/3.png';
import merch4 from '../Images/Merch/4.png';
import merch5 from '../Images/Merch/5.png';
import merch6 from '../Images/Merch/6.png';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '390px',
      height: '30vh',
      background: 'linear-gradient(127deg, rgba(255, 255, 255, 0.40) 10.63%, rgba(255, 255, 255, 0.1) 73.38%)',
      boxShadow: '0px 4px 24px -1px rgba(0, 0, 0, 0.25)',
      backdropFilter: 'blur(17.5px)',
      borderRadius: '40px',
      border: '0px solid'
    },
    overlay: {
      backgroundColor: 'rgba(0,0,0,0)'
    }
  };

function Store() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpenBasket, setIsOpenBasket] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function openBasket() {
        setIsOpenBasket(true);
    }

    function closeBasket() {
        setIsOpenBasket(false);
    }

    return (
        <div className="store">
            <div class="header">
                <Link to="/home" style={{ textDecoration: 'none' }}>
                    <div id="button" ></div>
                </Link>
                <h1 class="store-title">Store</h1>
                <button class="basket" id="store" onClick={()=>{openModal()}}>Basket</button>
            </div>
            <div class="content">
                <div class="block">
                    <img src={merch1} ></img>
                    <div class="price"> 
                        <p>Cube Lamp</p>
                        <p>$90</p>
                    </div>
                    <div class="basket" onClick={()=>{openBasket()}} id="add-to-basket">Add to basket</div>
                </div>
                <div class="block">
                    <img src={merch2} ></img>
                    <div class="price"> 
                        <p>Puffer</p>
                        <p>$560</p>
                    </div>
                    <div class="basket" onClick={()=>{openBasket()}} id="add-to-basket">Add to basket</div>
                </div>
                <div class="block">
                    <img src={merch3} ></img>
                    <div class="price"> 
                        <p>Ring</p>
                        <p>$50</p>
                    </div>
                    <div class="basket" onClick={()=>{openBasket()}} id="add-to-basket">Add to basket</div>
                </div>
                <div class="block">
                    <img src={merch4} ></img>
                    <div class="price"> 
                        <p>Cardholder</p>
                        <p>$80</p>
                    </div>
                    <div class="basket" onClick={()=>{openBasket()}} id="add-to-basket">Add to basket</div>
                </div>
                <div class="block">
                    <img src={merch5} ></img>
                    <div class="price"> 
                        <p>Ear cuff</p>
                        <p>$60</p>
                    </div>
                    <div class="basket" onClick={()=>{openBasket()}} id="add-to-basket">Add to basket</div>
                </div>
                <div class="block">
                    <img src={merch6} ></img>
                    <div class="price"> 
                        <p>Keychain</p>
                        <p>$30</p>
                    </div>
                    <div class="basket" onClick={()=>{openBasket()}} id="add-to-basket">Add to basket</div>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <h2 class="modal-text" >Basket</h2>
                <h3 class="modal-text" style={{marginTop: "28px", display: 'flex', flexDirection: 'column', alignItems: "center"}}>Your basket is empty</h3>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: "center", marginTop: '18px'}}>
                    <button class="continue" onClick={closeModal}>Continue</button>
                </div>
            </Modal>
            <Modal
                isOpen={modalIsOpenBasket}
                onRequestClose={closeBasket}
                style={customStyles}
            >
                <h3 class="modal-text" style={{marginTop: "32px", display: 'flex', flexDirection: 'column', alignItems: "center"}}>This item is sold-out</h3>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: "center", marginTop: '18px'}}>
                    <button class="continue" onClick={closeBasket}>Continue</button>
                </div>
            </Modal>
        </div>
    );
}

export default Store;