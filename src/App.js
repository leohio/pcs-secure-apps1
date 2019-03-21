import React, { Component } from 'react';
import './App.css';
import "./Dark.css";
import "./White.css";
import setting from "./img/setting.png";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { switchSetting, setPrice } from "./redux/actions";
import Header from "./Component/Header/Header";
import Setting from "./Component/Setting/Setting";
import Aws from "./scripts/Aws";

class App extends Component {

  switchSetting() {
    this.props.dispatch(switchSetting());
  }

  render() {
    return (
      <Router>
        {/* テーマでクラスが変わる */}
        <div className={this.props.darkMode ? "dark-mode" : "white-mode"}>

          {/* ヘッダー */}
          <Header />

          {/* reduxのsettingによって設定画面かコンテンツを表示するか変更する */}
          {<Setting />}

          {/* 設定アイコン */}
          <input id="setting-icon" type="image" src={setting} alt="setting" onClick={this.switchSetting} />
          
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode.darkMode,
    setting: state.setting.setting
  };
};

export default connect(mapStateToProps)(App);
