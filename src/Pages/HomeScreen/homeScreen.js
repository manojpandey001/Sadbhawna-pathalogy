import React,{useEffect,useState} from 'react'
import './homeScreen.css';
import Labpic from '../../assets/homescreenLogo.jpg'
import data from './data.json';
import Footer from '../../CommonComponenets/Footer/footer';


const HomeScreen = () => {
  const[listOfTest,setListOfTest]= useState([]);
  const [activeIndexNav,setActiveIndexNav] = useState(0);
  const [selectedDetailedTest, setSelectedDetailedtest] = useState(null);
  
  useEffect(()=>{
    setListOfTest(data.data)
    setSelectedDetailedtest(data.data[0])
  },[])

  const handleClickNavLink =(index)=>{
    setActiveIndexNav(index)
    setSelectedDetailedtest(data.data[index])


  }
   
  
  return (
    <div className="homescreen">
      <div className="introHomescreen"> 
       <div className="imgHOmescreenLogo">
        <div className="imgDiv">
        <img className="lablogo" src ={Labpic}  alt="Labpic"/>
        </div>
        <div className="introPart">
          <div className="titleMajor"> Sadbhawna Pathalogy Clinic 
          </div>

          <div className="titleMini">A Fully Computerised Laboratory</div>

          <div className="description1"> 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Ab ratione dicta quis temporibus quam iste delectus, explicabo mollitia saepe pr
            aesentium magnam provident unde cupiditat

            Lorem ipsum dolor sit, amet consectetur adipisicing elit. D
            ucimus, fuga. Repellat, optio esse fuga sunt sint quis quibusdam quia quisquam.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, voluptates.
          </div>
          <div className="description2"> 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Ab ratione dicta quis temporibus quam iste delectus, explicabo mollitia saepe pr
            aesentium magnam provident unde cupiditatmet consectetur adipisicing elit. D
            ucimus, fuga. Repellat, optio esse fuga sunt sint quis quibusdam quia quisquam.
            Lorem ipsum dolor sit amet.
          </div>
          <div className="topBtnDiv">
            <div className="btns-div">
              Create
            </div>

            <div className="btns-div">
              Contact
            </div>
          </div>


        </div>
       </div>
      </div>

      <div className="testHomescreen">
        <div className="leftParttest">
          <div className="totalTest">4 Test Available</div>
          
        
          <div className="testNamediv">
          {
              listOfTest?.map((item,index)=>{
                return(
                <div onClick={()=>{handleClickNavLink(index)}} className={`testNameTitle ${activeIndexNav===index?"activeNavLink":null}`}>{item.name}</div>

                );

              })
            }
            
          </div>
        </div>
        
        <div className="rightParttest">
          <div className="toprightPart">
            {selectedDetailedTest?.name}
            </div>

          <div className="bottomRightPart">
            <div className="topbttmrightpart">
             {selectedDetailedTest?.description}
            </div>
            <div className="bttmbttmtRpart">
              <div className="bBrightpartleftside">
                {
                  selectedDetailedTest?.requirements.map((item,index)=>{
                    return(
                      <div className="detailsblock">
                       {item.key} :
                      <span className="spancolorChange">{item.value}</span>
                    </div>
                    )

                  })
                }
                
                
               


              </div>
              <div className="bBrightpartRightside">
                <img src={selectedDetailedTest?.imgLink} alt='pic' className='bBRightImage'/>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="contactHomescreen">
      <div className="contactFormTitle" id='contact'>Contact Form</div>
      <div className="contacForm">
        <div className="inputFields">
          <input type='email' className='inputFieldsBox' placeholder='Enter your email Id'/>
          <input type='text' className='inputFieldsBox' placeholder='Enter your Name'/>
          <input type='number' className='inputFieldsBox' placeholder='Enter your Number'/>
          <textarea type='textbox' className='inputTextareaMessage' placeholder='Type your message here..' rows={10}/>
        </div>
        <div className='sendEmailButton'>
          Send
        </div>
      </div>


      </div>

     <Footer/>

    </div>
  )
}

export default HomeScreen
