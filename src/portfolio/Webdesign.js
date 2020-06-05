import React from 'react';

class Webdesign extends React.Component {

    alutModal() {
		this.myAlut.setAttribute("style", "display:block");
    }
    
    hideModal() {
		this.myAlut.setAttribute("style", "display:none");
	}

	render() {

        function autosistFunction() {
			window.open("https://autosist.com/");
		}
		function ljgFunction() {
			window.open("http://logicjump.com/");
        }
        function mintfryFunction() {
			window.open("http://204.197.244.110/~mintfry/portal/");
		}function ojasFunction() {
			window.open("https://www.facebook.com/ojasapp/");
		}
		function nbsFunction() {
			window.open("https://www.noorbyaastha.com/");
		}
		return (
            <React.Fragment>
                <ul id="stage" style={{height:'auto'}}>
                <li data-tags="Web Design"><a onClick={this.alutModal.bind(this)}><img src={require('../images/web/alufabindia.jpg')} alt="Illustration" /></a></li>
                <li data-tags="Web Design" onClick={autosistFunction}><img src={require('../images/web/autosist.jpg')} alt="Illustration" /></li>
                <li data-tags="Web Design" onClick={ljgFunction}><img src={require('../images/web/logicjump.jpg')} alt="Illustration" /></li>
                <li data-tags="Web Design" onClick={mintfryFunction}><img src={require('../images/web/mintfry.jpg')} alt="Illustration" /></li>
                <li data-tags="Web Design" onClick={mintfryFunction}><img src={require('../images/web/mintfryOrder.jpg')} alt="Illustration" /></li>
                <li data-tags="Web Design" onClick={ojasFunction}><img src={require('../images/web/ojas.jpg')} alt="Illustration" /></li>
                <li data-tags="Web Design"><img src={require('../images/web/wtp.jpg')} alt="Illustration" /></li>
                <li data-tags="Web Design" onClick={nbsFunction}><img src={require('../images/web/noorbyaastha.png')} alt="Illustration" /></li>
            </ul>
            <div
                ref={alut => {
                    this.myAlut = alut;
                }} className="modal">
                <div className="modal-content modal-animate-top" style={{width:'562px', height:'360px', background: 'transparent',  border:'hidden'}}>
                    <span onClick={this.hideModal.bind(this)} className="closebtn" style={{padding:'0px', fontSize: '35px', color:'red'}}>x</span>
                    <img src={require('../images/alufabindia.jpg')} alt="alufabindia.jpg" />
                </div>
            </div>
            </React.Fragment>
		)
	}
}

export default Webdesign;