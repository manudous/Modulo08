import * as Clients from "./data-business";
import * as ClientsElement from "./client-business"

function printClientsAccounts() {
    const clients = Clients.getClients();
    const ul = document.createElement("ul");
    for (let client of clients) {
      const element = ClientsElement.getClientElement(client);
      ul.appendChild(element);
    }
  
    document.getElementById("root").appendChild(ul);
  }

export {printClientsAccounts};