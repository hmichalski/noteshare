class Note {
  constructor(id, title, body, author, date = new Date().toISOString()) {
      this.id = id;            
      this.title = title;      
      this.body = body;        
      this.author = author;    
      this.date = date;        
      this.sharedWith = [];    
  }
}

module.exports = Note;