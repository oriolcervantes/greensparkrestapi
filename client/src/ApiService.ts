import Plugin from './Interfaces/plugin';

const URL = "http://localhost:3001";

function fetchRequest(url: string, options: any): Promise<any> {
  return fetch(url, options)
    .then(res => res.status < 400 ? res : Promise.reject())
    .then(res => res.status !== 204 ? res.json() : res)
    .catch(err => {
      console.log("Error:", err)
    });
}

export function getPlugins(): Promise<Plugin[]> {
  return fetchRequest(`${URL}/plugins`, {
    method: "GET",
    credentials: 'include',
    mode: 'cors',
    headers: {
      "Content-Type": "application/json"
    },
  });
}