/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Aws from "../../scripts/Aws";
import PropTypes from 'prop-types';

const propTypes = {
  refreshtoken: PropTypes.func,
};


class Airdrop extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      ptag:[],
      text:"",
      symbol:"",
      modaltitle:""
    };

    this.toggle = this.toggle.bind(this);
  }

  refreshtoken(){
    this.props.refreshtoken();
    this.setState({symbol:this.props.symbol,nftId:this.props.nftId})
  }

  async toggle() {
    
    this.refreshtoken();
    if(!this.props.symbol ||this.props.symbol.length<3){
        return window.alert("先に下でパスワードとトークンIDを入れて下さい。紹介IDは空で大丈夫です！！")
    }

    if(!this.state.modal){
      let new_text = await this.set_text()
      if(new_text){
        this.setState({
          modal: true
        });
      }
    }else{
      this.setState({
        modal: false
      });
    }
  }

  async set_text(){
    let droplist = await Aws.getNoticeLink(this.state.symbol,this.state.nftId)
    if (droplist){
      console.log(droplist)
      this.setState({
        modaltitle:droplist[0],
        ptag: droplist[1]
      });
      return true;
    }else{return false;}
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>通知GET</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>通知</ModalHeader>
          <ModalBody>
            <h3>{this.state.modaltitle}</h3>
              {
                this.state.ptag.map((sentence) => {
                  return (
                    <h4>{sentence}</h4>
                  )
                })
              }
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

Airdrop.propTypes = propTypes;
export default Airdrop;
