import React from "react";
import {Redirect} from 'react-router-dom';
import MaterialTable from "material-table";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from '@material-ui/core/Snackbar';

import MuiAlert from '@material-ui/lab/Alert';

//Auth Components
import { useAuth } from "context/auth";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";

import {BaseUrl} from "variables/BaseUrl";

import {
  primaryColor,
  defaultFont
} from "assets/jss/material-kit-react.js";
import { set } from "d3";


const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  typo: {
    paddingLeft: "20%",
    marginBottom: "30px",
    position: "relative",
    
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  input: {
    color: "#495057",
    height: "unset",
    "&,&::placeholder": {
      fontSize: "14px",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "400",
      lineHeight: "1.42857",
      opacity: "1"
    },
    "&::placeholder": {
      color: "#AAAAAA"
    }
  },
  formControl: {
    margin: "0 0 17px 0",
    paddingTop: "27px",
    position: "relative",
    "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
      color: "#495057"
    }
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "#D2D2D2 !important",
      borderWidth: "1px !important"
    },
    "&:after": {
      borderColor: primaryColor
    }
  },
  label: {
    color: "rgba(0, 0, 0, 0.26)",
    top:"-17px",
    fontSize: "14px",
    transition: "0.3s ease all",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingLeft: "0",
    letterSpacing: "normal",
    "& + $underline": {
      marginTop: "0px"
    }
  },
  labelRoot: {
    ...defaultFont,
    color: "#AAAAAA !important",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "1.42857",
    top: "10px",
    letterSpacing: "unset",
    "& + $underline": {
      marginTop: "0px"
    }}
};
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(styles);

export default function GoodieExport() {

 const token=JSON.parse(localStorage.getItem("officialtokens"));
 
  //const [sendingData,setSendingData]=React.useState(false);
  const [blacklistData,setBlacklistData]=React.useState([]);
  
  const [recievedData,setRecievedData]=React.useState(false);
    
  const [success,setSuccess]=React.useState(false);
  const {onOfficialLogin}=useAuth();
  const classes = useStyles();
  const [err,setErr]=React.useState(false);
  const [errMsg,setErrMsg]=React.useState('');
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setErr(false);
    setSuccess(false);
  };
 
  React.useEffect(()=>{
  
   
    try{
      const SendData=async ()=>{
        const result =await fetch(`${BaseUrl}/api/o/blacklist`,{
          headers:{Authorization:`Bearer ${token}`}
        })
         const res = await result.json();
        if (res.err === false) {
          setBlacklistData(res.data.map((item,index)=>{
              return({...item,sno:index+1})
          }))
        }
        else if (res.err === true && result.status === 401) {
          logout();
        }
        else if (res.err === true) {
          setErr(true);
          setErrMsg(res.msg);
        }}
      SendData();
      
    }
    catch(err){
      console.log(err);
      
    } 
  
  },[recievedData,token])
  const sendRemoveData = async (uid) => {

    const result = await fetch(`${BaseUrl}/api/o/blacklist`, {
        method:"post",
        headers:{'Content-Type':"application/json",
        Authorization:`Bearer ${token}`},
        body:JSON.stringify({
          uid:uid
        })
    })
    const res = await result.json();
    if(res.err===false){
       setRecievedData(`${uid}-removed`);
        setSuccess(true);
      }
      else if(res.err===true){
        setErr(true);
        setErrMsg(res.msg);
    }

  }

 /* React.useEffect(()=>{
   if(messUpdate===true){
    try{
      const sendData=async ()=>{
        const result =await fetch(`${BaseUrl}/api/o/messmenu`,{
            method:"post",
            headers:{'Content-Type':"application/json",
            Authorization:`Bearer ${token}`},
            body:JSON.stringify({
              messno:1,
              menu:JSON.stringify(messMenuData)
            })
           })
         const res = await result.json();
        if(result.status===200||result.status===201){
          console.log("hi");
          setMenuUpdated(true);
          setMessUpdate(false);
        }
      
    }
      sendData();
      
    }
    catch(err){
      console.log(err);
      
    } 
  }
  },[messUpdate,token,messMenuData])
  
  */
 const logout=()=>{
  localStorage.removeItem("officialtokens");
  onOfficialLogin(false);  
  return (<Redirect exact to='/' />);
}
  return (
    <div>
      <div className={classes.typo} style={{marginTop:"-50px"}}>
          <h2><strong>BITS PILANI , HYDERABAD CAMPUS</strong></h2>
      </div>
      <GridContainer justify="center" alignItems="center">
        <GridItem xs={12} sm={12} md={11}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}><b>BLACKLIST OPERATIONS</b></h4>
            </CardHeader>
            <MaterialTable
                  title="BLACKLIST DATA"
                  columns={[
                   {title:"S No.",field:"sno"},
                   {title:"Student Name",field:"name"},
                   {title:"Student ID",field:"id"},
                   {title:"Room No.",field:"room"},
                   {title:"Mobile No.",field:"phone"}
                  ]}
                   data={blacklistData}
                  actions={[
                      {
                          icon: 'close',
                          //disabled:rowData.statusCode!==0,
                          tooltip: 'Remove as Blacklisted',
                          onClick: async (event, rowData) => {
                            sendRemoveData(rowData.uid); 
                              
                          }

                      }

                  ]}
            
                  options={{
                    
                    search:true,
                    pageSize:20,
                    emptyRowsWhenPaging:false,
                    actionsColumnIndex:-1
                    }}
                  
                           
                /> 
          </Card>
        </GridItem>
       
      </GridContainer>
      <Snackbar
           anchorOrigin={{horizontal:'left',vertical:'bottom'}}
            open={success}
            autoHideDuration={4000}
            onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success">
             Blacklist cleared
        </Alert>
          </Snackbar>
          <Snackbar
           anchorOrigin={{horizontal:'left',vertical:'bottom'}}
            open={err}
            autoHideDuration={4000}
            onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="error">
              {errMsg}
        </Alert>
          </Snackbar>
    </div>
  );
}
