const { formatDate } = require('../utils/date');

class Note {
  constructor(id, title, body, author, date = new Date().toISOString()) {
    this.id = id;                    
    this.title = title;               
    this.body = body;                
    this.author = author;            
    this.date = formatDate(date);     
    this.sharedWith = [];             
  }
}

module.exports = Note;
