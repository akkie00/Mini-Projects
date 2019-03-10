function toggleModal() {
    const modal = document.getElementById('modal-container');
    const displayValue = window.getComputedStyle(modal).getPropertyValue('display');

    console.log(displayValue);
    if(displayValue === 'none'){
        modal.style.display = 'grid';
    }
    else{
        modal.style.display = "none";
    }
}