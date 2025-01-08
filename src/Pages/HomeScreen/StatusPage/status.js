import React,{useState} from 'react'
import './status.css';
import UpdateIcon from '@mui/icons-material/Update';
import ArticleIcon from '@mui/icons-material/Article';
import DeleteIcon from '@mui/icons-material/Delete';

const Status = () => {
    const [activeBar,setActiveBar] = useState("Pending")
  return (
    <div className="statusPage">
        <div className="statusPagesworkDiv">
            <div className="statusBar">
                <div className={`statusTitle  ${activeBar==='Pending'?"activeBarStatus":null}`} onClick={()=>{setActiveBar('Pending')}}>Pending</div>
                <div className={`statusTitle  ${activeBar==='Completed'?"activeBarStatus":null}`} onClick={()=>{setActiveBar('Completed')}}>Completed</div>
             
            </div>

            <div className="statusList">
             <div className="statusRowList">
                <div className="statusName">MANOJ KUMAR</div>
                <div className="statusDocDetail">
                    <div className="statusDocName">Dr. Sanjeev Kumar</div>
                    <div className="statusDocName">05-05-2024</div>
                </div>
                <div className="statusButton">
                    <div className="icons"><UpdateIcon/></div>
                    <div className="icons" style={{backgroundColor:"yellow"}}><ArticleIcon/></div>
                    <div className="icons" style={{backgroundColor:"red"}}><DeleteIcon/></div>
                    
                </div>
             </div>

             <div className="statusRowList">
                <div className="statusName">MANOJ KUMAR</div>
                <div className="statusDocDetail">
                    <div className="statusDocName">Dr. Sanjeev Kumar</div>
                    <div className="statusDocName">05-05-2024</div>
                </div>
                <div className="statusButton">
                    <div className="icons"><UpdateIcon/></div>
                    <div className="icons" style={{backgroundColor:"yellow"}}><ArticleIcon/></div>
                    <div className="icons" style={{backgroundColor:"red"}}><DeleteIcon/></div>
                    
                </div>
             </div>

             <div className="statusRowList">
                <div className="statusName">MANOJ KUMAR</div>
                <div className="statusDocDetail">
                    <div className="statusDocName">Dr. Sanjeev Kumar</div>
                    <div className="statusDocName">05-05-2024</div>
                </div>
                <div className="statusButton">
                    <div className="icons"><UpdateIcon/></div>
                    <div className="icons" style={{backgroundColor:"yellow"}}><ArticleIcon/></div>
                    <div className="icons" style={{backgroundColor:"red"}}><DeleteIcon/></div>
                    
                </div>
             </div>
             
            </div>
            

        </div>
    </div>
  )
}

export default Status
