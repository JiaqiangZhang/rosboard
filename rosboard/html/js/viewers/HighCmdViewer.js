"use strict";

class HighCmdController extends Viewer {
    /**
    * Gets called when Viewer is first initialized.
    * @override
  **/
  onCreate() {
    this.viewer = $('<div></div>')
      .css({'class': 'card-buttons'})
      .appendTo(this.card.content);

    this.btnStandUpId = "stand-up-button" ;
    this.btnSitDownId = "sit-down-button" ;
    this.btnStandUp = $('<button id="' + this.btnStandUpId + '"></button>')
        .css({ "class": "card-button"})
        .text("Stand Up")
        .appendTo(this.viewer);
    this.btnSitDown = $('<button id="' + this.btnSitDownId + '"></button>')
        .css({"class": "card-button"})
        .text("Sit Down")
        .appendTo(this.viewer);
    
    this.btnStandUp.on("click", 
        function(event){
            let mode = 6 // mode 6 = position stand up
            let bodyHeight = 0.5 
            currentTransport.update_highcmd({mode, bodyHeight});
        });
    this.btnSitDown.on("click", 
        function(event){
            let mode = 5 // mode 5 = position stand down
            let bodyHeight = 0.0
            currentTransport.update_highcmd({mode, bodyHeight});
        });
    console.log("HighCmd Viewer created");
  }
  onData(msg) {
    this.card.title.text(msg._topic_name);
  }

}

HighCmdController.friendlyName = "High Cmd Controller";

HighCmdController.supportedTypes = [
    "unitree_legged_msgs/msg/HighCmd",
];


HighCmdController.maxUpdateRate = 0.5;

Viewer.registerViewer(HighCmdController);