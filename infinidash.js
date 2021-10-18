module.exports = function(RED) {
    function Infinidash(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.count = config.count;
        this.on('input', function(msg, send, done) {
            output = []
            for (i=1; i <= this.count; i++){
                let newmsg = Object.assign({}, msg);
                newmsg.count = i
                output.push(newmsg)              
            }
            send([output]);
            if (done) {
                done();
            }
        });
    }
    RED.nodes.registerType("infinidash",Infinidash);
}