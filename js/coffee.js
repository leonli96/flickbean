function buildOrder(el, formtype){
	var beantype = el.children[0].innerText.split('\n')[0];
    var form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute("action", 'buildorder.flick');
    var typeField = document.createElement("input");
    typeField.setAttribute("type", "hidden");
    typeField.setAttribute("name", "formtype"); 
    typeField.setAttribute("value", formtype);
    form.appendChild(typeField);
    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", "bean"); 
    hiddenField.setAttribute("value", beantype);
    form.appendChild(hiddenField);
    document.body.appendChild(form);
    form.submit();
}

function inArray(value, array) {
  return array.indexOf(value) > -1;
}

function initBuildPage(){
	displaySelection('light');
	displaySelection('12');
	displaySelection('paper');
}

function displaySelection(elId){
	selectStyle = 'background: rgba(102, 255, 102, 0.6);box-shadow: inset 0px 0px 8px rgba(0,0,0,0.5);';
	unselectStyle = 'background: rgba(255,255,255,0.23); box-shadow: none;';
	rTypes = ['light', 'medium', 'dark'];
	amounts = ['12', '24', '36'];
	packages = ['paper', 'plastic', 'jar'];
	document.getElementById(elId).setAttribute('style', selectStyle);
	if (inArray(elId, rTypes)){
		for (var i = 0; i < rTypes.length; i++){
			if (elId != rTypes[i]){
				document.getElementById(rTypes[i]).setAttribute('style', unselectStyle);
			}
		}
		document.getElementById('finalroasttype').innerText = 'Roast: ' + elId;
	}
	if (inArray(elId, amounts)){
		for (var i = 0; i < amounts.length; i++){
			if (elId != amounts[i]){
				document.getElementById(amounts[i]).setAttribute('style', unselectStyle);
			}
		}
		document.getElementById('finalamount').innerText = 'Amount: ' + elId;
	}
	if (inArray(elId, packages)){
		for (var i = 0; i < packages.length; i++){
			if (elId != packages[i]){
				document.getElementById(packages[i]).setAttribute('style', unselectStyle);
			}
		}
		document.getElementById('finalpackage').innerText = 'Packaging: ' + elId;
	}
	document.getElementById('finalinstructions').innerText = 'Additional Instructions: ' + document.getElementById('instructions').value;

}

function setRoastType(roastType){
	displaySelection(roastType);
	document.getElementById('roasttype').value = roastType;
}

function setAmount(amount){
	displaySelection(amount);
	document.getElementById('amount').value = amount;
}

function setPackage(pack){
	displaySelection(pack);
	document.getElementById('packaging').value = pack;
}

function displayInstructions(){
	document.getElementById('finalinstructions').innerText = 'Additional Instructions: ' + document.getElementById('instructions').value;
}