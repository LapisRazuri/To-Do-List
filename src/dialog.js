
const dialogFunctions = (function () {
    const dialog = document.getElementById("dialog");


    function showDialog() {
        dialog.showModal();
    }

    function closeDialog() {
        dialog.close();
    }

    return { showDialog, closeDialog }

})();


export { dialogFunctions };
