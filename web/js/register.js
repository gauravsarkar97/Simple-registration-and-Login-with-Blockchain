import {  init_web3 } from "./utils.js"

window.onload = async function () {
      var x = await init_web3()
      console.log("hp")
      document.getElementById("btnnew").addEventListener("click", function () {
        var username = document.getElementById("Uname").value;
        var password = document.getElementById("password").value;
        var usertype = document.getElementById("usertype").value;
          window.accounts = ["0xceb3e2d65bfc024121a33d71d3f3a78035ab345e"]  //your account address here


          window.pm.methods.createParticipant(username,password,usertype).send({ from: window.accounts[0] , gas: 500000 }, function (error, result) {
        if (error) {
            console.log(error)
            console.log("false")
        } else {
          //
          window.pm.methods.getParticipantName().call({ from: window.accounts[0] }, function (error, result) {
        if (error) {
            console.log(error)
            console.log("false")
        } else {
          
          document.getElementById("user_id").textContent=result-1;
          
            console.log(result)
            console.log("true")

        }
      })
        }
      })
      })

    }
