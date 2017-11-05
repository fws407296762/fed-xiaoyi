import React from "react";
import PropTypes from "prop-types";
import "./FormItem.scss";

class FormItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const isLabel = this.props.label;
        let label = null;
        if(isLabel){
            label = <label htmlFor="">{isLabel}</label>
        }
        return (
            <div className="form-item">
                {label}
                <div className="form-input-wrapper">
                    <input type={this.props.type} value={this.props.value} onChange={this.props.onChange} className="form-item-control" />
                </div>
            </div>
        )
    }
};

FormItem.defaultProps = {
    type:"text"
}

FormItem.propTypes = {
    value:PropTypes.string,
    onChange:PropTypes.func,
    type:PropTypes.string,
    label:PropTypes.string
}

export default FormItem;