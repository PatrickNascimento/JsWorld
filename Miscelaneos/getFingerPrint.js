 function getFingerPrint() {        
        var options = {
                excludes: {
                    userAgent: true,                 
                    screenResolution: true,
                    availableScreenResolution: true,                   
                    openDatabase: true,                   
                    plugins: true,
                    canvas: true,
                    webgl: true,
                    adBlock: true,
                    hasLiedLanguages: true,
                    hasLiedResolution: true,
                    hasLiedOs: true,
                    hasLiedBrowser: true,                    
                    fontsFlash: true,                    
                    enumerateDevices: true,
                },               
            }
            Fingerprint2.getV18(options, function (components) {                
                fprint = components;                
                console.log(fprint)
        })
    }


    if (window.requestIdleCallback) {
        getFingerPrint()
    } else {
        getFingerPrint()
    }