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
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    //Make a http put request
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    //Make a delete request

    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: "DELETE",
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(data => resolve("Resource deleted!"))
                .catch(err => reject(err));
        });
    }

}