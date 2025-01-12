class Note {
    constructor(id, title, body, date = new Date().toISOString()) {
      this.id = id;      
      this.title = title; 
      this.body = body;   
      this.date = date;   
    }
  }
  
  module.exports = Note;