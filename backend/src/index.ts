import express from 'express';

const ideas = [
   { nick: 'cool-idea-nick-1', name: 'Idea 1', description: 'Descriptions for Idea 1' },
   { nick: 'cool-idea-nick-2', name: 'Idea 2', description: 'Descriptions for Idea 2' },
   { nick: 'cool-idea-nick-3', name: 'Idea 3', description: 'Descriptions for Idea 3' },
   { nick: 'cool-idea-nick-1', name: 'Idea 4', description: 'Descriptions for Idea 4' },
   { nick: 'cool-idea-nick-4', name: 'Idea 5', description: 'Descriptions for Idea 5' },
 ];

const expressApp = express();
expressApp.get('/ping', (req,res) => {
   res.send('pong')
})
expressApp.get('/ideas', (req,res) => {
   res.send(ideas)
})
expressApp.listen(3000, () => {
   console.info('Start server at http://localhost:3000')
})