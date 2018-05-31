/***********************************
 * EasyHTTP Library
 * Library for HTTP requests
 * 
 * @author: David Breier
 * @version: 3.0.0
 * @license: MIT
 * 
 ***********************************/

class easyHTTP {

    //Make http get request
    async get(url) {
     const response = await fetch(url);
     const resData = await response.json();
     return resData; 
    }
    //Make http post request
    async post(url, data) {
        const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
        const resData = await response.json();
        return resData;        
    }
    //Make a http put request
    async put(url, data) {
        const response = await fetch(url, {
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                const resData = await response.json();
                return resData; 
        
    }
    //Make a delete request

    async delete(url) {
        const response = await fetch(url, {
                    method: "DELETE",
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                const resData = await "Resource deleted";
                return resData;
    }

}