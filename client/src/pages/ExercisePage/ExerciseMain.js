
import React, { useContext, useEffect, useState } from "react";
import "./exercise.css";
import CardioVasular from "../../components/ExerciseComp/CardioVasular";
import HeadDate from "../../components/ExerciseComp/HeadDate";
import DwTotal from "../../components/ExerciseComp/DwTotal";
import StrengthTraining from "../../components/ExerciseComp/StrengthTraining";
import Note from "../../components/ExerciseComp/Note";
import { Box, Button } from "@chakra-ui/react";
import { ExerciseContext } from "../../Context/ExerciseContext";

let tod=new Date().toISOString().slice(0, 10)
function ExerciseMain() {
  const [edit,setEdit]=useState(false)
  const {Exercisedata,setExercisedata}=useContext(ExerciseContext)

const [sumcal,setSumcal]=useState(0)
const [summin,setSummin]=useState(0)
  const [currdate,setcurrdate]=useState(tod)
  useEffect(()=>{
    let min=Exercisedata?.exercise?.reduce((ac,e)=>ac+Number(e.min),0)
    let cal=Exercisedata?.exercise?.reduce((ac,e)=>ac+Number(e.calories),0)
    
    setSummin(min)
    setSumcal(cal)
  },[Exercisedata])

 


  return (
    <Box className="section">
      <Box>
        <HeadDate currdate={currdate} setcurrdate={setcurrdate} />
        {/* table content */}
        <Box 
        // border="1px solid black"  
        padding="2rem 1rem"
        >
          <CardioVasular currdate={currdate} setcurrdate={setcurrdate} />
          <DwTotal summin={summin} sumcal={sumcal}/>
          <StrengthTraining/>
           {/* txt area box */}
           <Note  edit={edit} setEdit={setEdit}   />

           <Box textAlign='center'
           marginTop='2rem'
           >
          <Button  
          colorScheme='green'
          className="reportBtn">View Full Report (Printable)</Button>
        </Box>
       
        </Box>
       
       
      </Box>
    </Box>
  );
}

export default ExerciseMain;
