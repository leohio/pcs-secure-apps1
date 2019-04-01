import { asyncAll } from "./Util";
import { getTokenInfo } from "./EosHttpApi";
import ecc from "eosjs-ecc"; 

const AWS_API_URL = process.env.REACT_APP_AWS_API_URL;

// Awsサーバーからデータを取ってくる処理をまとめたもの
export default class Aws {

    // コミュニティデータを取得する
    static async getCmntyList() {
        const url = AWS_API_URL + "/community";
        const response = await fetch(url, { method: "GET", mode: "cors" });
        const community = await response.json();
        return community;
    }

    // URLページのタイトルを取得する
    static async title(pageUrl) {
        const url = AWS_API_URL + `/title?url=${pageUrl}`;
        const response = await fetch(url, { method: "GET", mode: "cors" });
        const title = await response.json();
        return title;
    }

    static async sendPermissionLink(payload) {
        const apiUrl = " https://78qy7hxmjd.execute-api.ap-northeast-1.amazonaws.com/proxyStage1/submitlink";
        const req = {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            headers: { "Content-Type": "application/json; charset=utf-8" },
            body: JSON.stringify(payload)
        };

        const res = await (await fetch(apiUrl, req)).json();
        console.log(res)
        alert("[紹介コードは次のとおりです。必ずコピーして保存して下さい]")
        alert("紹介コード:"+res.body)
    }

    static async getNoticeLink(symbol,nftId) {
        if(!symbol || symbol.length<3){return false}
        const apiUrl = "https://78qy7hxmjd.execute-api.ap-northeast-1.amazonaws.com/proxyStage1/getnoticelink";
        const req = {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            headers: { "Content-Type": "application/json; charset=utf-8" },
            body: JSON.stringify({"sym":symbol})
        };

        const res = await (await fetch(apiUrl, req)).json();
        if(!res.body){return window.alert("通知の取得に失敗しました")}
        const data = JSON.parse(res.body)
           
        let ptag = [];
        let noticecount =0;
        data.forEach(function(d){
          if(d.morethan>nftId && d.lessthan<nftId){return false};
          if(d.list.indexOf(String(nftId))===-1&&d.list!==","){return false};
          const datetime = String(d.datetime)
          ptag.push( "紹介ID:　　"+d.indexhash+"　　|　"+datetime.slice(4,6)+"月"+datetime.slice(6,8) +"日")
          noticecount += 1;
        })
        let title = noticecount+ "件エアドロップの通知があります";


        return [title,ptag]

    }

    // コミュニティのセキュリティチェック
    static async getRedirectPermission(payload) {
        const apiUrl = "https://78qy7hxmjd.execute-api.ap-northeast-1.amazonaws.com/proxyStage1/proxysecurity";

        const req = {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            headers: { "Content-Type": "application/json; charset=utf-8" },
            body: JSON.stringify(payload)
        };

        const res = await (await fetch(apiUrl, req)).json();
        if(res.redirect){window.location.href=res.redirect;}
    }


    // パスワードから生成したhashとsymbol,nftIdを使ってSaltを作る
    static async genSalt(password, symbol, nftId) {
        const seedHash = ecc.sha256(password);

        const apiUrl = "https://85z0ywf1ol.execute-api.ap-northeast-1.amazonaws.com/secretHashing0";
        const apiObj = {
            "hash": seedHash,
            "symbol": symbol,
            "tokenId": nftId
        };
        const req = {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            headers: { "Content-Type": "application/json; charset=utf-8" },
            body: JSON.stringify(apiObj)
        };

        const salt = await (await fetch(apiUrl, req)).json();
        return salt.body;
    }
}
