import React from 'react';

class Printdesign extends React.Component {
	render() {

        function autosistFunction() {
			window.open("https://autosist.com/");
        }
        function tenupFunction() {
			window.open("https://apps.apple.com/us/app/ten-up/id1439903610?ls=1");
        }
        function ljsFunction() {
			window.open("https://play.google.com/store/apps/details?id=com.logicjump.jumpsurvival");
        }
        function ojasFunction() {
			window.open("https://www.facebook.com/ojasapp/");
		}
        
		return (
			<ul id="stage" style={{height:'auto'}}>
                <li data-tags="Print Design" onClick={autosistFunction}><img src={require('../images/print/service_history_report.jpg')} alt="Illustration" /></li>
                <li data-tags="Print Design" onClick={autosistFunction}><img src={require('../images/ui/service+history_report.jpg')} alt="Illustration" /></li>
                <li data-tags="Print Design" onClick={tenupFunction}><img src={require('../images/print/tenUp.jpg')} alt="Illustration" /></li>
                <li data-tags="Print Design" onClick={tenupFunction}><img src={require('../images/print/tenUp_screen.jpg')} alt="Illustration" /></li>
                <li data-tags="Print Design" onClick={ljsFunction}><img src={require('../images/print/jumpsurvival.jpg')} alt="Illustration" /></li>
                <li data-tags="Print Design" onClick={ojasFunction}><img src={require('../images/logo/Canopy/Final_Canopy.jpg')} alt="Illustration" /></li>
                <li data-tags="Print Design" onClick={ojasFunction}><img src={require('../images/print/ojas2.jpg')} alt="Illustration" /></li>
                <li data-tags="Print Design" onClick={ojasFunction}><img src={require('../images/print/ojas.jpg')} alt="Illustration" /></li>
                <li data-tags="Print Design" onClick={ojasFunction}><img src={require('../images/print/apple.jpg')} alt="Illustration" /></li>
            </ul>
		)
	}
}

export default Printdesign;