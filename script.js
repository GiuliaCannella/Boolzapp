/* Milestone 1
- Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
- Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

Milestone 2
- Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
- Click sul contatto mostra la conversazione del contatto cliccato 

Milestone 3
- Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
- Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo. 

Milestone 4
- Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

Milestone 5
- Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
- Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti */

// controllo vue
const { createApp } = Vue;

// vue
const app = createApp({
  data() {
    return {
        contacts: [
            {
              id: 1,
              name: "Michele",
              avatar: "_1",
              visible: true,
              messages: [
                {
                  id: 1,
                  date: "10/01/2020 15:30:55",
                  text: "Hai portato a spasso il cane?",
                  status: "sent",
                },
                {
                  id: 2,
                  date: "10/01/2020 15:50:00",
                  text: "Ricordati di stendere i panni",
                  status: "sent",
                },
                {
                  id: 3,
                  date: "10/01/2020 16:15:22",
                  text: "Tutto fatto!",
                  status: "received",
                },
              ],
            },
            {
              id: 2,
              name: "Fabio",
              avatar: "_2",
              visible: true,
              messages: [
                {
                  id: 1,
                  date: "20/03/2020 16:30:00",
                  text: "Ciao come stai?",
                  status: "sent",
                },
                {
                  id: 2,
                  date: "20/03/2020 16:30:55",
                  text: "Bene grazie! Stasera ci vediamo?",
                  status: "received",
                },
                {
                  id: 3,
                  date: "20/03/2020 16:35:00",
                  text: "Mi piacerebbe ma devo andare a fare la spesa.",
                  status: "sent",
                },
              ],
            },
            {
              id: 3,
              name: "Samuele",
              avatar: "_3",
              visible: true,
              messages: [
                {
                  id: 1,
                  date: "28/03/2020 10:10:40",
                  text: "La Marianna va in campagna",
                  status: "received",
                },
                {
                  id: 2,
                  date: "28/03/2020 10:20:10",
                  text: "Sicuro di non aver sbagliato chat?",
                  status: "sent",
                },
                {
                  id: 3,
                  date: "28/03/2020 16:15:22",
                  text: "Ah scusa!",
                  status: "received",
                },
              ],
            },
            {
              id: 4,
              name: "Alessandro B.",
              avatar: "_4",
              visible: true,
              messages: [
                {
                  id: 1,
                  date: "10/01/2020 15:30:55",
                  text: "Lo sai che ha aperto una nuova pizzeria?",
                  status: "sent",
                },
                {
                  id: 2,
                  date: "10/01/2020 15:50:00",
                  text: "Si, ma preferirei andare al cinema",
                  status: "received",
                },
              ],
            },
            {
              id: 5,
              name: "Alessandro L.",
              avatar: "_5",
              visible: true,
              messages: [
                {
                  id: 1,
                  date: "10/01/2020 15:30:55",
                  text: "Ricordati di chiamare la nonna",
                  status: "sent",
                },
                {
                  id: 2,
                  date: "10/01/2020 15:50:00",
                  text: "Va bene, stasera la sento",
                  status: "received",
                },
              ],
            },
            {
              id: 6,
              name: "Claudia",
              avatar: "_6",
              visible: true,
              messages: [
                {
                  id: 1,
                  date: "10/01/2020 15:30:55",
                  text: "Ciao Claudia, hai novità?",
                  status: "sent",
                },
                {
                  id: 2,
                  date: "10/01/2020 15:50:00",
                  text: "Non ancora",
                  status: "received",
                },
                {
                  id: 3,
                  date: "10/01/2020 15:51:00",
                  text: "Nessuna nuova, buona nuova",
                  status: "sent",
                },
              ],
            },
            {
              id: 7,
              name: "Federico",
              avatar: "_7",
              visible: true,
              messages: [
                {
                  id: 1,
                  date: "10/01/2020 15:30:55",
                  text: "Fai gli auguri a Martina che è il suo compleanno!",
                  status: "sent",
                },
                {
                  id: 2,
                  date: "10/01/2020 15:50:00",
                  text: "Grazie per avermelo ricordato, le scrivo subito!",
                  status: "received",
                },
              ],
            },
            {
              id: 8,
              name: "Davide",
              avatar: "_8",
              visible: true,
              messages: [
                {
                  id: 1,
                  date: "10/01/2020 15:30:55",
                  text: "Ciao, andiamo a mangiare la pizza stasera?",
                  status: "received",
                },
                {
                  id: 2,
                  date: "10/01/2020 15:50:00",
                  text: "No, l'ho già mangiata ieri, ordiniamo sushi!",
                  status: "sent",
                },
                {
                  id: 3,
                  date: "10/01/2020 15:51:00",
                  text: "OK!!",
                  status: "received",
                },
              ],
            },
            {
              id: 9,
              name: "Manuel",
              avatar: "_9",
              visible: true,
              messages: [
                {
                  id: 1,
                  date: "10/01/2020 15:30:55",
                  text: "Sushi stasera?",
                  status: "received",
                },
                {
                  id: 2,
                  date: "10/01/2020 15:50:00",
                  text: "Non ho soldi",
                  status: "sent",
                },
                {
                  id: 3,
                  date: "10/01/2020 15:51:00",
                  text: ":(",
                  status: "received",
                },
              ],
            },
          ],
      message: "",
      indexArray: 0,
      answers: [
        "Si!",
        "No!",
        "Forse",
        "Assolutamente si",
        "Provaci",
        "Potrebbe funzionare",
        "Forse è meglio di no",
        "Assolutamente no",
        "Usciamo?",
        "Ok",
        "Andiamo in palestra?",
      ],
      filter: "",
    };
  },
  methods: {
    lastChat(index) {
      let messages = this.contacts[index].messages;
      return messages[messages.length - 1].text;
    },
    lastDateMessage(index) {
      let messages = this.contacts[index].messages;
      return messages[messages.length - 1].date;
    },
    changeChat(index) {
      this.indexArray = index;
    },
    getLastRicevuto() {
      let messages = this.contacts[this.indexArray].messages;
      let receivedMessages = messages.filter(
        (message) => message.status === "received"
      );
      return receivedMessages[receivedMessages.length - 1].date;
    },
    sentMessage() {
      let message = this.message.trim();

      if (message.length > 0 && message != null) {
        let data = {
          date: "10/01/2020 16:15:22",
          text: message,
          status: "sent",
          hover: false,
        };

        this.contacts[this.indexArray].messages.push(data);
        this.message = "";
        setTimeout(() => {
          this.getRandomAnswer();
        }, 2000);
      }
    },
    getRandomAnswer() {
      let numero = this.getRandomNumber(0, this.answers.length - 1);
      let message = this.answers[numero];

      let data = {
        date: "10/01/2020 16:15:22",
        text: message,
        status: "received",
        hover: false,
      };

      this.contacts[this.indexArray].messages.push(data);
    },
    getRandomNumber(min, max) {
      return Math.floor(Math.random() * max + 1 - min) + min;
    },
  },
  computed: {
    filterChat() {
      const textSearch = this.filter.toLowerCase();
      return this.contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(textSearch);
      });
    },
  },
});

// stampa vue
app.mount("#app");
