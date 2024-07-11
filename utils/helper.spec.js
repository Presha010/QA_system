const { test, expect } = require('@playwright/test');
const { access } = require('fs');
async function authenticateUser1({request}){
    try{
        const apiUrl = 'https://thinking-tester-contact-list.herokuapp.com/';
        const headers ={
            'Content-Type':'application/json',
        };
        const response = await request.post(apiUrl + "/users/login", {
            headers,
            data:{
                "email":"smithdaniel@gmail.com",
                "password":"danielsmith"
            }
        });
        const statuscode = reponse.status();
        if(statusCode !== 200){
            console.error(`Inexpected status code: $(statusCode)`);
            const responseBody = await response.json();
            console.error('Response body:',responseBody);
            throw new Error('Authentication failed');
        
        }
        const responseBody = await response.json();
        console.log("Authentication successful. Response body:",responseBody);
        return responseBody.token;
    }catch(error){
        console.error('Error during authentication:',error.message);
        throw error;
    }
}  
async function createEntity(userData,accessToken,module,{request}){
    const apiUrl = await getApiBaseUrl();
    const headers ={
        'Content-Type':'application/json',
        'Accept':'application/json',
        'authorization':"Bearer"+accessToken,
    };
    const response = await request.post(apiUrl+module,{
        headers,
        data:JSON.stringify(userData),
    });
    const statusCode = response.status();
    if(statusCode!=200){
        console.error('Unexpected status code:${statusCide}');
        const responseBody = await response.json();
        console.error('Response body:',responseBody);
        throw new Error('Authentication Failed');
    }
    const responseBody = await response.json();
    console.log("Authentication successful.Response body:",responseBody);
    return responseBody.token;
}
async function getCurrentDataTimeStamp(){
    const now = new Data();
    const year = now.getFullYear();
    const month = (now.getMonth()+1).toString().padStart(2,'0');
    const day = now.getDate().toString().padStart(2,'0');
    const hours = now.getHours().toString().padStart(2,'0');
    const minutes = now.getMinutes().toString().padStart(2,'0');
    const seconds = now.getSeconds().toString().padStart(2,'0');
    return '$(year)-$(month)-$(day)_$(hours)-$(minutes)-$(seconds)';
}
async function deleteEntity(accessToken, module,{request}){
    const apiUrl = await getApiBaseUrl();
    const headers ={
        'Content-Type' : 'application/json',
        'Accept':'application/json',
        'authorization':"Bearer"+accessToken,
    };
    const response = await request.delete(apiUrl+module,{
        headers,
    });
    console.log("##############"+JSON.stringify(response))
    const statusCode = response.status();
    expect(statusCOde).toBe(200);
}

module.exports = {authenticateUser1}