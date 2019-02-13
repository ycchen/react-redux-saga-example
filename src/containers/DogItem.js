import React from 'react';
import { connect } from 'react-redux'


const imgStyle = {
  hight: 'auto',
  width: '80%',
  border: '4px solid RebeccaPurple ',
  borderRadius: '5%'
};
const articleStyle = {
  width: '50%',
  margin: '0 auto',
  color: 'olive'
}

let DogItem = ({ dog }) => {
  console.log("===dog===", dog)
  return (
      dog ?
        <div>
        <img src={dog.message} />
        </div>  
      :
        null
  )}


const mapStateToProps = (state) => ({
  dog: state.dog
})

DogItem = connect(
  mapStateToProps,
  null
)(DogItem)

export default DogItem


