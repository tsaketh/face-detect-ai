import React from 'react';
import { Component } from 'react';
import './FaceDetect.css';

import {connect} from 'react-redux';
import { getFaces } from '../Actions';

const mapStateToProps = (state) => {
    return {
        boxes: state.getBoundingBoxesForFaces.boxes
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