import React from 'react';
import { Component } from 'react';
// import FaceImg from './DSC_0285.JPG'
import './FaceDetect.css';

class FaceDetect extends Component{
    constructor(){
        super();
        this.state={
            boxes:[]
        }
    }
    faceCalculation=(data)=>{
        const imageselected = document.getElementById('input-image');
        const imagewidth = imageselected.width;
        const imageheight = imageselected.height;
        let boxes = []
        data.forEach(element => {
            boxes.push({'leftCol': element.left*imagewidth, 'topRow': element.top*imageheight, 'rightCol': imagewidth-(element.right*imagewidth), 'bottomRow': imageheight-(element.bottom*imageheight)})
        });
        return boxes;
    }
    setBoundingBoxes=(data)=>{
        this.setState({boxes:data})
    }

    componentDidUpdate(prevprops){
        if (this.props.imageUrl !== prevprops.imageUrl) {
            fetch("https://face-detection-ts110798.herokuapp.com/api/v1/getfaces", {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify({"imgURL": this.props.imageUrl})
            }).then(res=>{
            if(res.status === 200){
                return res.json();
            } else {
                return -1;
            }
            }).then(faces=>{
            if(faces===-1){
                alert("Server is not responsive. Please check your internet and try again");
            } else{
                this.setBoundingBoxes(this.faceCalculation(faces))
            }
            })
        }
    }
    componentDidMount(){
        fetch("https://face-detection-ts110798.herokuapp.com/api/v1/getfaces", {
          method: 'POST', 
          headers: {
            'content-type': 'application/json'
          }, 
          body: JSON.stringify({"imgURL": this.props.imageUrl})
        }).then(res=>{
          if(res.status === 200){
            return res.json();
          } else {
            return -1;
          }
        }).then(faces=>{
          if(faces===-1){
            alert("Server is not responsive. Please check your internet and try again");
          } else{
            this.setBoundingBoxes(this.faceCalculation(faces))
          }
        })
    }
    render(){
        const bounding_boxes = this.state.boxes.map(({leftCol, topRow, rightCol, bottomRow})=>{
            return <div style={{
                top:topRow, 
                right:rightCol,
                bottom:bottomRow, 
                left:leftCol
            }} className="bounding-box"></div>
        })
        return (
            <div className="my-center ma">
                <div className="absolute mt2">
                    <img 
                        id='input-image'
                        width="500px"
                        src={this.props.imageUrl} 
                        alt="" 
                        height="auto"
                    />
                    {bounding_boxes}
                </div>
            </div>
        )
    }
}
export default FaceDetect;