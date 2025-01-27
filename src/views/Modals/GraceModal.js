import React from "react";
import Datetime from "react-datetime";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Close from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

//Core Components
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Badge from "components/Badge/Badge.js";
//import CustomInput from "components/CustomInput/CustomInput";
import Table from "components/Table/Table";

import {BaseUrl} from "variables/BaseUrl";
import styles from "assets/jss/material-kit-react/modalStyle";


const useStyles = makeStyles(styles);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

Transition.displayName = "Transition";
export default function GraceModal({Grace,openGrace,uid}){
const classes=useStyles();
const [gr,setGr]=React.useState([]);
const [applyingGrace,setApplyingGrace]=React.useState(false);
const [applied,setAppliedGrace]=React.useState(false);
const [open,setOpen]=React.useState(false);
const [err,setErr]= React.useState(false);
const [errMsg,setErrMsg]=React.useState('');
//const {uid}=JSON.parse(localStorage.getItem("data"));
const token=JSON.parse(localStorage.getItem("tokens"));
const [postDate,setPostDate]=React.useState("");
var yesterday = Datetime.moment().subtract( 1, 'day' );
var valid = function( current ){
    return current.isAfter( yesterday );
}


const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  setErr(false);
  setOpen(false);
};


React.useEffect(()=>{

    try{
    const fetchData= async ()=>{
      const result= await fetch(`${BaseUrl}/api/mess/grace?uid=${uid}`,{
        headers:{
          Authorization:token
        }
      }) ;
      if(result.status===200||result.status===201||result.status===304){
      const res = await result.json();
      setGr(res.data.map((item)=>{
        let currDate=new Date(`${item.date}`) 
        const date=[];
        let badge=null;  
            if(item.outstation===1){
               badge=<Badge color="warning">Outstation</Badge>
               }
            else if(item.outstation===0){
                badge=<Badge color="success">Online</Badge>
            }
            
          date.push(currDate.toDateString(),badge);
          return date;
      })) 
  }}
    fetchData();
    
  }catch(err){
      console.log(err);
    }
   
  },[applied,uid,token]);
 
React.useEffect(()=>{
  if(applyingGrace===true){
    try{
      const sendData=async ()=>{
        const result =await fetch(`${BaseUrl}/api/mess/grace`,{
          method:"post",
          headers:{'Content-Type':"application/json",
          Authorization:token},
          body:JSON.stringify({
            uid:uid,
            date:postDate
          })
         })
         const res = await result.json();
        if(res.err===false){
          setOpen(true);
          setAppliedGrace(true);
        }
        else if(res.err===true)
        setErr(true);
        setErrMsg(res.msg);
       
      }
      sendData();
      setApplyingGrace(false);
    }
    catch(err){
      console.log(err);
    }
  }
},[applyingGrace,uid,token,postDate])  


    return(
        <Dialog
                  classes={{
                    root: classes.center,
                    paper: classes.modal
                  }}
                  maxWidth="md"
                  fullWidth={true}
                  open={Grace}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => openGrace(false)}
                  aria-labelledby="classic-modal-slide-title"
                  aria-describedby="classic-modal-slide-description"
                >
                  <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                  >
                    <IconButton
                      className={classes.modalCloseButton}
                      key="close"
                      aria-label="Close"
                      color="inherit"
                      onClick={() => openGrace(false)}
                    >
                      <Close className={classes.modalClose} />
                    </IconButton>
                    <h3 className={classes.modalTitle}><strong>Mess Grace</strong></h3>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <GridContainer direction="column" justify="flex-start">
                    <GridItem xs={12} sm={12} md={12}>
                    <InputLabel className={classes.label}>
                      Grace Date
                    </InputLabel>
                     <br/>
                    <FormControl fullWidth>
                    <Datetime
                      dateFormat="YYYY-MM-DD" 
                      isValidDate={valid}
                      timeFormat={false}
                      onChange={(e)=>{
                        const date = new Date(`${e.toLocaleString()}`);
                        const {Date1,Month,Year}={
                          Date1:date.getDate(),
                          Month:date.getMonth()+1,
                          Year:date.getFullYear()
                        }
                        if(Month>9){
                          if(Date1<10){
                        setPostDate(`${Year}-${Month}-0${Date1}`);}
                        else
                        setPostDate(`${Year}-${Month}-${Date1}`);
                        }else{
                          if(Date1<10)
                          setPostDate(`${Year}-0${Month}-0${Date1}`);
                          else
                          setPostDate(`${Year}-0${Month}-${Date1}`);
                        }
                      }}                
                      inputProps={{ placeholder: "Select Date Here"}}
                    />
                  </FormControl>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                  <div style={{paddingTop:"30px",paddingBottom:"20px"}}>
                      <b>Procedure:</b><br/><br/>
                      1) The following are the available graces for Semester I 2019-20: <br/>
                          <b>&nbsp;&nbsp;&nbsp;January: 5 Online and 8 Outstation Graces <br/>
                             &nbsp;&nbsp;&nbsp;February: 6 Online and 8 Outstation Graces <br/>
                             &nbsp;&nbsp;&nbsp;March: 6 Online and 8 Outstation Graces <br/>
                             &nbsp;&nbsp;&nbsp;April: 6 Online and 8 Outstation Graces <br/>
                             &nbsp;&nbsp;&nbsp;May: 6 Online and 8 Outstation Graces </b><br/>   
                      2) Grace cannot be applied for more than two consecutive days. <br/>
                      3) Grace needs to be submitted before 5 PM, for the next day. <br/>
                      4) Grace applied online cannot be changed. So, apply that carefully.<br/>
                      5) If finger is scanned for a grace day, grace will stand cancelled for the same.<br/>
                  </div>
                  </GridItem>
                  </GridContainer>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={6}>                  
                 <Table
                  tableHeaderColor="primary"
                  tableHead={[<b>PREVIOUS GRACES</b>,<b>TYPE</b>]}
                  tableData={gr}
                  /> 
                </GridItem>
              </GridContainer>

                  </DialogContent>
                  <DialogActions className={classes.modalFooter}>
                   
                  <Button
                      onClick={() => setApplyingGrace(true)}
                      color="success"
                      solid="true"
                      round
                    >
                      Submit
                  </Button>
                    <Button
                      onClick={() => openGrace(false)}
                      color="danger"
                      solid="true"
                      round
                    >
                      Close
                    </Button>
                  </DialogActions>
                  <Snackbar
           anchorOrigin={{horizontal:'center',vertical:'top'}}
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success">
              Grace SuccessFully Applied
        </Alert>
          </Snackbar>
          <Snackbar
           anchorOrigin={{horizontal:'center',vertical:'top'}}
            open={err}
            autoHideDuration={4000}
            onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="error">
              {errMsg}
        </Alert>
          </Snackbar>
                </Dialog>
    );
}