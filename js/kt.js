{
//kiem tra user name
    If ( document.flogin.USERNAME.value= ="")
    {
        Alert( "invalidEmail, Vui long nhap Email");
        document.flogin.USERNAME.focus( );
        return false;
    }
//kiem tra password
    If ( document.flogin.PASSWORD.value= ="")
    {
        Alert( "Vui long nhap password");
        document.flogin.PASSWORD.focus( );
        return false;
    }
    Return true;
}