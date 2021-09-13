window.onload = function() {
    let buyItemList = document.getElementsByClassName('ui-standard-buy-popup-item-list-grid')[0];
    for (let i = 0; i < 20; i++) {
        let item = document.createElement('div');
        item.classList.add('ui-standard-buy-popup-item-list-grid-item');
        buyItemList.appendChild(item);
        item.onclick = function(event) {
            onBuyItemSlect(event);
        };
    }

    let buyItemListChangeColor = document.getElementsByClassName('ui-standard-buy-popup-item-list-grid')[1];
    for (let i = 0; i < 4; i++) {
        let item = document.createElement('div');
        item.classList.add('ui-standard-buy-popup-item-list-grid-item');
        item.style.opacity = 0.5;
        buyItemListChangeColor.appendChild(item);
    }
    buyItemListChangeColor.children[2].style.opacity = 1;
    buyItemListChangeColor.children[2].classList.add('selected');

    let buyItemListUpgrade = document.getElementsByClassName('ui-standard-buy-popup-item-list-grid')[2];
    for (let i = 0; i < 4; i++) {
        let item = document.createElement('div');
        item.classList.add('ui-standard-buy-popup-item-list-grid-item');
        buyItemListUpgrade.appendChild(item);
    }
    buyItemListUpgrade.children[0].style.opacity = 0.5;
    buyItemListUpgrade.children[1].style.opacity = 0.5;
    buyItemListUpgrade.children[2].classList.add('selected');
};

function zoomOnClick(event, divId) {
    let element = event.target;
    let divView = document.getElementById(divId);
    if (element.innerText == 'Phóng to') {
        element.innerText = 'Thu nhỏ';
        divView.classList.add('zoom-in');
    } else {
        element.innerText = 'Phóng to';
        divView.classList.remove('zoom-in');
    }
};

function showHomeNameEdit(event) {
    document.getElementById('divOverlay').style.display = 'grid';
    document.getElementById('divChangeName').style.display = 'grid';
    document.getElementById('inputChangeName').value = document.getElementById('divHomeName').innerText.replace('(edit)', '').trim();
};

function hideDivChangeName() {
    document.getElementById('divOverlay').style.display = 'none';
    document.getElementById('divChangeName').style.display = 'none';
};

function shareOnClick() {
    document.getElementById('divOverlay').style.display = 'grid';
    document.getElementById('divSharePopup').style.display = 'grid';
};

function onSharePopupShowChange(event) {
    let display = 'none';
    if (event.target.checked) {
        display = 'block';
    }
    document.getElementById('divSharePopupLike').style.display = display;
    document.getElementById('divSharePopupLikeQuantity').style.display = display;
};

function onSharePopupShowLikeChange(event) {
    let display = 'none';
    if (event.target.checked) {
        display = 'block';
    }
    document.getElementById('divSharePopupLike').style.display = display;
    document.getElementById('divSharePopupLikeQuantity').style.display = display;
};

function onSharePopupShowValueChange(event) {
    let display = 'none';
    if (event.target.checked) {
        display = 'block';
    }
    document.getElementById('divSharePopupValue').style.display = display;
    document.getElementById('divSharePopupValueQuantity').style.display = display;
};


function hideDivSharePopup() {
    document.getElementById('divOverlay').style.display = 'none';
    document.getElementById('divSharePopup').style.display = 'none';
};

function visitOnClick() {
    document.getElementById('divOverlay').style.display = 'grid';
    document.getElementById('divHomeVisitPopup').style.display = 'grid';
};

function visitSearchCategoryOnClick(event) {
    let catList = document.getElementsByClassName('ui-standard-home-visit-popup-category-item');
    for (let i = 0; i < catList.length; i++) {
        let catItem = catList[i];
        if (catItem.classList.contains('selected')) {
            catItem.classList.remove('selected');
        }
    }
    let element = event.target.parentElement;
    element.classList.add('selected');
    if (element.id != null && element.id != '') {
        document.getElementById('divHomeVisitPopupSearch').style.display = 'grid';
        if (document.getElementById('inputHomeVisitPopupSearchAddress').value.trim().length != 5) {
            document.getElementById('divHomeVisitPopupSearchResultFive').style.display = 'none';
        } else {
            document.getElementById('divHomeVisitPopupSearchResultFive').style.display = 'grid';
        }
        document.getElementById('divHomeVisitPopupSearchResultMulti').style.display = 'none';
    } else {
        document.getElementById('divHomeVisitPopupSearch').style.display = 'none';
        document.getElementById('divHomeVisitPopupSearchResultFive').style.display = 'none';
        document.getElementById('divHomeVisitPopupSearchResultMulti').style.display = 'grid';
    }
};

function inputHomeVisitPopupSearchOnKeyup(event) {
    if (event.target.value.trim().length == 5) {
        document.getElementById('divHomeVisitPopupSearchResultFive').style.display = 'grid';
        document.getElementById('divHomeVisitPopupSearchResultMulti').style.display = 'none';
    } else {
        document.getElementById('divHomeVisitPopupSearchResultFive').style.display = 'none';
        document.getElementById('divHomeVisitPopupSearchResultMulti').style.display = 'none';
    }
};

function hideDivVisitPopup() {
    document.getElementById('divOverlay').style.display = 'none';
    document.getElementById('divHomeVisitPopup').style.display = 'none';
    document.getElementById('inputHomeVisitPopupSearchAddress').value = '';
    document.getElementById('divHomeVisitPopupSearchResultFive').style.display = 'none';
};

function vistSearchResultItemLikeOnClick(event) {
    let divIcon = event.target.parentElement.children[3];
    let divText = event.target.parentElement.children[4];
    if (divIcon.classList.contains('like')) {
        divIcon.classList.remove('like');
        divText.innerText = parseInt(divText.innerText) - 1;
        return;
    }
    divIcon.classList.add('like');
    divText.innerText = parseInt(divText.innerText) + 1;
};

function inviteOnClick(event) {
    document.getElementById('divOverlay').style.display = 'grid';
    document.getElementById('divInvitePopup').style.display = 'grid';
};

function closeInvitePopup() {
    document.getElementById('divOverlay').style.display = 'none';
    document.getElementById('divInvitePopup').style.display = 'none';
};

function buyOnClick(event) {
    let buttonBuy = document.getElementsByClassName('ui-standard-home-buy')[0];
    let textBuy = buttonBuy.innerText;
    if (textBuy == 'Mua') {
        document.getElementsByClassName('ui-standard-home-share')[0].style.display = 'none';
        document.getElementsByClassName('ui-standard-home-member')[0].style.display = 'none';
        document.getElementsByClassName('ui-standard-buy-popup')[0].style.display = 'grid';
        document.getElementsByClassName('ui-standard-home-visit')[0].style.display = 'none';
        buttonBuy.innerText = 'Hủy';
    } else if (textBuy == 'Hủy') {
        closeBuyPopup();
    }
};

function onBuyCategorySelect(event) {
    document.getElementsByClassName('ui-standard-home-buy')[0].innerText = 'Hủy';
    clearAllBuyCategorySelect();
    event.target.classList.add('selected');
    document.getElementsByClassName('ui-standard-buy-popup-item-list-outer')[0].style.display = 'block';
    clearAllBuyItemSelect();
    document.getElementsByClassName('ui-standard-buy-popup-preview')[0].style.display = 'none';
    clearAllBuyColorSelect();
    document.getElementsByClassName('ui-standard-buy-popup-color-grid')[0].style.display = 'none';
};

function onBuyItemSlect(event) {
    clearAllBuyItemSelect();
    event.target.classList.add('selected');
    document.getElementsByClassName('ui-standard-buy-popup-preview')[0].style.display = 'grid';
    document.getElementsByClassName('ui-standard-buy-popup-color-grid')[0].style.display = 'grid';
    clearAllBuyColorSelect();
    document.getElementsByClassName('ui-standard-buy-popup-color-grid-item')[0].classList.add('selected');
    document.getElementsByClassName('ui-standard-home-buy')[0].innerText = 'Mua!'
};

function onBuyColorSelect(event) {
    clearAllBuyColorSelect();
    event.target.classList.add('selected');
};

function clearAllBuyCategorySelect() {
    let itemCat = document.getElementsByClassName('ui-standard-buy-popup-category-grid-item');
    for (let i = 0; i < itemCat.length; i++) {
        let item = itemCat[i];
        if (item.classList.contains('selected')) {
            item.classList.remove('selected');
        }
    }
};

function clearAllBuyItemSelect() {
    let itemList = document.getElementsByClassName('ui-standard-buy-popup-item-list-grid-item');
    for (let i = 0; i < itemList.length; i++) {
        let item = itemList[i];
        if (item.classList.contains('selected')) {
            item.classList.remove('selected');
        }
    }
};

function clearAllBuyColorSelect() {
    let itemList = document.getElementsByClassName('ui-standard-buy-popup-color-grid-item');
    for (let i = 0; i < itemList.length; i++) {
        let item = itemList[i];
        if (item.classList.contains('selected')) {
            item.classList.remove('selected');
        }
    }
};

function closeBuyPopup() {
    document.getElementsByClassName('ui-standard-home-buy')[0].innerText = 'Mua';
    document.getElementsByClassName('ui-standard-home-share')[0].style.display = 'block';
    document.getElementsByClassName('ui-standard-home-member')[0].style.display = 'grid';
    document.getElementsByClassName('ui-standard-home-visit')[0].style.display = 'block';
    document.getElementsByClassName('ui-standard-buy-popup')[0].style.display = 'none';
    clearAllBuyCategorySelect();
    document.getElementsByClassName('ui-standard-buy-popup-item-list-outer')[0].style.display = 'none';
    clearAllBuyItemSelect();
    document.getElementsByClassName('ui-standard-buy-popup-preview')[0].style.display = 'none';
    clearAllBuyColorSelect();
    document.getElementsByClassName('ui-standard-buy-popup-color-grid')[0].style.display = 'none';
};