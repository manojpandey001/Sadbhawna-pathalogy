import React,{useState,useEffect,useRef}from 'react'
import './navbar.css';
import imgLogo from '../../assets/logo.jpg';
import Modal from '../Modal/modal';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [openCreate,setOpenCreate] = useState(false);
    const[clickAddtest,setClickAddTest] = useState(false);

    const ref = useRef();
    useEffect(()=>{
        const checkIfClickedOutside = (e)=>{
            if(clickAddtest && ref.current && !ref.current.contains(e.target) ){
                setClickAddTest(false);
            }
        }
    

    document.addEventListener("mousedown",checkIfClickedOutside);
    return()=>{
        document.removeEventListener("mousedown",checkIfClickedOutside);
    }
  },[clickAddtest])
    

    


     
  return (
    
    <div className="navbar">
        <Link to={'/'} className="leftside">
        <img src ={imgLogo} className = 'imgLogoNav' alt='logo'/>
        </Link>
        <div className="name">Sadbhawna Pathalogy Clinic</div>


        <div className="rightside">
            <div className="firstrightNavbar" onClick={()=>{setOpenCreate(prev=>!prev)}}>

                Create New
            </div>


            <Link to ={'/status'}  className="firstrightNavbar">
                Report
            </Link>


            <div className="firstrightNavbar">
                <div className="navLinkAddtest" onClick={()=>{setClickAddTest(true)}}>
                    Add test
                </div>
                {
                    clickAddtest && <div className="addtestModal" ref={ref}>
                    <div className="inputAddtestmodal">
                    <div className="inputaddTestlabel">Name</div>
                    <input type="text" />
                    </div>

                    <div className="inputAddtestmodal">
                    <div className="inputaddTestlabel">Description</div>
                    <input type="text" />
                    </div>

                    <div className="inputAddtestmodal">
                    <div className="inputaddTestlabel">Price</div>
                    <input type="text" />
                    </div>

                    <div className="inputAddtestmodal">
                    <div className="inputaddTestlabel">Image Link</div>
                    <input type="text" />
                    </div>

                    <div className="inputAddtestmodal">
                    <div className="inputaddTestlabel">Fasting</div>
                    <input type="text" />
                    </div>

                    <div className="inputAddtestmodal">
                    <div className="inputaddTestlabel">Normal Range</div>
                    <input type="text" />
                    </div>

                    <div className="inputAddtestmodal">
                    <div className="inputaddTestlabel">Abnormal Range</div>
                    <input type="text" />
                    </div>

                    <div className="createaddTest">Create</div>
                </div>
                }
            </div>
        </div>
        {
            openCreate && <Modal setOpenCreate={setOpenCreate}/>
        }
    </div>
    
    )
}
export default Navbar ;
