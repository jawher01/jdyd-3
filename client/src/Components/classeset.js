import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {getAllClasses} from "../js/actions/classe"
const Classeset = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllClasses());
  }, [getAllClasses]);
  const classes = useSelector((state) => state.classeReducer.classe);
  const user = useSelector((state) => state.userReducer.user);
  
  let forms = [];
  for (let i = 0; i < classes.length; i++) {
    if ( classes[i].etudiant.includes(user._id)) {
      forms.push(classes[i]);
    }
  }
  
 
  return (
    <div>affichage taa cours</div>
  )
}

export default Classeset