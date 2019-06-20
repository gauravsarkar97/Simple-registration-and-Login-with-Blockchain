import {  init_web3 } from "./utils.js"

window.onload = async function () {
      var x = await init_web3()
      console.log("hp")


      document.getElementById("btnloginpress").addEventListener("click", function () {
        var id = document.getElementById("Uid").value
        var username = document.getElementById("Uname").value;
        var password = document.getElementById("password").value;
        var usertype = document.getElementById("usertype").value;

    window.pm.methods.userLogin(id,username,password,usertype).call({ from: window.accounts[0]}, function (error, result) {
        if (error) {
            console.log(error)
            console.log("Login Failed")
        } else {
            console.log(result)
        }
    })

    })
    }
