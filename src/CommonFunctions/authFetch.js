export async function authFetch(url , options={} ){
    const token = localStorage.getItem("token");
    debugger
    const headers = {
        ...(options.headers || {}),
        //Authorization : `Bearer ${token}`,
        "Content-Type" : "application/json" 
    }

    try {
        var response = await fetch(url,{
            ...options,
            headers,
            credentials: "include",
        });

        if(response.status == 401){
            //localStorage.removeItem("token");
            window.location.href = 'http://localhost:5173/'
            return;
        }

        return response;
    }
    catch (err) {
    console.error("authFetch error:", err);
    throw err;
  }
}