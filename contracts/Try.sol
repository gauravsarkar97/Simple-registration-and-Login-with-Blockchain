pragma solidity ^0.5.9;

contract Try {

    uint8 public _u_id =0;
    
    struct participant {
        string _userName;
        string _passWord;
        string _userType;
    }
    mapping(uint => participant) public participants;
    
    function createParticipant(string memory name ,string memory pass,string memory type) public returns (uint){
        uint user_id = _u_id++;
        participants[user_id]._userName = name ;
        participants[user_id]._passWord = pass;
        participants[user_id]._userType = type;

        return user_id;
    }
    
  function getParticipantName()public view returns(uint ){
       return _u_id;
   }

    function userLogin(uint uid ,string memory uname ,string memory pass ,string memory type) public view returns (bool){
            if(keccak256(bytes(participants[uid]._userName)) == keccak256(bytes(uname))) {
                if(keccak256(bytes(participants[uid]._passWord))==keccak256(bytes(pass))) {
                    if(keccak256(bytes(participants[uid]._userType))==keccak256(bytes(type))) {
                    return (true);
                    }
            }
        }
        
        return (false);
    }
}