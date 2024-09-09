var navbar = document.querySelector(".side-navbar")
var signoutbar = document.querySelector(".signout-bar")

function shownavbar()
{
    navbar.style.left="0"
}

function closenavbar()
{
    navbar.style.left="-60%"

}

function showsignout()
{
    signoutbar.style.right="0"
}

function closesignout()
{
    signoutbar.style.right="-60%"
}