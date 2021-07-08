import React from 'react';
import { Component } from 'react';
// import FaceImg from './DSC_0285.JPG'
import './FaceDetect.css';

import {connect} from 'react-redux';
import { getFaces } from '../Actions';

const mapStateToProps = (state) => {
    return {
        boxes: state.userSubmitImage.boxes
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        getFaces: (imageURL) => dispatch(getFaces(imageURL))
    }
}

class FaceDetect extends Component{
    // constructor(){
    //     super();
    //     this.state={
    //         boxes:[]
    //     }
    // }
    // faceCalculation=(data)=>{
    //     const imageselected = document.getElementById('input-image');
    //     const imagewidth = imageselected.width;
    //     const imageheight = imageselected.height;
    //     let boxes = []
    //     data.forEach(element => {
    //         boxes.push({'leftCol': element.left*imagewidth, 'topRow': element.top*imageheight, 'rightCol': imagewidth-(element.right*imagewidth), 'bottomRow': imageheight-(element.bottom*imageheight)})
    //     });
    //     return boxes;
    // }
    // setBoundingBoxes=(data)=>{
    //     this.setState({boxes:data})
    // }

    componentDidUpdate(prevprops){
        if (this.props.imageUrl !== prevprops.imageUrl) {
            this.props.getFaces(this.props.imageUrl);
        }
    }
    componentDidMount(){
        this.props.getFaces(this.props.imageUrl);
    }
    render(){
        const bounding_boxes = this.props.boxes.map(({leftCol, topRow, rightCol, bottomRow})=>{
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
export default connect(mapStateToProps, mapDispatchToProps)(FaceDetect);