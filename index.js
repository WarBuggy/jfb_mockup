function zoomOnClick(event) {
    let element = event.target;
    if (element.innerText == 'Phóng to') {
        element.innerText = 'Thu nhỏ';
    } else {
        element.innerText = 'Phóng to';
    }
};

function buyOnClick(event) {
    alert('Khi không chọn một món đồ nội thất nào, sẽ có chức năng mua. Khi chọn một món đồ, sẽ thành chức năng nâng cấp.');
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