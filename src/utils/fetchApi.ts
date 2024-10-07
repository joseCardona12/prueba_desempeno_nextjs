export const fetchApi = async(url:string,options?: {method?:string, headers?:{}, body?:string}) =>{
    const response = await fetch(url,options);
    if(!response.ok)throw new Error(response.statusText);
    return await response.json();
}