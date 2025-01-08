import React from 'react'
import './modal.css';
const Modal = ({setOpenCreate}) => {
  return (
    <div className="modal">
            <div className="modal-card">
                <div className="model-titleBox">
                    <div className="modal-title">Create New</div>
                    <div className="x-button" onClick={()=>{setOpenCreate(prev=>!prev)}}>X</div>
                    </div>
                    <div className="modal-body">
                        <div className="inputrowmodal">
                            <div className="inputbox">
                                <div className="inputlabel">Name</div>
                                <input type='text' className='inputmodal' placeholder='Enter a Name'/>
                            </div>
                            <div className="inputbox">
                                <div className="inputlabel">Age</div>
                                <input type='text' className='inputmodal' placeholder='Enter Age'/>
                            </div>
                            
                        </div>

                        <div className="inputrowmodal">
                            <div className="inputbox">
                                <div className="inputlabel">Address</div>
                                <input type='text' className='inputmodal' placeholder='Enter Address'/>
                            </div>
                            <div className="inputbox">
                                <div className="inputlabel">Mobile Number</div>
                                <input type='Mobile Number' className='inputmodal' placeholder='Enter Mobile Number'/>
                            </div>
                            
                        </div>


                        <div className="inputrowmodal">
                            <div className="inputbox">
                                <div className="inputlabel">Examined By</div>
                                <input type='text' className='inputmodal' placeholder='Examined By'/>
                            </div>
                            <div className="inputbox">
                                <div className="inputlabel">Examined Date</div>
                                <input type='date' className='inputmodal' placeholder='Enter Examined Date'/>
                            </div>
                            
                        </div>


                        <div className="inputrowmodal">
                            <div className="inputbox">
                                <div className="inputlabel">Slelected Test</div>
                               <select className='inputmodal'>
                                 <option>Test1</option>
                                 <option>Test2</option>
                                 <option>Test3</option>
                                 <option>Test4</option>
                               </select>
                            </div>
                            <div className="inputbox">
                                <div className="inputlabel">Report Date</div>
                                <input type='date' className='inputmodal' placeholder='Enter Report Date'/>
                            </div>
                            
                        </div>
                        <div className="btnDivmodal">
                            <div className="submitModal">Submit</div>
                            <div className="submitModal">Clear</div>
                        </div>


                    </div>
                </div>
            </div>
  )
}

export default Modal
