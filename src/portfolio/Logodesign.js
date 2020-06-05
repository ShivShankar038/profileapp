import React from 'react';

class Logodesign extends React.Component {

    aluModal() {
		this.myAlu.setAttribute("style", "display:block");
	}
	autosistModal() {
		this.myAutosist.setAttribute("style", "display:block");
	}
	gunpriceModal() {
		this.myGunprice.setAttribute("style", "display:block");
	}
	logicjumpModal() {
		this.myLogicjump.setAttribute("style", "display:block");
	}
	mintfryModal() {
		this.myMintfry.setAttribute("style", "display:block");
	}
	ojasModal() {
		this.myOjas.setAttribute("style", "display:block");
	}
	wtpModal() {
		this.myWTP.setAttribute("style", "display:block");
	}
	zareouModal() {
		this.myZareou.setAttribute("style", "display:block");
	}
	zareoudModal() {
		this.myZareoud.setAttribute("style", "display:block");
	}
	nbrModal() {
		this.myNBR.setAttribute("style", "display:block");
    }

    hideModal() {
		//document.getElementsByID("wtp").setAttribute("style", "display:none");
		this.myAlu.setAttribute("style", "display:none");
		this.myAutosist.setAttribute("style", "display:none");
		this.myGunprice.setAttribute("style", "display:none");
		this.myLogicjump.setAttribute("style", "display:none");
		this.myMintfry.setAttribute("style", "display:none");
		this.myOjas.setAttribute("style", "display:none");
		this.myWTP.setAttribute("style", "display:none");
		this.myZareou.setAttribute("style", "display:none");
		this.myZareoud.setAttribute("style", "display:none");
		this.myNBR.setAttribute("style", "display:none");
	}
    
	render() {
		return (
            <React.Fragment>
                <ul id="stage" style={{height:'auto'}}>
                    <li data-tags="Logo Design">
                        <img src={require('../images/logo/alufabindia.jpg')} alt="Illustration" />
                        <div className="overlay">
                            <button type="button" className="btn-readmore" onClick={this.aluModal.bind(this)}>READ MORE</button>
                        </div>
                    </li>
                    <li data-tags="Logo Design">
                        <img src={require('../images/logo/autosist.jpg')} alt="Illustration" />
                        <div className="overlay">
                            <button type="button" className="btn-readmore" onClick={this.autosistModal.bind(this)}>READ MORE</button>
                        </div>
                    </li>
                    <li data-tags="Logo Design">
                        <img src={require('../images/logo/gunprice.jpg')} alt="Illustration" />
                        <div className="overlay">
                            <button type="button" className="btn-readmore" onClick={this.gunpriceModal.bind(this)}>READ MORE</button>
                        </div>
                    </li>
                    <li data-tags="Logo Design">
                        <img src={require('../images/logo/logicjump.jpg')} alt="Illustration" />
                        <div className="overlay">
                            <button type="button" className="btn-readmore" onClick={this.logicjumpModal.bind(this)}>READ MORE</button>
                        </div>
                    </li>
                    <li data-tags="Logo Design">
                        <img src={require('../images/logo/mintfry.jpg')} alt="Illustration" />
                        <div className="overlay">
                            <button type="button" className="btn-readmore" onClick={this.mintfryModal.bind(this)}>READ MORE</button>
                        </div>
                    </li>
                    <li data-tags="Logo Design">
                        <img src={require('../images/logo/ojas.jpg')} alt="Illustration" />
                        <div className="overlay">
                            <button type="button" className="btn-readmore" onClick={this.ojasModal.bind(this)}>READ MORE</button>
                        </div>
                    </li>
                    <li data-tags="Logo Design">
                        <img src={require('../images/logo/wtp.jpg')} alt="Illustration" />
                        <div className="overlay">
                            <button type="button" className="btn-readmore" onClick={this.wtpModal.bind(this)}>READ MORE</button>
                        </div>
                    </li>
                    <li data-tags="Logo Design">
                        <img src={require('../images/logo/zareou.jpg')} alt="Illustration" />
                        <div className="overlay">
                            <button type="button" className="btn-readmore" onClick={this.zareouModal.bind(this)}>READ MORE</button>
                        </div>
                    </li>
                    <li data-tags="Logo Design">
                        <img src={require('../images/logo/zareoudriver.jpg')} alt="Illustration" />
                        <div className="overlay">
                            <button type="button" className="btn-readmore" onClick={this.zareoudModal.bind(this)}>READ MORE</button>
                        </div>
                    </li>
                    <li data-tags="Logo Design">
                        <img src={require('../images/logo/noorbyaastha.png')} alt="Illustration" />
                        <div className="overlay">
                            <button type="button" className="btn-readmore" onClick={this.nbrModal.bind(this)}>READ MORE</button>
                        </div>
                    </li>
                </ul>

                <div ref={alu => {
                    this.myAlu = alu;
                    }} className="modal">
                    <div className="modal-content modal-animate-top">
                        <span onClick={this.hideModal.bind(this)} className="closebtn">x</span>
                        <div className="modal-header"> 
                            <h2 style={{margin: 0}}>Alufabindia</h2>
                        </div>
                        <div className="modal-body">
                            <p><span className="text-title">Title:</span> Alufabindia</p>
                            <p><span className="text-enviroment">Environment:</span> window</p>
                            <p><span className="text-role">Role:</span> Developer & Designer</p>
                            <p><span className="text-team">Team Size:</span> 1</p>
                            <p><span className="text-duration">Duration:</span> 1 Week</p>
                            <p><b style={{marginRight: '8px'}}>Project Description:</b> Alu-fab, as the name simply means aluminium fabrication, have our products range catering to innovative building enclosure systems, office partioning and weather resistant door and window casements. Started in 2001, with dedicated team of professionals and engineers, who have worked tirelessly to create a benchmark in industry.
                            With regular innovation and adaption of new construction material, we have been able to mark the landscape around with architectural works to be admired. Our product range covers a variety of materials ranging from WPC, Aluminium cladding, HPL, toughened glass,UPVC which are all resistant to weather conditions in India and hence higher service life.</p>
                            <p><b>Link:</b> <a>In Progress</a></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-default"  onClick={this.hideModal.bind(this)}>Close</button>
                        </div>
                    </div>
                </div>
                
                <div ref={autosist => {
                        this.myAutosist = autosist;
                    }} className="modal">
                    <div className="modal-content modal-animate-top">
                        <span onClick={this.hideModal.bind(this)} className="closebtn">x</span>
                        <div className="modal-header"> 
                            <h2 style={{margin: 0}}>AUTOsist</h2>
                        </div>
                        <div className="modal-body">
                            <p><span className="text-title">Title:</span> AUTOsist App</p>
                            <p><span className="text-enviroment">Environment:</span> window, Mac</p>
                            <p><span className="text-role">Role:</span> Developer & Designer</p>
                            <p><span className="text-team">Team Size:</span> 1</p>
                            <p><span className="text-duration">Duration:</span> 2+ Year</p>
                            <p><b style={{marginRight: '8px'}}>Project Description:</b> AUTOsist gives you an easy way to log and record maintenance, gas/fuel economy (monitor MPG), reminders, inspections and more. Easily attach receipts or other documents by taking a picture with your mobile device or scanning it via our web portal. No more paper clutter!</p>
                            <p><b>Link:</b> <a href="https://itunes.apple.com/us/app/autosist/id897916520?mt=8" target="_blank" rel="noopener noreferrer">https://itunes.apple.com/us/app/autosist/id897916520?mt=8</a></p>
                            <p><b>Link:</b> <a href="https://play.google.com/store/apps/details?id=com.AutoSist.Screens&hl=en" target="_blank" rel="noopener noreferrer">https://play.google.com/store/apps/details?id=com.AutoSist.Screens&hl=en</a></p>
                            <p><b>Link:</b> <a href="https://autosist.com/" target="_blank" rel="noopener noreferrer">https://autosist.com/</a></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-default"  onClick={this.hideModal.bind(this)}>Close</button>
                        </div>
                    </div>
                </div>
                
                <div ref={gunprice => {
                        this.myGunprice = gunprice;
                    }} className="modal">
                    <div className="modal-content modal-animate-top">
                        <span onClick={this.hideModal.bind(this)} className="closebtn">x</span>
                        <div className="modal-header"> 
                            <h2 style={{margin: 0}}>Gun Price Guide</h2>
                        </div>
                        <div className="modal-body">
                            <p><span className="text-title">Title:</span> Gun Price Guide App</p>
                            <p><span className="text-enviroment">Environment:</span> window</p>
                            <p><span className="text-role">Role:</span> Designer</p>
                            <p><span className="text-team">Team Size:</span> 1</p>
                            <p><span className="text-duration">Duration:</span> 1 Week</p>
                            <p><b style={{marginRight: '8px'}}>Project Description:</b> Gun Price Guide is the most extensive firearms pricing and information guide that contains thousands of guns information and their prices. The prices of guns are also provided based on the condition of the gun. There are thousands of listings and images of the listed guns which will give you a detailed description of the guns listed</p>
                            <p><b>Link:</b> <a href="https://itunes.apple.com/app/id1238700986?mt=8&ign-mpt=uo%3D4" target="_blank" rel="noopener noreferrer">https://itunes.apple.com/app/id1238700986?mt=8&ign-mpt=uo%3D4</a></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-default"  onClick={this.hideModal.bind(this)}>Close</button>
                        </div>
                    </div>
                </div>
                
                <div ref={logicjump => {
                        this.myLogicjump = logicjump;
                    }} className="modal">
                    <div className="modal-content modal-animate-top">
                        <span onClick={this.hideModal.bind(this)} className="closebtn">x</span>
                        <div className="modal-header"> 
                            <h2 style={{margin: 0}}>Logicjump Games</h2>
                        </div>
                        <div className="modal-body">
                            <p><span className="text-title">Title:</span> Logicjump Games App</p>
                            <p><span className="text-enviroment">Environment:</span> window, Mac</p>
                            <p><span className="text-role">Role:</span> Developer & Designer</p>
                            <p><span className="text-team">Team Size:</span> 1</p>
                            <p><span className="text-duration">Duration:</span> 1 Week</p>
                            <p><b style={{marginRight: '8px'}}>Project Description:</b> <b>1. Jump Servival: -</b> Beware of the deadly Shurikens and collect the Diamonds.
                            <b>2. TenUp: -</b> Test your mind with the math puzzle that will check your speed and calculating abilities.</p>
                            <p><b>Link:</b> <a href="http://logicjump.com" target="_blank" rel="noopener noreferrer">http://logicjump.com</a></p>
                            <p><b>Link:</b> <a href="https://itunes.apple.com/us/app/ten-up/id1439903610?ls=1&mt=8" target="_blank" rel="noopener noreferrer">https://itunes.apple.com/us/app/ten-up/id1439903610?ls=1&mt=8</a></p>
                            <p><b>Link:</b> <a href="https://play.google.com/store/apps/details?id=com.logicjump.jumpsurvival" target="_blank" rel="noopener noreferrer">https://play.google.com/store/apps/details?id=com.logicjump.jumpsurvival</a></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-default"  onClick={this.hideModal.bind(this)}>Close</button>
                        </div>
                    </div>
                </div>
                
                <div ref={mintfry => {
                        this.myMintfry = mintfry;
                    }} className="modal">
                    <div className="modal-content modal-animate-top">
                        <span onClick={this.hideModal.bind(this)} className="closebtn">x</span>
                        <div className="modal-header"> 
                            <h2 style={{margin: 0}}>Mintfry</h2>
                        </div>
                        <div className="modal-body">
                            <p><span className="text-title">Title:</span> Mintfry App</p>
                            <p><span className="text-enviroment">Environment:</span> window, Mac</p>
                            <p><span className="text-role">Role:</span> Developer & Designer</p>
                            <p><span className="text-team">Team Size:</span> 1</p>
                            <p><span className="text-duration">Duration:</span> 6 Months</p>
                            <p><b style={{marginRight: '8px'}}>Project Description:</b> MintFry is a solution for restaurants to launch their Brand's Mobile Apps. We at Mintfry equip the restaurants with the technical edge that they require to launch their brand in the online ordering market. We provide Mobile Application creation and submission services to restaurants using the MintFry's unique framework we have created for the restaurant apps. We provide an easy way for restaurants to launch their Android and iOS(iPhone) Apps without the hassles of developing the Apps for the mobile food ordering industry.</p>
                            <p><b>Link:</b> <a>In Progress</a></p>
                            <p><b>Link:</b> <a href="https://play.google.com/store/apps/details?id=com.mintfry.apps" target="_blank" rel="noopener noreferrer">https://play.google.com/store/apps/details?id=com.mintfry.apps</a></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-default"  onClick={this.hideModal.bind(this)}>Close</button>
                        </div>
                    </div>
                </div>
                
                <div ref={ojas => {
                        this.myOjas = ojas;
                    }} className="modal">
                    <div className="modal-content modal-animate-top">
                        <span onClick={this.hideModal.bind(this)} className="closebtn">x</span>
                        <div className="modal-header"> 
                            <h2 style={{margin: 0}}>Ojas</h2>
                        </div>
                        <div className="modal-body">
                            <p><span className="text-title">Title:</span> Ojas</p>
                            <p><span className="text-enviroment">Environment:</span> window</p>
                            <p><span className="text-role">Role:</span> Developer & Designer</p>
                            <p><span className="text-team">Team Size:</span> 1</p>
                            <p><span className="text-duration">Duration:</span> 4 Months</p>
                            <p><b style={{marginRight: '8px'}}>Project Description:</b> Ojas is a Healthcare and Wellness Medical Supplies Mobile App with on demand delivery at your doorsteps.</p>
                            <p><b>Link:</b> <a>In Progress</a></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-default"  onClick={this.hideModal.bind(this)}>Close</button>
                        </div>
                    </div>
                </div>

                <div
                    ref={wtp => {
                        this.myWTP = wtp;
                    }}
                    className="modal">
                    <div className="modal-content modal-animate-top">
                        <span onClick={this.hideModal.bind(this)} className="closebtn">x</span>
                        <div className="modal-header"> 
                            <h2 style={{margin: 0}}>Washingtontechpro</h2>
                        </div>
                        <div className="modal-body">
                            <p><span className="text-title">Title:</span> Washingtontechpro</p>
                            <p><span className="text-enviroment">Environment:</span> Window</p>
                            <p><span className="text-role">Role:</span> Developer & Designer</p>
                            <p><span className="text-team">Team Size:</span> 1</p>
                            <p><span className="text-duration">Duration:</span> 2 Weeks</p>
                            <p><b>Project Description:</b> We are your assistant in solving all technical problems. Are you frustrated with your computing device issues? Are you not getting any solution to get over it? Well, Washington Tech Pro is here to serve you and promise to resolve all your tech problems. Our certified technicians will assist you to fix all the troubles related to your computer system. We know viruses, malware and spyware are abundant, and it is not always so simple to avoid these pressing issues.</p>
                            <p><b>Link:</b> <a>In Progress</a></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-default" onClick={this.hideModal.bind(this)}>Close</button>
                        </div>
                    </div>
                </div>
                
                <div ref={zareou => {
                        this.myZareou = zareou;
                    }} className="modal">
                    <div className="modal-content modal-animate-top">
                        <span onClick={this.hideModal.bind(this)} className="closebtn">x</span>
                        <div className="modal-header"> 
                            <h2 style={{margin: 0}}>Zareou</h2>
                        </div>
                        <div className="modal-body">
                            <p><span className="text-title">Title:</span> Zareou App</p>
                            <p><span className="text-enviroment">Environment:</span> window</p>
                            <p><span className="text-role">Role:</span> Designer</p>
                            <p><span className="text-team">Team Size:</span> 1</p>
                            <p><span className="text-duration">Duration:</span> 1 Year</p>
                            <p><b style={{marginRight: '8px'}}>Project Description:</b> Zareou is redefining the ride share industry with its revolutionary on-demand concept that is changing how people move and travel around the world. Zareou provides a unique and one of kind passenger loyalty program that helps you earn recurring points from your referral network and redeem the same for free rides.</p>
                            <p><b>Link:</b> <a href="https://play.google.com/store/apps/details?id=com.zareou.app" target="_blank" rel="noopener noreferrer">https://play.google.com/store/apps/details?id=com.zareou.app</a></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-default"  onClick={this.hideModal.bind(this)}>Close</button>
                        </div>
                    </div>
                </div>
                
                <div ref={zareoud => {
                        this.myZareoud = zareoud;
                    }} className="modal">
                    <div className="modal-content modal-animate-top">
                        <span onClick={this.hideModal.bind(this)} className="closebtn">x</span>
                        <div className="modal-header"> 
                            <h2 style={{margin: 0}}>Zareou Driver</h2>
                        </div>
                        <div className="modal-body">
                            <p><span className="text-title">Title:</span> Zareou Driver App</p>
                            <p><span className="text-enviroment">Environment:</span> window</p>
                            <p><span className="text-role">Role:</span> Designer</p>
                            <p><span className="text-team">Team Size:</span> 1</p>
                            <p><span className="text-duration">Duration:</span> 1 Year</p>
                            <p><b style={{marginRight: '8px'}}>Project Description:</b> Zareou helps you make more money with each trip. Earn money when you accept a trip request from passengers and take them to their destination.</p>
                            <p><b>Link:</b> <a href="https://play.google.com/store/apps/details?id=com.zareou.driver&hl=en" target="_blank" rel="noopener noreferrer">https://play.google.com/store/apps/details?id=com.zareou.driver&hl=en</a></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-default"  onClick={this.hideModal.bind(this)}>Close</button>
                        </div>
                    </div>
                </div>

                <div
                    ref={nbr => {
                        this.myNBR = nbr;
                    }}
                    id="noor" className="modal">
                    <div className="modal-content modal-animate-top">
                        <span onClick={this.hideModal.bind(this)} className="closebtn">x</span>
                        <div className="modal-header"> 
                            <h2 style={{margin: 0}}>Noor By Aastha</h2>
                        </div>
                        <div className="modal-body">
                            <p><span className="text-title">Title:</span> Noor By Aastha</p>
                            <p><span className="text-enviroment">Environment:</span> Window</p>
                            <p><span className="text-role">Role:</span> Developer & Designer</p>
                            <p><span className="text-team">Team Size:</span> 1</p>
                            <p><span className="text-duration">Duration:</span> 2 Weeks</p>
                            <p><b>Project Description:</b> Get in touch with us for a complete makeover. We offer Makeup and Hair Styling services for Weddings, Events, Fashion, Editorials and Media.</p>
                            <p><b>Link:</b> <a href=" https://www.noorbyaastha.com/" target="_blank" rel="noopener noreferrer"> https://www.noorbyaastha.com/</a></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-default" onClick={this.hideModal.bind(this)}>Close</button>
                        </div>
                    </div>
                </div>

            </React.Fragment>
		)
	}
}

export default Logodesign;