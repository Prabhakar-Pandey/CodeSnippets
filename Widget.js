class Widget{
    constructor(configObj){
        if (Widget._instance) {
          return Widget._instance
        }
        Widget._instance = this;

        this.configObj = configObj;
        this.isOpen = false;
    }

    injectScript(src){
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.addEventListener('load', resolve);
            script.addEventListener('error', e => reject(e.error));
            document.head.appendChild(script);
        });
    }

    handleContanerClick(elem){
        if(this.isOpen===false){
            this.isOpen = true;
            elem.style.right = "0%";
        }else{
            this.isOpen = false;
            elem.style.right = "-22%";
        }
        
    }

    attachButtonClickListner(elem){
        elem.addEventListener("click", this.handleContanerClick.bind(this,elem), false);
    }

    createDOMNode(containerIdentifier) {
      var iDiv = document.createElement('div');
      iDiv.id = containerIdentifier || 'root';
        iDiv.style.position = "absolute";
        iDiv.style.right = "-22%";
        iDiv.style.top = "5%";
        iDiv.style.zIndex = "999";
          iDiv.className = 'root-wrapper';
          document.body.appendChild(iDiv);
        this.container = true;
        this.attachButtonClickListner(iDiv)
    }

    isEmptyOBj(obj={}){
        return Object.keys(obj).length === 0;
    }

    mergeConfigs(secondaryConfig){
        if(!this.isEmptyOBj(this.configObj)){
            this.configObj = {
                ...this.configObj,
                ...secondaryConfig
            }
        }
    }
    removeAllScripts(){
        // this will be impelemented later
    }
    
    initialize(secondaryConfig){
        console.log("initialize", this.configObj);
        if(this.container){
            return;
        }
        if(!this.isEmptyOBj(secondaryConfig)){
            this.mergeConfigs(secondaryConfig)
        }
        this.createDOMNode(this.configObj.containerId)
        // widget to application communication
        window.widgetData = this.configObj.widgetData;
        
        const promiseArray = [];
        if(Array.isArray(this.configObj.scripts) && this.configObj.scripts.length){
            this.configObj.scripts.forEach(script=>{
                promiseArray.push(this.injectScript(script));
            })

            Promise.all(promiseArray).then((values)=>{
                this.configObj.callBackfn("all scripts are injested!")
            }).catch((error)=>{
                console.log("script injestion failed!")
            })
        }
    }

    
}

const configObj = {
    containerId:"root-widget",
    scripts:["http://localhost:3000/static/js/bundle.js","http://localhost:3000/static/js/vendors~main.chunk.js","http://localhost:3000/static/js/main.chunk.js"],
    cssDependency:[""],
    callBackfn:(data)=>{
        console.log("This function will be called at the end.", data)
    },
    widgetData:{
        userId:"prabhakar.pandey@myntra.com",
        timeSlot:""
    }
}

const widget = new Widget(configObj)
widget.initialize();