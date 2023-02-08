 
var LibraryMyPlugin = {
   $MyData: {
       myVar: "",
   },
   
   checkIsOKXWalletInstalled: function (){
        if(window.okxwallet === undefined){
            return false; // Wallet is not installed
        }
        else{
            return true; // OKX Wallet installed
        }
    },
   
   GetCurrentChain: function () {
        let currentChainId = okxwallet.chainId;
        var bufferSize = lengthBytesUTF8(currentChainId) + 1;
        var buffer = _malloc(bufferSize);
        stringToUTF8(currentChainId, buffer, bufferSize);
        return buffer;
    },
    
   OpenOKXWalletPopup: async function (){
        MyData.myVar = await okxwallet.request({ method: 'eth_requestAccounts' });
    },
    
    ChangeChain: function (chainID){
        okxwallet.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: UTF8ToString(chainID) }],
      });
    },
    
   GetAccount: function () {
        var str = JSON.stringify(MyData.myVar);
        var bufferSize = lengthBytesUTF8(str) + 1;
        var buffer = _malloc(bufferSize);
        stringToUTF8(str, buffer, bufferSize);
        return buffer;
    },
    
    CheckIsWalletConnected: function (){
        var str = JSON.stringify(MyData.myVar);
        var bufferSize = lengthBytesUTF8(str) + 1;
        var buffer = _malloc(bufferSize);
        stringToUTF8(str, buffer, bufferSize);
        return buffer;
    }
    
};
 
autoAddDeps(LibraryMyPlugin, '$MyData');
mergeInto(LibraryManager.library, LibraryMyPlugin);
