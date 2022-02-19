function enter_user_name() {
    var users_name = document.getElementById("user_name").value;

    localStorage.setItem("name", users_name);

    window.location = "ThatChat_room.html";
}