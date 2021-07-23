import React from 'react';
import { Component } from 'react';
import './FaceDetect.css';

import {connect} from 'react-redux';
import { getFaces } from '../Actions';

import Loader from '../Loader/Loader';

const mapStateToProps = (state) => {
    return {
        boxes: state.getBoundingBoxesForFaces.boxes,
        isPending: state.getBoundingBoxesForFaces.requestBoxPending
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        getFaces: (imageURL) => dispatch(getFaces(imageURL))
    }
}

class FaceDetect extends Component{
    componentDidUpdate(prevprops){
        if (this.props.imageUrl !== prevprops.imageUrl) {
            this.props.getFaces(this.props.imageUrl);
        }
    }
    componentDidMount(){
        this.props.getFaces(this.props.imageUrl);
    }
    render(){
        const {isPending, imageUrl, boxes} = this.props;
        const bounding_boxes = boxes.map(({leftCol, topRow, rightCol, bottomRow})=>{
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
                        src={imageUrl} 
                        alt="" 
                        height="auto"
                    />
                    {bounding_boxes}
                </div>
                <Loader isPending={isPending} message="Please wait while smart brain detects and trace the faces in the picture"/>:
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FaceDetect);