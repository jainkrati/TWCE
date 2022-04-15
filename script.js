async function login() {
    const res=await fetch ("https://reqres.in/api/login");
    const record=await res.json();

}

login();

