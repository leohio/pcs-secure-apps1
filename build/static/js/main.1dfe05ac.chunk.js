(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var r=n(2),a=n.n(r),c=n(4),s=n(13),o=n(14),i=n(18),u=n.n(i),l=n(40),h=n(64),p=function(){function e(t){Object(s.a)(this,e),this.symbol=t}return Object(o.a)(e,[{key:"genKeyPair",value:function(){var e=Object(c.a)(a.a.mark(function e(t,n){var r,c,s,o,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.symbol,e.next=3,l.a.genSalt(n,r,Number(t));case 3:if(64===(c=e.sent).length){e.next=6;break}return e.abrupt("return",window.alert("\u901a\u4fe1\u304c\u4e0a\u624b\u304f\u51fa\u6765\u3066\u3044\u307e\u305b\u3093"));case 6:return s=u.a.seedPrivate("".concat(n).concat(c)),o=u.a.privateToPublic(s),i={privateKey:s,publicKey:o},e.abrupt("return",i);case 10:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"getLocalAuth",value:function(){var e=JSON.parse(localStorage.getItem(this.symbol));try{return{id:e.id,privateKey:e.privateKey}}catch(t){throw new Error("\u30ed\u30fc\u30ab\u30eb\u306eSubsig\u30ad\u30fc\u306e\u8aad\u307f\u8fbc\u307f\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002")}}},{key:"getEOSAuth",value:function(){var e=Object(c.a)(a.a.mark(function e(t){var n,r,c,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"pcscoreprtcl",n={code:"pcscoreprtcl",scope:this.symbol,table:"token",lower_bound:t,limit:1},e.next=4,Object(h.a)(n);case 4:return r=e.sent,c=r.rows[0].owner,s={account:c,subkey:r.rows[0].subkey},e.abrupt("return",s);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getSigAndSubkey",value:function(){var t=Object(c.a)(a.a.mark(function t(){var n,r,c,s,o,i;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=this.getLocalAuth(),r=n.id,c=n.privateKey,s=e.genSig(c),t.next=5,this.getEOSAuth(r);case 5:return o=t.sent,i=o.subkey,t.abrupt("return",{signature:s,subkey:i});case 10:return t.prev=10,t.t0=t.catch(0),console.error(t.t0),t.abrupt("return",{signature:"",subkey:""});case 14:case"end":return t.stop()}},t,this,[[0,10]])}));return function(){return t.apply(this,arguments)}}()},{key:"verifyAuth",value:function(){var t=Object(c.a)(a.a.mark(function t(n,r){var c,s,o;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c=e.getSubSigMessage(),s=u.a.sign(c,r),t.next=4,l.a.checkRyodanSecurity(this.symbol,n,s,c);case 4:return o=t.sent,t.abrupt("return",o.verify);case 6:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},{key:"checkManager",value:function(){var e=Object(c.a)(a.a.mark(function e(t){var n,r,c;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"pcscoreprtcl",n={code:"pcscoreprtcl",scope:this.symbol,table:"manager",lower_bound:t,upper_bound:t,limit:1},e.next=4,Object(h.a)(n);case 4:return r=e.sent,c=1===r.rows.length,e.abrupt("return",c);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getSeller",value:function(){var e=Object(c.a)(a.a.mark(function e(t){var n,r,c,s,o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={code:n="pcscoreprtcl",scope:this.symbol,table:"sellorder",lower_bound:t,upper_bound:t,limit:1},e.next=4,Object(h.a)(r);case 4:if(c=e.sent,0!==(s=c.rows).length){e.next=8;break}return e.abrupt("return",n);case 8:return o=s[0].user,e.abrupt("return",o);case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}],[{key:"genSig",value:function(t){var n=e.getSubSigMessage();return u.a.sign(n,t)}},{key:"getSubSigMessage",value:function(){return String(864e5*Math.floor(Number(new Date)/864e5))}}]),e}()},162:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADmElEQVRYR81XTWhcVRT+vjvB6EQjBBQVESsITa1uWxqELNIkc+4EqwU3ouhChC5sUdFdXbjSWqiKWNz4vwo2hcm5kwTRCFqLLiWtIpKNIG2xC41ZlMw7csOMTF7ey7w3VPCuZt79zne/e885955D9DG892cAPJoynVPVx8rSsaxBxIvIJZK3p2wvqeodZfn6EuC9XwdwU2qxNVW95boImJ6efqhSqXxpZp+FEI4BsC5i571vZS2kqukNUUROkXwCwMOqejFtt+0EvPejZvY1ydsi2Mzmh4aGDs/Ozl6L/2dmZnYnSbKNKM61Wq3dCwsLP8ff4+PjN1ar1VmS9TbPFefc2Pz8/C/dIrYIqNfr9ydJEhe/M6X0OzN7FcAhks9kHP8m3Mz+BvARgLMAXiO5r5vHzH7f2NgYW1paWu183yJARFZJ3lvWjyXxq6p6X6YA7/2bAF4sSVgWflJVX8oU0E6xD0g+XZa1CN7MPgkhPJUbA+0JJyJnSD5ShLQoxszOhhAOA0h6CYgXzUGSS73IzexXAL8BeJDkSA98XVW1Zxq23XCa5HM5hNeSJDkB4HSz2YyLx5S7uVqtvkLyZQA35Ni9p6pHegqo1Wp7nHM/AKimwWb2Z6vVOrC4uLiStYj3fq+ZfUtyOGN+LUmSfc1m88IWF3jv3wFwwMziEY7kGHfy/FgI4a2djlpEjpI8lYeJmwBwleRVAOfove++ZnfibjnnhhuNRnwHcsfExMStg4ODfwCo9IqhOF9YgJldDCHsKUIqIhdIjhbBFhYAYEVV9xYhFZEVkoXElhHQSpJkpNlsRh/mjlqtNuyci/4t7IK3AYwVDMKjIYSIzx0i8jzJ3EDtDkIz+2bbcxzTkOT3JIfKpuHU1NQDlUrlXKk0zMnn9wE8m3cRmdkb6+vrry8vL69FTK1WuzteXNflIoqEIlIn2djpqM0s+vlHkvcA2FUgOA+q6hdpXFZN+F89Rp+HEB7v+RiJyMcknyywo9IQM/swhBArqn9HuiI6SfKF0swlDMzsRAghPlqb4/9Vkk1OTu4aGBiIr9mWotTMzgM4TjJ2Q7FaSvcEm7vpFKUk58wsFqX7uw+nZ1Eawe3K+HynwChTljvnRhuNxk+Rp6+yvKM2NibOua8AfJrRmCDvBc1qTLz37wKI0V+sMSkSTzmt2V+qmlWI7EjZV28oIpc7nVOHPfo3hHBXkQ3kpmFRYxGZI3kohe+rPf8HnAybkz7UjOoAAAAASUVORK5CYII="},165:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACSklEQVRYR+2VMWxOURzFf4fESmJDkHSxacKuRKzUIDGgTbqKGkRMGCwiwWARiSIxGLA3QdOxkdRkEUGEScLahL+c574vt89776v2fRHy3am9993/Of//Oed+4i8vDRI/IiaAUxnGPUkzOeaaCETEqItJWqxrJCIuARezs8uSvNdbqyaQurueKp2tdub9gRGICI8xH63xZiRN5t11TiAiNgHPgWL0NctS7Jf0tfMJJL0NbhLl+pb+2JjtGdwkFtMdT2t3Ol+dB5LedysdvwLG0t6LDKT8bNK+SFMzicPAnxNo0NtxcsR6q58vkh+cmJWloEXvorOk8a5fKdTr9L9JVSfV84Vrlv4omdfGsEXvsTLzEXEUuJ8KnZT0OJGwQS1JrS+qxv2NQJveZh8R64ErwPlKsavABUk/0vQafZHfW0agQcebkqZTd5uBR8CBhhg+A45J+pK+7/teFAQiYifwpJJvR2w603sP8BTY1gBebn8Ejkh6mfniRkUS+2Jc0jtFhKNk8Dzf71OR4o2PiCngFrChD3h5vARMSXqQ+cLkd1Tei3ETsFb7soO5BG69DXgHOLFC4Opnt4HTkpaSL0xiGZYJePzu1K7N9faofcGjX8uyFJbE0nialuMMYIlHSw8Uj0qmt01ms9l0XSyb0prPZ74o8OpiuBX4AKzrAjmr8R3YLulTYwwTuxHgTcfgZbkRSW+HBP75CcxKOlTnkYiYBQ62+KcTDwwJDCfw/09gC/CwJUoLks41xPAasLfl7nFJn1sfogH9BjSW/Qn1JVRHB3DY8AAAAABJRU5ErkJggg=="},166:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADG0lEQVRYR+2WS8hVZRSGnxeUFMO8oJVBOWkgaIYoXUlBnRiEIKSIpmniwIEGUQOhCzWLqCARIm9pkINEB6IDQaXUULBU+A0KtRASISMUjKJeee3bsv/jUfYP+6CDFhzO+c737bWevda3LuIOi+6wfe5+ANtDgIeBB6Ex8L/ABeCspL9v5+WuHrA9FngNmA1MHoDhTlsBOQ7sBT6UdKnzwE0Atl8F3gWGlcMGfgZ+AfK7iURvvPZIDf4P4HVJn9YV3ACwPRjYCCwqB04BHwA7JeXhAYvtkcBcIC81qSjYDLwi6Z+s6wBfAAuBq8BKYJukpm98WzjbsbMMWAfcA2ySlPV/ALbz1luL8WclJW6ti+0ngP3AUGCppC0qt/wn4CFggaTtrVuuKbS9GPgcOA88GoD5wJfAUUkh7KmUcMTDjwPzA1DF/iVJCUPPxfZy4LOEPQB9wARglKTfO63bXpprkni1uPcA8CvQF4AYHSzp3i4GkjJLyv8vS8r6utj+CFhdlh9LWlPbC/Smst4iKet+YvuvXPoA/AlcljSmy6HvSyXMVqeRA8D08sxBSTNqAHXwE5IS706AeGBsAM6WijVEUqhuSHF/3iSFaIakAFUeSIGpPJKU2lnbi8EA3gf081ztzJXKA7uBOflI2tNJ2ou17ZT5AJyOB1YBnwDbJS3ohcEu7n8G+Ab4KgD3A+eAtN3HJKUH9FRsvwW8DaypSvF7wNoCMqVbOrZJZPtkaU4TK4A0iK+BacCPwPOS8t262H4KOBx7kp6rd8Ok4cFSlJKa60vqZRZoTWwfA6YC8yTt6DeQ2E4xSml+oWbxO+BEw4HkN2CXpAwvN4ntd4A3gT2SknndZzzb2cxFSUgGOrhmhnhf0hu1nI+OTFm5ZxnLJki6eEuA2oMjgHTI8UDqdxOYgF+SNDp6bI8D0kdmARlQp0s6UtloorBx/G0/DRwCvgVWAC+WfjE85b4MITvqClsDsD2oTMDV7FfZyWQcD6yVlPrfT9oEmAnsK9ozV54u4/gGSWdu5cbWAEq8nyyN64emA22rAI0vS+3g/wDXALjSPdkqlta4AAAAAElFTkSuQmCC"},167:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABxElEQVRYR+2VPWtUQRSGnxdBXQgBy4iFnUKwiVgYEUUsBCEkTYgWwX9gkV8gapvOVkXE1krxC0VCDFjZaMA/IUgghZFXDpnVy3g/d1kQvAMX7sLMPM99Z85Z2TZ/xpqk9cLvib+qF+gT+K8SsD0NnEjPSeD4RKvAtoA7wFkggDNZXX+cqEDAbJ8C3gNHSprKg5EEbM8BXyXttOlUtq8BT0rmrnUWsH0GeAtsA5clfa+TsD0LbFQkcKWTgO154CUwlaCfgAtVEg3w2OJYa4EEfwMMsi8ulaiAx//OLeAmcFDSVCuBGvjQJSQuSfqWLl5Z7AG/IelRuph3JS00CrSADyU+A+eBoyVn/hs+nGx7IGm3VsD2ReB5FvtPYAW4Dixlx/El1Xqx5P6CF9dUCiT4C+BQYcEesCzpqe0DwOMkU1UItfBYVCpQA1+U9KwQY3S6qO9IJB+N8FKB1LU2sy//EXEX4ZnEQ2C1YNAKXiVwD4jo4/xjBPyqpNeVOe/3/KFEa3jdEcS5h8S5JniWxH3gXZRamxZdKZBqOSROS/rQdrNR5jX2gVE27bKmF+gT+OcSeAVsdbnFY869nScw5n6dlx/uBX4BYsUyCW5nHFgAAAAASUVORK5CYII="},169:function(e,t,n){"use strict";(function(e){var r=n(2),a=n.n(r),c=n(31),s=n(4),o=n(25),i=n(13),u=n(14),l=n(28),h=n(26),p=n(29),f=n(11),d=n(1),b=n.n(d),m=n(330),y=n(76),g=n(336),v=n(337),w=n(77),O=n(78),A=n(79),k=n(113),S=(n(240),n(40),n(174)),x=n(18),j=n.n(x),E=n(111),C=n.n(E),I=n(15),N=n.n(I),T=n(27),R=n(41),J=(n(320),function(t){return Array.from(function(t){var n=N.a.isBigInteger(t)?t:new N.a(t),r=new N.a("2"),a=r.pow(8),c=Array.from({length:8},function(e,t){return Number(n.divide(r.pow(8*t)).remainder(a))});return console.log("bytearray:",c),e(c)}(t))}),K=function(t){function n(e){var t;return Object(i.a)(this,n),(t=Object(l.a)(this,Object(h.a)(n).call(this,e))).state={symbol:"PTSD"},t.toggle=t.toggle.bind(Object(f.a)(Object(f.a)(t))),t.handleChange=t.handleChange.bind(Object(f.a)(Object(f.a)(t))),t.refreshKey=t.refreshKey.bind(Object(f.a)(Object(f.a)(t))),t.resetReduxAuthority=t.resetReduxAuthority.bind(Object(f.a)(Object(f.a)(t))),t}return Object(p.a)(n,t),Object(u.a)(n,[{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"handleChange",value:function(e){this.setState(Object(o.a)({},e.target.name,e.target.value))}},{key:"refreshtoken",value:function(){this.setState({symbol:this.state.symbol,nftId:this.state.nftId})}},{key:"refreshKey",value:function(){var t=Object(s.a)(a.a.mark(function t(){var n,r,s,o,i,u,l,h,p,f,d,b,m,y,g,v,w,O,A,x,E;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.state.symbol,r=new k.a(n),s=new k.a(n),o=this.state.nftId,i=this.state.passWord,u=this.state.newpassWord,alert(o+"/"+i+"/"+u+"/"+n),o&&n&&i){t.next=9;break}return t.abrupt("return",window.alert("\u5165\u529b\u304c\u8db3\u308a\u307e\u305b\u3093"));case 9:return t.next=11,r.getEOSAuth(o);case 11:return l=t.sent,l.account,h=l.subkey,t.next=16,r.genKeyPair(o,i);case 16:if(p=t.sent,f=p.privateKey,p.publicKey!==h){t.next=28;break}if({id:o,privateKey:f},this.setState({symbol:n,nftId:o,collapse:!1,passWord:""}),this.resetReduxAuthority(),window.alert("\u8a8d\u8a3c\u306b\u6210\u529f\u3057\u307e\u3057\u305f\u3002\u6b63\u89e3\u3067\u3059\uff01\uff01"),u){t.next=26;break}return t.abrupt("return",window.alert("\u65b0\u3057\u3044\u81ea\u5206\u3060\u3051\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u30bb\u30c3\u30c8\u3057\u3066\u4e0b\u3055\u3044"));case 26:t.next=29;break;case 28:return t.abrupt("return",window.alert("\u8a8d\u8a3c\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002"));case 29:return t.next=31,s.genKeyPair(o,u);case 31:return d=t.sent,d.privateKey2,b=d.new_subkey,t.prev=34,m=J(this.encodeName("refreshkey2")),y=J(U(n)),g=J(new N.a(String(o))),v=B(b),w=J(M()),O=Object(c.a)(m).concat(Object(c.a)(y),Object(c.a)(g),Object(c.a)(v),Object(c.a)(w)),A=e(O),x=j.a.sign(A,f),E={AgentEvent:"REFRESH",symbolCode:n,tokenId:o,signature:x,newSubKey:b},t.next=46,S.a.requestSignTx(E);case 46:t.sent,t.next=53;break;case 49:return t.prev=49,t.t0=t.catch(34),console.error(t.t0),t.abrupt("return",window.alert("\u8a8d\u8a3c\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002"));case 53:case"end":return t.stop()}},t,this,[[34,49]])}));return function(){return t.apply(this,arguments)}}()},{key:"resetReduxAuthority",value:function(){this.props.dispatch(Object(R.a)({symbol:null,nftId:null,accountName:null,isManager:!1}))}},{key:"render",value:function(){return b.a.createElement(m.a,{xs:"12",className:"p-3 mb-3 normal-shadow border-special"},b.a.createElement(y.a,{onClick:this.toggle,style:{marginBottom:"1rem"},className:"my-2"},"\u884c\u304d\u5148\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5165\u529b\u3057\u307e\u3059"),b.a.createElement(g.a,{isOpen:this.state.collapse},b.a.createElement(v.a,null,b.a.createElement(w.a,null,b.a.createElement(O.a,{for:"symbol"},"\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u540d"),b.a.createElement(A.a,{type:"text",name:"symbol",onChange:this.handleChange,value:this.state.symbol})),b.a.createElement(w.a,null,b.a.createElement(O.a,{for:"nftId"},"\u30c8\u30fc\u30af\u30f3ID"),b.a.createElement(A.a,{type:"number",name:"nftId",onChange:this.handleChange,value:this.state.nftId,placeholder:"\u30c8\u30fc\u30af\u30f3ID"})),b.a.createElement(w.a,null,b.a.createElement(O.a,{for:"passWord"},"\u30d1\u30b9\u30ef\u30fc\u30c9\uff08\u89e3\u7b54\uff09"),b.a.createElement(A.a,{type:"password",name:"passWord",onChange:this.handleChange,placeholder:"\u30d1\u30b9\u30ef\u30fc\u30c9"})),b.a.createElement(w.a,null,b.a.createElement(O.a,{for:"newpassWord"},"\u3042\u306a\u305f\u306e\u65b0\u3057\u3044\u30d1\u30b9\u30ef\u30fc\u30c9\uff08\u4efb\u610f\uff09"),b.a.createElement(A.a,{type:"password",name:"newpassWord",onChange:this.handleChange,placeholder:"\u65b0\u3057\u3044\u30d1\u30b9\u30ef\u30fc\u30c9"})),b.a.createElement(y.a,{onClick:this.refreshKey},"\u78ba\u8a8d/\u5909\u66f4"))))}}]),n}(d.Component);function B(t){var n=t.slice("EOS".length),r=C.a.decode(n);return e([0].concat(Object(c.a)(Array.from(r).slice(0,-4).map(function(e){return+e}))))}function U(e){if("string"!==typeof e)throw new Error("the first argument should be string type");if(e.length>7)throw new Error("string is too long to be a valid symbol_code");for(var t=new N.a("0"),n=new N.a("256"),r=e.length-1;r>=0;r--){var a=e[r];if(a<"A"||"Z"<a)throw new Error("only uppercase letters allowed in symbol_code string");t=(t=t.multiply(n)).add(new N.a(a.charCodeAt().toString()))}return t}function M(){var e=Number(new Date),t=15e3*Math.floor(e/15e3),n=new N.a(t.toString()).multiply(new N.a("1000"));return console.log("timestamp:",n.toString()),n}t.a=Object(T.b)()(K)}).call(this,n(12).Buffer)},174:function(e,t,n){"use strict";var r=n(2),a=n.n(r),c=n(4),s=n(13),o=n(14),i=n(18),u=n.n(i),l="https://78qy7hxmjd.execute-api.ap-northeast-1.amazonaws.com/pcsSecurityMain";n.d(t,"a",function(){return h});var h=function(){function e(){Object(s.a)(this,e)}return Object(o.a)(e,null,[{key:"checkByPCSSecurity",value:function(){var e=Object(c.a)(a.a.mark(function e(t,n,r,c){var s,o,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l+"/pcssecurity",s={name:"checkSig",symbol:t,tokenId:n,contract:"pcscoreprtcl",sig:r,message:c},o={method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(s)},e.next=5,fetch("https://78qy7hxmjd.execute-api.ap-northeast-1.amazonaws.com/pcsSecurityMain/pcssecurity",o);case 5:return e.next=7,e.sent.json();case 7:return i=e.sent,e.abrupt("return",i);case 9:case"end":return e.stop()}},e,this)}));return function(t,n,r,a){return e.apply(this,arguments)}}()},{key:"requestSignTx",value:function(){var e=Object(c.a)(a.a.mark(function e(t){var n,r,c,s,o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=l+"/eosagent",r={method:"POST",body:JSON.stringify(t)},e.next=4,fetch(n,r);case 4:return c=e.sent,e.next=7,c.json();case 7:if(!(s=e.sent).errorMessage){e.next=11;break}throw console.error(JSON.parse(s.errorMessage)),new Error("the request to ".concat(n," is failed"));case 11:return e.prev=11,o=s.signedTransaction.transaction,e.abrupt("return",o);case 16:e.prev=16,e.t0=e.catch(11),console.error(e.t0);case 19:case"end":return e.stop()}},e,this,[[11,16]])}));return function(t){return e.apply(this,arguments)}}()},{key:"genSalt",value:function(){var e=Object(c.a)(a.a.mark(function e(t,n,r){var c,s,o,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c=u.a.sha256(t),s="https://85z0ywf1ol.execute-api.ap-northeast-1.amazonaws.com/secretHashing0"+"?tokenId=".concat(r,"&hash=").concat(c,"&symbol=").concat(n),e.next=4,fetch(s,{method:"GET",mode:"cors"});case 4:return e.next=6,e.sent.json();case 6:return o=e.sent,i=o.body,e.abrupt("return",i);case 9:case"end":return e.stop()}},e,this)}));return function(t,n,r){return e.apply(this,arguments)}}()}]),e}()},176:function(e,t,n){e.exports=n(328)},181:function(e,t,n){},183:function(e,t,n){},185:function(e,t,n){},187:function(e,t,n){},193:function(e,t,n){},209:function(e,t){},211:function(e,t){},240:function(e,t,n){"use strict";var r=n(31),a=n(25),c=n(2),s=n.n(c),o=n(4),i=n(173),u=n(13),l=n(14),h=n(52),p=n.n(h),f=n(171),d=n.n(f),b=n(172),m=n.n(b),y=new(function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://nodes.get-scatter.com",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"443",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"mainnet";Object(u.a)(this,e);var a=new RegExp("(http(s)?://)?([\\w-]+\\.)+[\\w-]+(/[\\w- ./?%&=]*)?","gi");if(!t.match(a))throw new Error("this network is invalid. Please try again.");var c=t.split("://"),s=Object(i.a)(c,2),o=s[0],l=s[1];this.network={blockchain:"eos",protocol:o,host:l,port:n,chainId:{mainnet:"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",kylin:"5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191",jungle:"038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca"}[r]},this.eosOptions={expireInSeconds:60},this.requiredFields={accounts:[this.network]},p.a.plugins(new d.a),this.scatter=p.a.scatter,this.eosJS=this.scatter.eos(this.network,m.a,this.eosOptions),this.connected=!1}return Object(l.a)(e,[{key:"connect",value:function(){var e=Object(o.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.scatter.connect(t);case 2:if(this.connected=e.sent,this.connected){e.next=5;break}return e.abrupt("return",setTimeout(this.connect(t),2e3));case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=Object(o.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.scatter&&this.scatter.identity){e.next=9;break}return e.prev=1,e.next=4,this.scatter.login(this.requiredFields);case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(1),new Error(e.t0);case 9:if(this.account){e.next=17;break}e.prev=10,this.account=this.scatter.identity.accounts.find(function(e){return"eos"===e.blockchain}),e.next=17;break;case 14:throw e.prev=14,e.t1=e.catch(10),new Error("Account is not found. Please try again.");case 17:case"end":return e.stop()}},e,this,[[1,6],[10,14]])}));return function(){return e.apply(this,arguments)}}()},{key:"logout",value:function(){var e=Object(o.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.scatter.logout(),e.abrupt("return",t);case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"setRequiredFields",value:function(e,t){this.requiredFields=Object.assign({},this.requiredFields,Object(a.a)({},e,t))}},{key:"setTxOptions",value:function(e,t){this.eosOptions=Object.assign({},this.eosOptions,Object(a.a)({},e,t))}},{key:"action",value:function(){var e=Object(o.a)(s.a.mark(function e(t){var n,a,c,o,i,u;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.contractName,a=t.actionName,c=t.params,e.prev=1,o={authorization:["".concat(this.account.name,"@").concat(this.account.authority)]},e.next=5,this.eosJS.contract(n,{requiredFields:this.requiredFields});case 5:return i=e.sent,e.next=8,i[a].apply(i,Object(r.a)(c).concat([o]));case 8:return u=e.sent,e.abrupt("return",u);case 12:if(e.prev=12,e.t0=e.catch(1),"object"!=typeof e.t0){e.next=18;break}this._scatterError(e.t0),e.next=19;break;case 18:throw new Error(e.t0);case 19:case"end":return e.stop()}},e,this,[[1,12]])}));return function(t){return e.apply(this,arguments)}}()},{key:"transaction",value:function(){var e=Object(o.a)(s.a.mark(function e(){var t,n,a,c,o,i,u=arguments;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t=u.length,n=new Array(t),a=0;a<t;a++)n[a]=u[a];return e.prev=1,c={authorization:["".concat(this.account.name,"@").concat(this.account.authority)]},o=n.map(function(e){return e.contractName}),e.next=6,this.eosJS.transaction(o,function(e){n.forEach(function(t){var n,a=t.contractName.replace(".","_");(n=e[a])[t.actionName].apply(n,Object(r.a)(t.params).concat([c]))})});case 6:return i=e.sent,e.abrupt("return",i);case 10:if(e.prev=10,e.t0=e.catch(1),"object"!=typeof e.t0){e.next=16;break}this._scatterError(e.t0),e.next=17;break;case 16:throw new Error(e.t0);case 17:case"end":return e.stop()}},e,this,[[1,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"send",value:function(){var t=Object(o.a)(s.a.mark(function t(n,r,a){var c,o,i;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c=e.numToAsset(r),o={contractName:"eosio.token",actionName:"transfer",params:[this.account.name,n,c,a]},t.next=5,this.action(o);case 5:return i=t.sent,t.abrupt("return",i);case 9:if(t.prev=9,t.t0=t.catch(0),"object"!=typeof t.t0){t.next=15;break}this._scatterError(t.t0),t.next=16;break;case 15:throw new Error(t.t0);case 16:case"end":return t.stop()}},t,this,[[0,9]])}));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"_scatterError",value:function(e){throw new Error("".concat(e.type,"  ").concat(e.message))}}],[{key:"numToAsset",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"EOS",r=new RegExp("^([1-9]\\d*|0)(\\.\\d+)?$","gi");if(String(e).match(r))return String(e.toFixed(t))+" ".concat(n);throw new Error("amount can only be an unsigned decimal.")}}]),e}())("https://eos.greymass.com:443",443,"kylin");Object(o.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.connect("Ryodan");case 2:case"end":return e.stop()}},e,this)}))()},249:function(e,t){},289:function(e,t){},320:function(e,t,n){"use strict";var r=n(2),a=n.n(r),c=n(4),s=n(13),o=n(14),i=n(28),u=n(26),l=n(29),h=n(11),p=n(1),f=n.n(p),d=n(76),b=n(338),m=n(333),y=n(334),g=n(335),v=n(40);f.a.Component},328:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(50),s=n.n(c),o=(n(181),n(13)),i=n(14),u=n(28),l=n(26),h=n(29),p=(n(183),n(185),n(187),n(162)),f=n.n(p),d=n(339),b=n(27),m=n(41),y=n(11),g=n(331),v=(n(193),n(329)),w=n(330),O=n(332),A=n(165),k=n.n(A),S=n(166),x=n.n(S),j=n(167),E=n.n(j),C=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).switchHeader=n.switchHeader.bind(Object(y.a)(Object(y.a)(n))),n.switchLobby=n.switchLobby.bind(Object(y.a)(Object(y.a)(n))),n.switchDex=n.switchDex.bind(Object(y.a)(Object(y.a)(n))),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"switchLobby",value:function(){this.props.dispatch(Object(m.b)("lobby"))}},{key:"switchDex",value:function(){this.props.dispatch(Object(m.b)("dex"))}},{key:"switchHeader",value:function(e){return e?a.a.createElement(v.a,{className:"justify-content-between"},a.a.createElement(w.a,{xs:"4",tag:g.a,to:"/",style:{textDecoration:"none"},className:"special-color"},a.a.createElement("input",{id:"home-icon",type:"image",src:k.a,alt:"home"})),a.a.createElement(w.a,{xs:"4",className:"special-color",onClick:this.switchLobby},a.a.createElement("input",{id:"chat-icon",type:"image",src:x.a,alt:"lobby"})),a.a.createElement(w.a,{xs:"4",className:"special-color",onClick:this.switchDex},a.a.createElement("input",{id:"graph-icon",type:"image",src:E.a,alt:"graph"}))):a.a.createElement(v.a,null,a.a.createElement(w.a,{xs:"12"},a.a.createElement(g.a,{to:"/",style:{textDecoration:"none"},className:"special-color"},"Link\u3048\u3042\u3069\u308d\u3063\u3077")))}},{key:"render",value:function(){var e=""!==this.props.symbol;return a.a.createElement("div",{className:"header"},a.a.createElement(O.a,null,this.switchHeader(e)))}}]),t}(r.Component),I=Object(b.b)(function(e){return{symbol:e.community.symbol}})(C),N=n(169),T=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.symbol?this.props.symbol:"",t=this.props.nftId?this.props.nftId:"";return a.a.createElement("div",{className:"setting"},a.a.createElement(O.a,{className:"py-4"},a.a.createElement(v.a,null,a.a.createElement("div",null,a.a.createElement("h2",null,"CONTROL PANEL")),a.a.createElement(N.a,{symbol:e,id:t}))))}}]),t}(r.Component),R=Object(b.b)(function(e){return{symbol:e.authority.symbol,nftId:e.authority.nftId}})(T),J=(n(40),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"switchSetting",value:function(){this.props.dispatch(Object(m.c)())}},{key:"render",value:function(){return a.a.createElement(d.a,null,a.a.createElement("div",{className:this.props.darkMode?"dark-mode":"white-mode"},a.a.createElement(I,null),a.a.createElement(R,null),a.a.createElement("input",{id:"setting-icon",type:"image",src:f.a,alt:"setting",onClick:this.switchSetting})))}}]),t}(r.Component)),K=Object(b.b)(function(e){return{darkMode:e.darkMode.darkMode,setting:e.setting.setting}})(J);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=n(51),U=n(25);var M=Object(B.b)({darkMode:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{darkMode:!!localStorage.getItem("theme")&&JSON.parse(localStorage.getItem("theme"))};switch((arguments.length>1?arguments[1]:void 0).type){case"SWITCH_THEME":var t=!e.darkMode;return localStorage.setItem("theme",t),Object.assign({},e,{darkMode:t});default:return e}},community:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{symbol:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SWITCH_COMMUNITY":return Object.assign({},e,{symbol:t.symbol});default:return e}},communityContents:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{lobby:!0,dex:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SWITCH_COMMUNITY_CONTENTS":return"lobby"===t.newState?Object.assign({},e,{lobby:!0,dex:!1}):"dex"===t.newState?Object.assign({},e,{lobby:!1,dex:!0}):e;default:return e}},authority:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{symbol:null,nftId:null,accountName:null,isManager:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ACCOUNT_INFO":return Object.assign({},e,{symbol:t.newState.symbol,nftId:t.newState.nftId,accountName:t.newState.accountName,isManager:t.newState.isManager});default:return e}},chat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CHAT_THREAD":return Object.assign({},e,Object(U.a)({},t.newState.symbol,t.newState.thread));default:return e}},contents:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CONTENTS":return Object.assign({},e,Object(U.a)({},t.newState.symbol,t.newState.contents));default:return e}},setting:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{setting:!1};switch((arguments.length>1?arguments[1]:void 0).type){case"SWITCH_SETTING":return Object.assign({},e,{setting:!e.setting});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{modal:!1,symbol:"",accountName:"",nftId:"",iconUrl:"",biography:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_PROFILE":return Object.assign({},e,{modal:!0,symbol:t.profile.symbol,accountName:t.profile.accountName,nftId:t.profile.nftId,iconUrl:t.profile.iconUrl,biography:t.profile.biography});case"CLOSE_PROFILE":return Object.assign({},e,{modal:!1});default:return e}},price:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{eosjpy:"",nfteos:"",nftjpy:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PRICE":return Object.assign({},e,Object(U.a)({},t.key,t.value));default:return e}},share:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{modal:!1,url:"",title:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_SHARE":return Object.assign({},e,{modal:!0,url:t.url,title:t.title});case"CLOSE_SHARE":return Object.assign({},e,{modal:!1});default:return e}}}),F=Object(B.c)(M);s.a.render(a.a.createElement(b.a,{store:F},a.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},40:function(e,t,n){"use strict";var r=n(2),a=n.n(r),c=n(4),s=n(13),o=n(14);n(64);var i=n(18),u=n.n(i);n.d(t,"a",function(){return h});var l="https://2u1ebl117d.execute-api.ap-northeast-1.amazonaws.com/pcs_api_beta",h=function(){function e(){Object(s.a)(this,e)}return Object(o.a)(e,null,[{key:"getCmntyList",value:function(){var e=Object(c.a)(a.a.mark(function e(){var t,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l+"/community",e.next=3,fetch("https://2u1ebl117d.execute-api.ap-northeast-1.amazonaws.com/pcs_api_beta/community",{method:"GET",mode:"cors"});case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"title",value:function(){var e=Object(c.a)(a.a.mark(function e(t){var n,r,c;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=l+"/title?url=".concat(t),e.next=3,fetch(n,{method:"GET",mode:"cors"});case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"sendPermissionLink",value:function(){var e=Object(c.a)(a.a.mark(function e(t){var n,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return" https://78qy7hxmjd.execute-api.ap-northeast-1.amazonaws.com/proxyStage1/submitlink",n={method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(t)},e.next=4,fetch(" https://78qy7hxmjd.execute-api.ap-northeast-1.amazonaws.com/proxyStage1/submitlink",n);case 4:return e.next=6,e.sent.json();case 6:r=e.sent,console.log(r),alert("[\u7d39\u4ecb\u30b3\u30fc\u30c9\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002\u5fc5\u305a\u30b3\u30d4\u30fc\u3057\u3066\u4fdd\u5b58\u3057\u3066\u4e0b\u3055\u3044]"),alert("\u7d39\u4ecb\u30b3\u30fc\u30c9:"+r.body);case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getNoticeLink",value:function(){var e=Object(c.a)(a.a.mark(function e(t,n){var r,c,s,o,i,u;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&!(t.length<3)){e.next=2;break}return e.abrupt("return",!1);case 2:return"https://78qy7hxmjd.execute-api.ap-northeast-1.amazonaws.com/proxyStage1/getnoticelink",r={method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({sym:t})},e.next=6,fetch("https://78qy7hxmjd.execute-api.ap-northeast-1.amazonaws.com/proxyStage1/getnoticelink",r);case 6:return e.next=8,e.sent.json();case 8:if((c=e.sent).body){e.next=11;break}return e.abrupt("return",window.alert("\u901a\u77e5\u306e\u53d6\u5f97\u306b\u5931\u6557\u3057\u307e\u3057\u305f"));case 11:return s=JSON.parse(c.body),o=[],i=0,s.forEach(function(e){if(e.morethan>n&&e.lessthan<n)return!1;if(-1===e.list.indexOf(String(n))&&","!==e.list)return!1;var t=String(e.datetime);o.push("\u7d39\u4ecbID:\u3000\u3000"+e.indexhash+"\u3000\u3000|\u3000"+t.slice(4,6)+"\u6708"+t.slice(6,8)+"\u65e5"),i+=1}),u=i+"\u4ef6\u30a8\u30a2\u30c9\u30ed\u30c3\u30d7\u306e\u901a\u77e5\u304c\u3042\u308a\u307e\u3059",e.abrupt("return",[u,o]);case 17:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"getRedirectPermission",value:function(){var e=Object(c.a)(a.a.mark(function e(t){var n,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://78qy7hxmjd.execute-api.ap-northeast-1.amazonaws.com/proxyStage1/proxysecurity",n={method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(t)},e.next=4,fetch("https://78qy7hxmjd.execute-api.ap-northeast-1.amazonaws.com/proxyStage1/proxysecurity",n);case 4:return e.next=6,e.sent.json();case 6:(r=e.sent).redirect&&(window.location.href=r.redirect);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"genSalt",value:function(){var e=Object(c.a)(a.a.mark(function e(t,n,r){var c,s,o,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c=u.a.sha256(t),"https://85z0ywf1ol.execute-api.ap-northeast-1.amazonaws.com/secretHashing0",s={hash:c,symbol:n,tokenId:r},o={method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(s)},e.next=6,fetch("https://85z0ywf1ol.execute-api.ap-northeast-1.amazonaws.com/secretHashing0",o);case 6:return e.next=8,e.sent.json();case 8:return i=e.sent,e.abrupt("return",i.body);case 10:case"end":return e.stop()}},e,this)}));return function(t,n,r){return e.apply(this,arguments)}}()}]),e}()},41:function(e,t,n){"use strict";function r(e){return{type:"SWITCH_COMMUNITY_CONTENTS",newState:e}}function a(e){return{type:"SET_ACCOUNT_INFO",newState:e}}function c(){return{type:"SWITCH_SETTING"}}n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a}),n.d(t,"c",function(){return c})},64:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(2),a=n.n(r),c=n(170),s=n(4);function o(e){return i.apply(this,arguments)}function i(){return(i=Object(s.a)(a.a.mark(function e(t){var n,r,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://eos.greymass.com:443/v1/chain/get_table_rows",n={method:"POST",mode:"cors",body:JSON.stringify(Object(c.a)({json:!0},t))},e.next=4,fetch("https://eos.greymass.com:443/v1/chain/get_table_rows",n);case 4:return r=e.sent,e.next=7,r.json();case 7:return s=e.sent,e.abrupt("return",s);case 9:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}}},[[176,2,1]]]);
//# sourceMappingURL=main.1dfe05ac.chunk.js.map